'use client'
import React, {createRef, useEffect, useState} from 'react';
import s from './Faq-card.module.scss'
import classNames from "classnames";
import {IFaqCardProps} from "@/types/types";

const FaqCard = (props: IFaqCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const buttonPlusClassName = classNames([s.button as string], {
        [s.active as string]: isOpen
    })

    const answerRef = createRef<HTMLParagraphElement>();

    const [answerHeight, setAnswerHeight] = useState<null | number>(null)

    useEffect(() => {
        setAnswerHeight(answerRef.current!.clientHeight)
    })

    return (
        <div className={s.card}>
            <button className={s.question} onClick={() => setIsOpen(!isOpen)}>
                <p className={s.text}>{props.cardData.question}</p>
                <div className={buttonPlusClassName}>
                    <div className={s.hor_line}/>
                    <div/>
                </div>
            </button>
            <div className={s.answer + ' ' + s[props.page]} style={isOpen ? {height: `${answerHeight}px`} : {height: '0'}}>
                <p className={s.text} ref={answerRef}>{props.cardData.answer}</p>
            </div>
        </div>
    );
};

export default FaqCard;