'use client'
import React, {useEffect} from 'react';
import s from './Instructions.module.scss';
import {IInstructionsData} from "@/types/types";
import InstructionsCard from "@/components/Instructions/Instructions-card";

const Instructions = (props: {instructionsData: IInstructionsData[]}) => {

    useEffect(() => {
        console.log(props)
    })

    const cardsRender = (cardsData: IInstructionsData[]) => {
        return cardsData.map((el, id) => <InstructionsCard cardData={el} number={id} key={id}/>)
    }

    return (
        <div className={'container'}>
            <div className={s.content}>
                <h2 className={s.title}>Инструкция по сборке вышки туры</h2>
                <div className={s.cards}>
                    {cardsRender(props.instructionsData)}
                </div>
            </div>
        </div>
    );
};

export default Instructions;