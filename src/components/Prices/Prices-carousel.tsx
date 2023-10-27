import React, {useState} from 'react';
import s from "@/components/Prices/Prices-card.module.scss";
import PricesCardButton from "@/components/Prices/Prices-card-button";
import {IPricesCarouselProps} from "@/types/types";

const PricesCarousel = (props: IPricesCarouselProps) => {
    const [priceState, setPriceState] = useState(0);

    const nextState = () => {
        priceState < props.prices.length - 1 ? setPriceState(priceState + 1) : console.log('last item')
    }

    const prevState = () => {
        priceState > 0 ? setPriceState(priceState - 1) : console.log('first item')
    }

    return (
        <div className={s.prices}>
            <div className={s.titles_carousel}>
                <div className={s.carousel_layout} style={{transform: `translateX(${priceState * -100}%)`}}>
                    {props.prices.map((el, id) => <h3 className={s.carousel_item_title} key={id}>{el.title}</h3>)}
                </div>
            </div>
            <div className={s.buttons}>
                <PricesCardButton buttonClassName={'prev_button'} onClickFunc={prevState} currentItem={priceState} itemsNumber={props.prices.length}/>
                <PricesCardButton buttonClassName={'next_button'} onClickFunc={nextState} currentItem={priceState} itemsNumber={props.prices.length}/>
            </div>
            <div className={s.prices_value}>
                <div className={s.layout} style={{transform: `translateX(${priceState * -100}%)`}}>
                    {props.prices.map((el, id) =>
                        <div className={s.prices_block} key={id}>
                            {el.pricesValue.map((price, priceId) => <div className={s.price_value} key={priceId}>{price}</div>)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PricesCarousel;