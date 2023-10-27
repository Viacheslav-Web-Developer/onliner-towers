import React from 'react';
import s from './Prices.module.scss';
import {IPricesCard, IPricesProps} from "@/types/types";

import PricesCard from "@/components/Prices/Prices-card";


const Prices = (props: IPricesProps) => {
    const updateSetModalOpen = () => {
        props.setModalOpen(true)
    }

    const cardsRender = (cardsData: IPricesCard[]) => {
        return cardsData.map((el, id) => <PricesCard cardData={el} setModalOpen={updateSetModalOpen} key={id} />)
    }

    return (
        <div className={s.content + ' container'}>
            <div className={s.cards}>
                {cardsRender(props.cardsData)}
            </div>
            <p className={s.text + ' ' + s[props.page]}>* Минимальный срок аренды - 3 дня</p>
        </div>
    );
};

export default Prices;