import React from 'react';
import s from './Prices-card.module.scss'
import {IScaffoldingPricesCardProps} from "@/types/types";

const PricesCard = (props: IScaffoldingPricesCardProps) => {
    const pricesRender = (pricesData: string[]) => {
        return pricesData.map((el,id) => <li className={s.item} key={id}>{el}</li>)
    }

    return (
        <div className={s.card}>
            {/*<h3 className={s.title}>{props.cardData.title}</h3>*/}
            <ul className={s.list}>
                {pricesRender(props.cardData.prices)}
            </ul>
        </div>
    );
};

export default PricesCard;