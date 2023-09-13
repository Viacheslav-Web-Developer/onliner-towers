'use client';
import React, {useState} from 'react';
import s from './Prices.module.scss';
import classNames from "classnames";

import img1 from '@/public/Prices/tower/img1.png';
import img2 from '@/public/Prices/tower/img2.png';
import img3 from '@/public/Prices/tower/img3.png';

import PricesCard from "@/components/Prices/Prices-card";

import {IPricesCardProps} from "@/types/types";

const Prices = (props) => {
    const contentClassName = classNames([s.content as string], 'container')

    const [modalWindowIsOpen, setModalWindowIsOpen] = useState(false)

    const cardsData: IPricesCardProps[] = [
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
            clickFunc: setModalWindowIsOpen
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
            clickFunc: setModalWindowIsOpen
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
            clickFunc: setModalWindowIsOpen
        }
    ]

    const cardsRender = (cardsData: IPricesCardProps[]) => {
        return cardsData.map(el => <PricesCard cardData={el}/>)
    }

    return (
        <div className={contentClassName}>
            <div className={s.cards}>
                {cardsRender(cardsData)}
            </div>
            <p className={s.text}>* Минимальный срок аренды - 3 дня</p>
        </div>
    );
};

export default Prices;