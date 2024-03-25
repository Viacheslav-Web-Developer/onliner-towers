'use client'
import React from 'react';
import PdfViewer from "@/components/PdfViewer/PdfViewer";

const Page = ({ params }: { params: { docName: string[] } }) => {
    return params.docName ? <PdfViewer source={params.docName[0]} pdfName={params.docName[1]}/> : <div>File is not found</div>
};

export default Page;