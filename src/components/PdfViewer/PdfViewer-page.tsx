import React from 'react';
import s from "@/components/PdfViewer/PdfViewer.module.scss";
import {Page} from "react-pdf";

interface PdfViewerPageProps {
    pageNumber: number,
    scale: number,
    rotate: number,
    pageWidth: number,
    pageHeight: number
}

const PdfViewerPage = (props: PdfViewerPageProps) => {
    return (
        <>
            <div id={'pdf-viewer-page-' + props.pageNumber}/>
            <Page pageNumber={props.pageNumber} className={s.page} scale={props.scale / 100} rotate={props.rotate} width={props.pageWidth} height={props.pageHeight}/>
            <br/>
        </>

    );
};

export default PdfViewerPage;