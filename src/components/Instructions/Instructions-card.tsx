import React from 'react';
import s from './Instructions-card.module.scss';
import {IInstructionsCardsProps} from "@/types/types";
import Image from "next/image";

const InstructionsCard = (props: IInstructionsCardsProps) => {
    return (
        <div className={s.card}>
            <div className={s.number_part_layout}>
                <div className={s.number_part}>
                    <span className={s.text}>0{props.cardNumber + 1}</span>
                    <span className={s.bcg_text}>0{props.cardNumber + 1}</span>
                </div>
            </div>
            <div className={s.text_part}>
                <p>{props.cardData.text}</p>
                <Image src={props.cardData.image} alt={'Фото этапа сборки'}/>
                {props.cardData.textAfterImage && <p>{props.cardData.textAfterImage}</p>}
            </div>
        </div>
    );
};

export default InstructionsCard;