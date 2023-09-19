import React from 'react';
import s from './Faq.module.scss';
import FaqCard from "@/components/Faq/Faq-card";
import {IFaqCardsData} from "@/types/types";

const Faq = (props: {cardsData: IFaqCardsData[]}) => {

    const cardsRender = (cardsData: IFaqCardsData[]) => {
        return cardsData.map((el, id) => <FaqCard cardData={el} key={id}/>)
    }

    return (
        <div className={s.content + ' container'}>
            <h2 className={s.title}>Вопрос / ответ</h2>
            <div className={s.cards}>
                {cardsRender(props.cardsData)}
            </div>
        </div>
    );
};

export default Faq;