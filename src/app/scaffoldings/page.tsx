import React from 'react';
import s from './page.module.scss';

import ScaffoldingPage from "../../sitePages/ScaffoldingPage/ScaffoldingPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Тайтл',
    description: 'Дескрипшн',
}

const Page = () => {
    return (
        <ScaffoldingPage/>
    );
};

export default Page;