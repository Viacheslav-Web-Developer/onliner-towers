import React, {Dispatch, SetStateAction} from 'react';
import s from "@/components/PdfViewer/PdfViewer.module.scss";
import {Page} from "react-pdf";
import classNames from "classnames";

interface PdfViewerSidebarPageProps {
    pageNumber: number,
    sidebarPageWidth: number,
    sidebarPageNumber: number,
    setPageNumber: Dispatch<SetStateAction<number>>
}

const PdfViewerSidebarPage = (props: PdfViewerSidebarPageProps) => {
    return (
        <button className={classNames([s.sidebar_page_wrapper as string], {[s.active]: props.sidebarPageNumber === props.pageNumber})} onClick={() => {props.setPageNumber(props.sidebarPageNumber); document.location = '#pdf-viewer-page-' + props.sidebarPageNumber}}>
            <div className={s.hover}/>
            <Page pageNumber={props.sidebarPageNumber} className={s.sidebar_page} width={props.sidebarPageWidth}/>
            <p className={s.page_number}>{props.sidebarPageNumber}</p>
        </button>
    );
};

export default PdfViewerSidebarPage;