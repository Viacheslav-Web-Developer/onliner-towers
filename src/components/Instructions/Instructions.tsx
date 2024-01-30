import React from 'react';
import s from './Instructions.module.scss';
import {IInstructions, IInstructionsProps} from "@/types/types";

import InstructionsCard from "@/components/Instructions/Instructions-card";

const Instructions = (props: IInstructionsProps) => {
    const cardsRender = (cardsData: IInstructions[]) => {
        return cardsData.map((el, id) => <InstructionsCard cardData={el} cardNumber={id} key={id}/>)
    }

    return (
            <div className={s.content}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.cards}>
                    {cardsRender(props.cardsData)}
                </div>
            </div>
    );
};

export default Instructions;