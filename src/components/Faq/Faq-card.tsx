'use client'
import React, {useState} from 'react';
import s from './Faq-card.module.scss'
import classNames from "classnames";
import {IFaqCadsData} from "@/types/types";

const FaqCard = (props: {cardData: IFaqCadsData}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const answerClassName = classNames({
        [s.answer as string]: true,
        [s.open as string]: isOpen
    })

    const buttonClassName = classNames([s.button as string], {
        [s.active as string]: isOpen
    })

    return (
        <div className={s.card}>
            <button className={s.question} onClick={() => setIsOpen(!isOpen)}>
                <p className={s.text}>{props.cardData.answer}</p>
                <div className={buttonClassName}>
                    <div className={s.hor_line}></div>
                    <div className={s.ver_line}></div>
                </div>
            </button>
            <div className={answerClassName}>
                <p className={s.text}>{props.cardData.question}</p>
            </div>
        </div>
    );
};

export default FaqCard;