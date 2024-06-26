import React from 'react';
import s from './page.module.scss';
import {Metadata} from "next";

import ScaffoldingPage from "@/sitePages/ScaffoldingPage/ScaffoldingPage";

export const metadata: Metadata = {
    title: 'Аренда строительных лесов в Минске с доставкой от 0,06 руб./кв.м.',
    description: 'Взять в аренду строительные леса в Минске по доступным ценам с доставкой. Высота до 40 м. Леса на прокат.',
    keywords: [
        'аренда леса строительные',
        'аренда лесов строительных',
        'аренда лесов строительных минск',
        'аренда строительные леса',
        'аренда строительных лесов',
        'аренда строительных лесов в минске',
        'аренда строительных лесов минск',
        'взять в аренду строительные леса',
        'взять строительные леса в аренду',
        'леса строительные аренда',
        'леса строительные аренда минск',
        'леса строительные в аренду',
        'леса строительные прокат',
        'прокат лесов строительных',
        'прокат лесов строительных в минске',
        'прокат строительных лесов',
        'прокат строительных лесов минск',
        'строительные леса аренда',
        'строительные леса аренда минск',
        'строительные леса в аренду',
        'строительные леса на прокат'
    ],
}

const Page = () => {
    return (
        <ScaffoldingPage/>
    );
};

export default Page;