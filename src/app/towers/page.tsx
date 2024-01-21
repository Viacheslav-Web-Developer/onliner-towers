import React from 'react';
import s from './page.module.scss';

import TowerPage from "@/sitePages/TowerPage/TowerPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Тайтл',
    description: 'Дескрипшн',
}

const Page = () => {
    return (
        <TowerPage/>
    );
};

export default Page;