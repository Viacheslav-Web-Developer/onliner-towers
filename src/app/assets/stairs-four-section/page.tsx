'use client'
import React from 'react';
import PdfViewer from "@/components/PdfViewer/PdfViewer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Алюминиевая профессиональная четырехсекционная шарнирная лестница серии Т4. Паспорт',
}
const Page = () => {
    const data: {source: string, pdfName: string} = {
        source: 'stairs',
        pdfName: 'stairs-four-section.pdf'
    }

    return <PdfViewer source={data.source} pdfName={data.pdfName}/>
};

export default Page;