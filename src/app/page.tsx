import React from "react";
import s from './page.module.scss';
import {Metadata} from "next";

import favicon from '@/public/favicon.svg'

import TowerPage from "@/sitePages/TowerPage/TowerPage";

export const metadata: Metadata = {
    title: 'Аренда вышек тур в Минске с доставкой. Вышка тура высотой до 21 метра. Тура на прокат.',
    description: 'Аренда тур вышки в Минске до 21 метра с доставкой. От 3.33 руб за сутки. Взять в прокат передвижную вышку тура.',
    keywords: [
        'аренда тур вышки',
        'аренда вышка тур',
        'аренда вышки туры минск',
        'аренда туры минск',
        'вышка тура аренда минск',
        'аренда вышек тур',
        'аренда вышки туры',
        'взять в аренду вышку туру',
        'взять туру в аренду',
        'вышка тура передвижная аренда',
        'тур вышка аренда',
        'аренда туры',
        'вышка тура аренда',
        'тура в аренду',
        'тура строительная аренда',
        'строительная тура аренда'
    ],
}

const Home = () => {
    return (
        <TowerPage/>
    )
}

export default Home;