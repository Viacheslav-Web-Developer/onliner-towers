'use client'
import React from 'react';
import s from './PDFReader.module.scss';

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import {readFile} from "fs";

interface IParams {
    file: readFile
}

const PdfReader = (props: IParams) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className={s.content}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={props.file}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};

export default PdfReader;