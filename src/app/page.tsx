import React from "react";
import s from './page.module.scss';

import TowerPage from "../sitePages/TowerPage/TowerPage";
import {Metadata} from "next";

export const metadata: Metad0ata = {
    title: 'Тайтл',
    description: 'Дескрипшн',
}

const Home = () => {
    return (
        <TowerPage/>
    )
}

export default Home;
