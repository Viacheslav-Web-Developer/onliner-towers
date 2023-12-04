'use client'
import React from 'react';
import {useParams} from "next/navigation";
import PdfReader from "@/components/PDFReader/PDFReader";

const Page = () => {
    interface IParams {
        docs?: string
    }

    const params: IParams = useParams()

    return (
        <div>
            <PdfReader file={'https://pdfobject.com/pdf/sample.pdf'}/>
        </div>

    );
};

export default Page;