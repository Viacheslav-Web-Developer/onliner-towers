import React from 'react';
import s from "./ComponentsCarousel-card.module.scss";
import {IComponentsCarouselCardProps} from "@/types/types";

const ComponentsCarouselCard = (props: IComponentsCarouselCardProps) => {
    return (
        <div className={s.card} style={{minWidth: `calc(${props.cardWidth}%`}} >
            <div className={s.content}>
                {props.cardData.title}
            </div>
        </div>
    );
};

export default ComponentsCarouselCard;