import React from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import logo from '@/public/Header/logo.svg';

import {IHeaderLinks, IHeaderLinksData, IHeaderProps} from "@/types/types";

const Header = (props: {viewMode: IHeaderProps}) => {
    const linksData: IHeaderLinksData = {
        'tower': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ],
        'scaffold': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ],
        'scaffolding': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ],
        'stairs': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ]
    }

    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map(el => <li className={s.links_item}><a href={el.url}>{el.text}</a></li>)
    }

    return (
        <div className={s.header}>
            <div className={s.content + ' container'}>
                <div className={s.logo}>
                    <Image src={logo} alt={'Logo'}/>
                </div>
                <ul className={s.links}>
                    {linksRender(linksData[props.viewMode.page])}
                </ul>
            </div>
        </div>
    );
};

export default Header;