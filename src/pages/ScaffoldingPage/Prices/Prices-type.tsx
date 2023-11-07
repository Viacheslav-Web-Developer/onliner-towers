import React from 'react';
import s from './Prices-type.module.scss'
import {IScaffoldingPricesCard, IScaffoldingPricesTypeProps} from "@/types/types";
import PricesCard from "@/pages/ScaffoldingPage/Prices/Prices-card";

const PricesType = (props: IScaffoldingPricesTypeProps) => {
    const cardsRender = (cardsData: IScaffoldingPricesCard[]) => {
        return cardsData.map((el, id) => <PricesCard cardData={el} key={id}/>)
    }

    return (
        <div className={s.type}>
            <h2 className={s.title}>{props.typeData.typeTitle}</h2>
            <div className={s.cards}>
                {cardsRender(props.typeData.pricesCards)}
            </div>
        </div>
    );
};

export default PricesType;