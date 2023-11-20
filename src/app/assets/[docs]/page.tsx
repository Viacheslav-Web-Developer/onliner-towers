'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {MyWorker} from "@/components/MyWorker/MyWorker";

const Page = () => {
    const params: {docs: string} = useParams()

    return (
        <div>
            <MyWorker params={params}/>
        </div>

    );
};

export default Page;