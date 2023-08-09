import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    const linksData = [
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

    const linksRender = (linksData) => {
        return linksData.map(el => <li className={s.links_item}><a href={el.url}>{el.text}</a></li>)
    }

    return (
        <div className={s.header}>
            <div className={s.content + ' container'}>
                <div className={s.logo}></div>
                <ul className={s.links}>
                    {linksRender(linksData)}
                </ul>
            </div>
        </div>
    );
};

export default Header;