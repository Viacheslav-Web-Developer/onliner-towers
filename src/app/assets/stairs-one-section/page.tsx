'use client'
import React from 'react';
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Стремянка алюминиевая серии АМ. Паспорт'
}

const Page = () => {
    const data: {source: string, pdfName: string} = {
        source: 'stairs',
        pdfName: 'stairs-one-section.pdf'
    }

    return <PdfViewer source={data.source} pdfName={data.pdfName}/>
};

export default Page;