import React from 'react';
import s from './Benefits.module.scss';
import BenefitsCard from "@/components/Benefits/Benefits-card";

import img1 from '@/public/Benefits/img1.svg';
import img2 from '@/public/Benefits/img2.svg';
import img3 from '@/public/Benefits/img3.svg';

import {IBenefitsCardProps, IBenefitsProps} from "@/types/types";


const Benefits = (props: IBenefitsProps) => {
    const cardsData: IBenefitsCardProps[] = [
        {
            image: img1,
            title: 'Оплата',
            text: 'Наличный и безналичный расчет'
        },
        {
            image: img2,
            title: 'Доставка',
            text: 'Можем помочь доставить'
        },
        {
            image: img3,
            title: 'Паспорт',
            text: 'Оформление без залога. Только паспорт'
        },
    ]

    const cardsRender = (cardsData: IBenefitsCardProps[]) => {
        return cardsData.map((el, id) => <BenefitsCard cardData={el} key={id}/>)
    }

    return (
        <div className={s.content}>
            <div className={s.header + ' ' + s[props.viewMode.page]}>
                <h2 className={s.title}>Наши преимущества:</h2>
            </div>
            <div className={s.under_header + ' ' + s[props.viewMode.page]}/>
            <div className={s.body}>
                <div className={s.cards}>
                    {cardsRender(cardsData)}
                </div>
            </div>
        </div>
    );
};

export default Benefits;