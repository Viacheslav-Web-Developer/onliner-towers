import React from 'react';
import s from './Benefits-card.module.scss';
import Image from "next/image";
import {IBenefitsCardProps} from "@/types/types";

const BenefitsCard = (props: {cardData: IBenefitsCardProps}) => {
    return (
        <div className={s.card}>
            <Image src={props.cardData.image} alt={'Иконка'}/>
            <h3 className={s.title}>{props.cardData.title}</h3>
            <div className={s.line}/>
            <p className={s.text}>{props.cardData.text}</p>
        </div>
    );
};

export default BenefitsCard;