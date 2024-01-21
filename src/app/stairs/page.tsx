import React from 'react';
import s from './page.module.scss';

import StairsPage from "../../sitePages/StairsPage/StairsPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Тайтл',
    description: 'Дескрипшн',
}

const Page = () => {
    return (
        <StairsPage/>
    );
};

export default Page;