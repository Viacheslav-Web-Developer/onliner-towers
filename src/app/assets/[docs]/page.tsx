'use client'
import React from 'react';
import {useParams} from "next/navigation";

const Page = () => {
    interface IParams {
        docs?: string
    }

    const params: IParams = useParams()

    return (
        <div>
            {params.docs}
        </div>

    );
};

export default Page;