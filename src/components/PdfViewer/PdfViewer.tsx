"use client"
import React, {useEffect, useState} from 'react';
import { Page, Document, pdfjs } from 'react-pdf';
import s from './PdfViewer.module.scss';
import Image from "next/image";

import menuButtonImg from '@/public/PdfViewer/menuButton.svg'
import minusImg from '@/public/PdfViewer/minus.svg'
import plusImg from '@/public/PdfViewer/plus.svg'
import arrowImg from '@/public/PdfViewer/arrow.svg'
import rotateImg from '@/public/PdfViewer/rotate.svg'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfName }: { pdfName: string }) => {
    const [numPages, setNumPages] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [inputPageNumber, setInputPageNumber] = useState<string>('1');
    const [scale, setScale] = useState<number>(100);
    const [rotate, setRotate] = useState<number>(0)

    useEffect(() => {
        setInputPageNumber(String(pageNumber))
    }, [pageNumber])

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
        setNumPages(numPages);
    }

    const handleOnClick = (next: boolean): void => {
        if (next && pageNumber < numPages){
            setPageNumber(pageNumber + 1)
        }
        else if (!next && pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    const handleChangePageNumber = (inputValue: string): void => {
        setInputPageNumber(inputValue);
        +inputValue > 0 && +inputValue <= numPages && setPageNumber(Number(inputValue))
    }

    const handleRotate = () => {
        setRotate(rotate < 270 ? rotate + 90 : 0)

    }

    return (
        <div className={s.layout}>
            <div className={s.header}>
                <div className={s.left}>
                    <button className={s.menu_button}>
                        <Image src={menuButtonImg} alt={'Menu button'} />
                    </button>
                    <p className={s.file_name}>{ pdfName }</p>
                </div>
                <div className={s.middle}>
                    <div className={s.pages_counter}>
                        <input type="text" onChange={(e) => handleChangePageNumber(e.target.value)} value={inputPageNumber} className={s.input} onBlur={(e) => {e.currentTarget.value = String(pageNumber)}}/>
                        <span> / {numPages}</span>
                    </div>
                    <div className={s.delimiter}/>
                    <div className={s.scale}>
                        <button className={s.button}><Image src={minusImg} alt={'Minus'} onClick={() => setScale(scale - 10)}/></button>
                        <input type="text" className={s.input} value={scale + '%'} disabled={true}/>
                        <button className={s.button}><Image src={plusImg} alt={'Plus'} onClick={() => setScale(scale + 10)}/></button>
                    </div>
                    <div className={s.delimiter}/>
                    <div className={s.add_options}>
                        <button className={s.rotate_button} onClick={handleRotate}><Image src={rotateImg} alt={'Повернуть'}/></button>
                    </div>
                </div>
                <div className={s.right}>
                </div>



            </div>
            <div className={s.content}>
                <button className={s.button + ' ' + s.prev} onClick={() => handleOnClick(false)}><Image src={arrowImg} alt={'Предыдущая страница'}/></button>
                <Document file={'/docs/' + pdfName} onLoadSuccess={onDocumentLoadSuccess} className={s.document}>
                    <Page pageNumber={pageNumber} className={s.page} scale={scale / 100} rotate={rotate}/>
                </Document>
                <button className={s.button + ' ' + s.next} onClick={() => handleOnClick(true)}><Image src={arrowImg} alt={'следующая страница'}/></button>
            </div>

        </div>
    );
};

export default PdfViewer;