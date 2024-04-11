'use client'
import React from 'react';
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Инструкция по сборке и эксплуатации лесов рамных ЛРСП-40',
}

const Page = () => {
    const data: {source: string, pdfName: string} = {
        source: 'scaffoldings',
        pdfName: 'scaffolding-manual.pdf'
    }

    return <PdfViewer source={data.source} pdfName={data.pdfName}/>
};

export default Page;