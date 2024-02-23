'use client'
import React from 'react';
import {useParams} from "next/navigation";
// import PdfViewer from "@/components/PdfViewer/PdfViewer";

const Page = () => {
    const params: { docs?: string } = useParams()

    console.log(params)

    return (
        <div>
            awdawd
        </div>
    )

    // return params.docs ? <PdfViewer pdfName={params.docs}/> : <div>none</div>
};

export default Page;