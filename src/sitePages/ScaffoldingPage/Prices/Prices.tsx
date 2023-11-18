import React from 'react';
import s from './Prices.module.scss'
import PricesType from "../../ScaffoldingPage/Prices/Prices-type";
import {IScaffoldingPricesType} from "@/types/types";

const Prices = () => {
    const pricesData: IScaffoldingPricesType[] = [
        {
            typeTitle: 'Стоимость по секциям:',
            pricesCards: [
                {
                    title: '1 секция',
                    prices: ['1 сутки – 10 руб', '7 суток – 35 руб', '30 суток – 50 руб']
                },
                {
                    title: '2 секции',
                    prices: ['1 сутки – 10 руб', '7 суток – 40 руб', '30 суток – 60 руб']
                },
                {
                    title: '3 секции',
                    prices: ['1 сутки – 12 руб', '7 суток – 45 руб', '30 суток – 70 руб']
                }
            ]
        },
        {
            typeTitle: 'Стоимость по кв.метрам:',
            pricesCards: [
                {
                    title: 'до 30 кв.м.',
                    prices: ['1 сутки – 15 руб', '7 суток – 75 руб', '30 суток – 150 руб']
                },
                {
                    title: 'до 50 кв.м.',
                    prices: ['1 сутки – 20 руб', '7 суток – 110 руб', '30 суток – 220 руб']
                },
                {
                    title: 'до 100 кв.м.',
                    prices: ['1 сутки – 30 руб', '7 суток – 175 руб', '30 суток – 350 руб']
                }
            ]
        }
    ]

    const pricesRender = (pricesData: IScaffoldingPricesType[]) => {
        return pricesData.map((el, id) => <PricesType typeData={el} key={id}/>)
    }

    return (
        <div className={'container'}>
            <div className={s.content}>
                {pricesRender(pricesData)}
            </div>
            <div className={s.ps}>
                <p className={s.text}>* Минимальный срок аренды - 3 дня</p>
            </div>
        </div>
    );
};

export default Prices;