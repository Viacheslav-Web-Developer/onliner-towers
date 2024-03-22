"use client"
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from 'react';
import {Page, Document, pdfjs} from 'react-pdf';
import s from './PdfViewer.module.scss';
import Image from "next/image";
import classNames from "classnames";

import PdfViewerPage from "@/components/PdfViewer/PdfViewer-page";
import PdfViewerSidebarPage from "@/components/PdfViewer/PdfViewer-sidebar-page";

import menuButtonImg from '@/public/PdfViewer/menuButton.svg'
import exitButtonImg from '@/public/PdfViewer/exit.svg'
import minusImg from '@/public/PdfViewer/minus.svg'
import plusImg from '@/public/PdfViewer/plus.svg'
import arrowImg from '@/public/PdfViewer/arrow.svg'
import rotateImg from '@/public/PdfViewer/rotate.svg'


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const PdfViewer = ({pdfName}: { pdfName: string }) => {
    const router = useRouter();

    // Document params
    const [pagesCount, setPagesCount] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>(1);

    // Header params
    const [inputPageNumber, setInputPageNumber] = useState<string>('1');
    const [scale, setScale] = useState<number>(100);
    const [rotate, setRotate] = useState<number>(0);

    // Sidebar params
    const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
    const [sidebarWidth, setSidebarWidth] = useState<number>(0);
    const [sidebarPageWidth, setSidebarPageWidth] = useState<number>(0);

    // Main page
    const [pageWidth, setPageWidth] = useState<number>(0);
    const [pageHeight, setPageHeight] = useState<number>(0)

    // Main & sidebar pages width
    useEffect(() => {
        let screenWidth = window.innerWidth!;
        let header = document.getElementById('pdf_viewer_header')!;
        let content = document.getElementById('pdf_viewer_content')!;
        let contentWidth = content!.offsetWidth;
        let contentHeight = content!.offsetHeight;

        content.style.minHeight = `calc(100vh - ${header.offsetHeight})`;

        setPageWidth((contentWidth * 0.55) > (contentHeight * 0.98 * 210 / 297) ? (contentHeight * 0.98 * 210 / 297) : (contentWidth * 0.55))
        setSidebarPageWidth(contentWidth * 0.15)
        setSidebarWidth(sidebarPageWidth + 100)

        switch (true) {
            case (screenWidth > 992 && screenWidth <= 1200):

                break;

            case (screenWidth > 768 && screenWidth <= 992):

                break;

            case (screenWidth > 576 && screenWidth <= 768):
                setPageWidth((contentWidth * 0.95 - 60) > (contentHeight * 0.98 * 210 / 297) ? (contentHeight * 0.98 * 210 / 297) : (contentWidth * 0.95 - 60))
                setSidebarPageWidth(contentWidth * 0.15)
                setSidebarWidth(contentWidth)
                break;

            case (screenWidth <= 576):
                setPageWidth((contentWidth * 0.9) > (contentHeight * 0.98 * 210 / 297) ? (contentHeight * 0.98 * 210 / 297) : (contentWidth * 0.9))
                setSidebarPageWidth(contentWidth * 0.15)
                setSidebarWidth(contentWidth)
                break;

            default:
                setPageWidth((contentWidth * 0.55) > (contentHeight * 0.98 * 210 / 297) ? (contentHeight * 0.98 * 210 / 297) : (contentWidth * 0.55))
                setSidebarPageWidth(contentWidth * 0.15)
                break;
        }
    })

    // Change input page number
    useEffect(() => {
        setInputPageNumber(String(pageNumber))
    }, [pageNumber])

    // Document pages count
    const onDocumentLoadSuccess = ({numPages}: { numPages: number }): void => {
        setPagesCount(numPages);
    }

    // Next or prev page
    const handleOnClick = (next: boolean): void => {
        if (next && pageNumber < pagesCount) {
            setPageNumber(pageNumber + 1)
        } else if (!next && pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    // Input page number
    const handleChangePageNumber = (inputValue: string): void => {
        setInputPageNumber(inputValue);
        +inputValue > 0 && +inputValue <= pagesCount && setPageNumber(Number(inputValue))
    }

    // Rotate page
    const handleRotate = () => {
        setRotate(rotate < 270 ? rotate + 90 : 0)
    }

    // Close / open sidebar
    const toggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen)
    }

    // Sidebar render all pages
    const pagesRender = (type: string) => {
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(type === 'main' ? <PdfViewerPage pageNumber={i} scale={scale} rotate={rotate} pageWidth={pageWidth} pageHeight={pageHeight}/> : <PdfViewerSidebarPage pageNumber={pageNumber} sidebarPageWidth={sidebarPageWidth} sidebarPageNumber={i} setPageNumber={setPageNumber}/>)
        }

        return pages;
    }

    const sidebarClassName = classNames([s.sidebar as string], {
        [s.open as string]: sidebarIsOpen
    })

    const headerMenuButtonClassName = classNames([s.menu_button as string], {
        [s.active]: sidebarIsOpen
    })

    return (
        <div className={s.layout}>
            <div className={s.header} id={'pdf_viewer_header'}>
                <div className={s.left}>
                    <button className={headerMenuButtonClassName} onClick={toggleSidebar}>
                        <Image src={menuButtonImg} alt={'Menu button'}/>
                    </button>
                    <h1 className={s.file_name}>{pdfName}</h1>
                </div>
                <div className={s.middle}>
                    <div className={s.pages_counter}>
                        <input type="text" onChange={(e) => handleChangePageNumber(e.target.value)}
                               value={inputPageNumber} className={s.input} onBlur={(e) => {
                            e.currentTarget.value = String(pageNumber)
                        }}/>
                        <span>/</span><span>{pagesCount}</span>
                    </div>
                    <div className={s.delimiter}/>
                    <div className={s.scale}>
                        <button className={s.button}><Image src={minusImg} alt={'Minus'}
                                                            onClick={() => setScale(scale - 10)}/></button>
                        <input type="text" className={s.input} value={scale + '%'} disabled={true}/>
                        <button className={s.button}><Image src={plusImg} alt={'Plus'}
                                                            onClick={() => setScale(scale + 10)}/></button>
                    </div>
                    <div className={s.delimiter}/>
                    <div className={s.add_options}>
                        <button className={s.rotate_button} onClick={handleRotate}><Image src={rotateImg}
                                                                                          alt={'Повернуть'}/></button>
                    </div>
                </div>
                <div className={s.right}>
                    <button className={s.exit_button} onClick={() => router.back()}>
                        <Image src={exitButtonImg} alt={'Exit'}/>
                    </button>
                </div>
            </div>
            <div className={s.content} id={'pdf_viewer_content'}>
                <div className={sidebarClassName} style={{
                    width: `${sidebarWidth}px`,
                    minWidth: `${sidebarWidth}px`,
                    marginLeft: `-${sidebarWidth}px`
                }}>
                    <div className={s.sidebar_header}>
                        <h2 className={s.title}>Содержание</h2>
                        <button className={s.close_button} onClick={toggleSidebar}><Image src={plusImg}
                                                                                          alt={'Закрыть'}/></button>
                    </div>
                    <Document file={'/docs/' + pdfName} onLoadSuccess={onDocumentLoadSuccess} className={s.sidebar_document}>
                        {pagesRender('sidebar')}
                    </Document>
                </div>
                <button className={s.button + ' ' + s.prev} onClick={() => handleOnClick(false)}>
                    <Image src={arrowImg} alt={'Предыдущая страница'}/>
                </button>
                <Document file={'/docs/' + pdfName} onLoadSuccess={onDocumentLoadSuccess} className={s.document}>
                    <div className={s.desktop}>
                        <Page pageNumber={pageNumber} className={s.page} scale={scale / 100} rotate={rotate} width={pageWidth} height={pageHeight}/>
                    </div>
                    <div className={s.mobile}>
                        {pagesRender('main')}
                    </div>
                </Document>
                <button className={s.button + ' ' + s.next} onClick={() => handleOnClick(true)}>
                    <Image src={arrowImg} alt={'следующая страница'}/>
                </button>
            </div>
        </div>
    );
};

export default PdfViewer;