import React from 'react';
import s from './Benefits.module.scss';
import {IBenefitsCardProps, IBenefitsProps} from "@/types/types";

import BenefitsCard from "@/components/Benefits/Benefits-card";

const Benefits = (props: IBenefitsProps) => {
    const cardsRender = (cardsData: IBenefitsCardProps[]) => {
        return cardsData.map((el, id) => <BenefitsCard cardData={el} key={id}/>)
    }

    return (
        <div className={s.content}>
            <div className={s.header + ' ' + s[props.page]}>
                <h2 className={s.title}>Наши преимущества:</h2>
            </div>
            <div className={s.under_header + ' ' + s[props.page]}/>
            <div className={s.body}>
                <div className={s.cards}>
                    {cardsRender(props.cardsData)}
                </div>
            </div>
        </div>
    );
};

export default Benefits;