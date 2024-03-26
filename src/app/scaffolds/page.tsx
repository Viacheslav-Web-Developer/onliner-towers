import React from 'react';
import s from './page.module.scss';
import {Metadata} from "next";

import ScaffoldPage from "@/sitePages/ScaffoldPage/ScaffoldPage";

export const metadata: Metadata = {
    title: 'Аренда малярного помоста ПМ 200 от 1,67 руб/сутки',
    description: 'Малярный помост на прокат в Минске. Возможна доставка. Аренда помоста по доступной цене.',
    keywords: [
        'помост',
        'помост малярный пм 200',
        'лестница помост',
        'помост строительный',
        'аренда строительного помоста',
        'аренда малярного помоста',
        'помост пм 200'

]
}

const Page = () => {
    return (
        <ScaffoldPage/>
    );
};

export default Page;