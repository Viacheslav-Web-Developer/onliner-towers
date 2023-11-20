import React from 'react';
import Image from "next/image";
import {IPricesCardProps} from "@/types/types";
import s from './Prices-card.module.scss';

import PricesCarousel from "@/components/Prices/Prices-carousel";

const PricesCard = (props: IPricesCardProps ) => {
    return (
        <div className={s.card}>
            <div className={s.info_part}>
                <div className={s.top_description}>
                    <h2 className={s.title}>{props.cardData.title}</h2>
                    {props.cardData.description && <p className={s.description}>{props.cardData.description}</p>}
                </div>
                <div className={s.card_img}>
                    <Image src={props.cardData.image} alt={'Фото вышки'}/>
                </div>
            </div>
            <PricesCarousel prices={props.cardData.prices}/>
            <button onClick={() => props.setModalOpen()} className={s.order_button}>Заказать аренду</button>
        </div>
    );
};

export default PricesCard;