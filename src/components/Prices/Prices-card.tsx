import React, {useState} from 'react';
import Image from "next/image";
import s from './Prices-card.module.scss';

import {IPricesCardProps} from "@/types/types";
import classNames from "classnames";

const PricesCard = (props: {cardData: IPricesCardProps}) => {
    const prevButtonClassName = classNames([s.prices_button as string], [s.prev_button as string]);
    const nextButtonClassName = classNames([s.prices_button as string], [s.next_button as string]);

    const [priceState, setPriceState] = useState(0);

    const nextState = () => {
        priceState < props.cardData.prices.length - 1 ? setPriceState(priceState + 1) : console.log('last item')
    }

    const prevState = () => {
        priceState > 0 ? setPriceState(priceState - 1) : console.log('first item')
    }

    return (
        <div className={s.card}>
            <h2 className={s.title}>{props.cardData.title}</h2>
            <p className={s.description}>{props.cardData.description}</p>
            <Image src={props.cardData.image} alt={'Фото вышки'}/>

            <div className={s.prices}>
                <div className={s.prices_titles}>
                    <div className={s.layout} style={{transform: `translateX(${priceState * -100}%)`}}>
                        {props.cardData.prices.map((el, id) => <h3 className={s.title} key={id}>{el.title}</h3>)}
                    </div>
                </div>
                <div className={s.buttons}>
                    <button className={prevButtonClassName} onClick={prevState}>prev</button>
                    <button className={nextButtonClassName} onClick={nextState}>next</button>
                </div>
                <div className={s.prices_value}>
                    <div className={s.layout} style={{transform: `translateX(${priceState * -100}%)`}}>
                        {props.cardData.prices.map((el, id) =>
                            <div className={s.prices_block}>
                                {el.pricesValue.map((price, priceId) => <p className={s.price_value} key={priceId}>{price}</p>)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricesCard;