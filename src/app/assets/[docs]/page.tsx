'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {MyWorker} from "@/components/MyWorker/MyWorker";

const Page = () => {
    interface IParams {
        docs?: string
    }

    const params: IParams = useParams()

    return (
        <div>
            <MyWorker params={params}/>
        </div>

    );
};

export default Page;