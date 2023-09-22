import React from 'react';
import s from './Prices.module.scss';
import classNames from "classnames";

import PricesCard from "@/components/Prices/Prices-card";

import {IPricesCardProps, IPricesProps} from "@/types/types";

const Prices = (props: IPricesProps) => {
    const updateSetModalOpen = () => {
        props.setModalOpen(true)
    }

    const contentClassName = classNames([s.content as string], 'container')

    const cardsRender = (cardsData: IPricesCardProps[]) => {
        return cardsData.map((el, id) => <PricesCard cardData={el} key={id} setModalOpen={updateSetModalOpen}/>)
    }

    return (
        <div className={contentClassName}>
            <div className={s.cards}>
                {cardsRender(props.cardsData)}
            </div>
            <p className={s.text}>* Минимальный срок аренды - 3 дня</p>
        </div>
    );
};

export default Prices;