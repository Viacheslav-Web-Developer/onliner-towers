import React from 'react';
import s from "./ComponentsCarousel-card.module.scss";
import {IComponentsCarouselCardProps} from "@/types/types";
import Image from "next/image";

const ComponentsCarouselCard = (props: IComponentsCarouselCardProps) => {
    return (
        <div className={s.card} style={{minWidth: `calc(${props.cardWidth}%`}} >
            <div className={s.content}>
                <div className={s.top_part}>
                    <div className={s.img_part}>
                        <Image src={props.cardData.img} alt={'Изображение элемента'}/>
                    </div>
                    <h3 className={s.title}>{props.cardData.title}</h3>
                </div>
                <div className={s.params}>
                    <h4 className={s.text}>Размер элемента:</h4>
                    <p className={s.text + ' ' + s.select}>{props.cardData.size}</p>
                    <h4 className={s.text}>Масса элемента:</h4>
                    <p className={s.text + ' ' + s.select}>{props.cardData.weight}</p>
                </div>
            </div>
        </div>
    );
};

export default ComponentsCarouselCard;