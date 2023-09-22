'use client'
import React, {useState} from 'react';
import s from "@/app/page.module.scss";

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";

import img1 from "@/public/Prices/tower/img1.png";
import img2 from "@/public/Prices/tower/img2.png";
import img3 from "@/public/Prices/tower/img3.png";

import {EPages, IHeaderLinksData, IPricesCardProps} from "@/types/types";

const StairsPage = () => {
    const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false)

    const headerLinksData: IHeaderLinksData = {
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

    const pricesCardsData: IPricesCardProps[] = [
        {
            title: 'Вышка тура ВСР-1',
            description: '(рабочая площадка 0,7 на 1,6 метра)',
            image: img1,
            prices: [
                {
                    title: 'До 7,6 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },
                {
                    title: 'До 7,7 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]

                },
                {
                    title: 'До 7,8 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },

            ],
        },
        {
            title: 'Вышка тура ВСР-1',
            description: '(рабочая площадка 0,7 на 1,6 метра)',
            image: img2,
            prices: [
                {
                    title: 'До 7,6 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },
            ],
        },
        {
            title: 'Вышка тура ВСР-1',
            description: '(рабочая площадка 0,7 на 1,6 метра)',
            image: img3,
            prices: [
                {
                    title: 'До 7,6 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },
            ],
        }
    ]

    return (
        <div className={s.home}>
            <MainScreen viewMode={{'page': EPages.stairs, 'component': 'main_screen'}} headerData={headerLinksData}/>
            <Prices viewMode={{'page': EPages.tower, 'component': 'main_screen'}} cardsData={pricesCardsData}/>
            <Benefits/>
            <Order/>
        </div>
    )
};

export default StairsPage;