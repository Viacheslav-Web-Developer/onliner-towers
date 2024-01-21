import React from 'react';
import s from './page.module.scss';

import ScaffoldPage from "../../sitePages/ScaffoldPage/ScaffoldPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Тайтл',
    description: 'Дескрипшн',
}

const Page = () => {
    return (
        <ScaffoldPage/>
    );
};

export default Page;