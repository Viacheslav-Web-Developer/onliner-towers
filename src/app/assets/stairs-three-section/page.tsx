'use client'
import React from 'react';
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Лестница алюминиевая трехсекционная универсальная серии Н3иHS3. Паспорт',
}

const Page = () => {
    const data: {source: string, pdfName: string} = {
        source: 'stairs',
        pdfName: 'stairs-three-section.pdf'
    }

    return <PdfViewer source={data.source} pdfName={data.pdfName}/>
};

export default Page;