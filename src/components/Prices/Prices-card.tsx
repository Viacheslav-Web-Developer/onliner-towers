import React, {useState} from 'react';
import Image from "next/image";
import s from './Prices-card.module.scss';

import {IPricesCardProps} from "@/types/types";

import PricesCardButton from "@/components/Prices/Prices-card-button";

const PricesCard = (props: { cardData: IPricesCardProps }) => {
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
            <div className={s.card_img}>
                <Image src={props.cardData.image} alt={'Фото вышки'}/>
            </div>

            <div className={s.prices}>
                <div className={s.titles_carousel}>
                    <div className={s.carousel_layout} style={{transform: `translateX(${priceState * -100}%)`}}>
                        {props.cardData.prices.map((el, id) => <h3 className={s.carousel_item_title} key={id}>{el.title}</h3>)}
                    </div>
                </div>
                <div className={s.buttons}>
                    <PricesCardButton buttonClassName={'prev_button'} onClickFunc={prevState} currentItem={priceState} itemsNumber={props.cardData.prices.length}/>
                    <PricesCardButton buttonClassName={'next_button'} onClickFunc={nextState} currentItem={priceState} itemsNumber={props.cardData.prices.length}/>
                </div>
                <div className={s.prices_value}>
                    <div className={s.layout} style={{transform: `translateX(${priceState * -100}%)`}}>
                        {props.cardData.prices.map((el, id) =>
                            <div className={s.prices_block}>
                                {el.pricesValue.map((price, priceId) => <div className={s.price_value}
                                                                             key={priceId}>{price}</div>)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricesCard;