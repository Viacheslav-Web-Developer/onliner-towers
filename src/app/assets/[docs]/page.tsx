'use client'
import React from 'react';
import {useParams} from "next/navigation";
import PdfViewer from "@/components/PdfViewer/PdfViewer";

const Page = () => {
    const params: { docs?: string } = useParams()

    return params.docs && <div>dawdwa<PdfViewer pdfName={params.docs}/></div>;

};

export default Page;