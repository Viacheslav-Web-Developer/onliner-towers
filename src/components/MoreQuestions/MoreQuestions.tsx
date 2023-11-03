import React from 'react';
import s from './MoreQuestions.module.scss'
import {IMoreQuestions} from "@/types/types";

const MoreQuestions = (props: IMoreQuestions) => {
    return (
        <div className={s.layout + ' ' + s[props.component]}>
            <div className={s.content}>
                <h2 className={s.title}>{props.title}</h2>
                <p className={s.text}>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие вопросы.</p>
                <div className={s.form}>
                    <input type="tel" className={s.input} placeholder={'+375 (_ _) _ _ _- _ _- _ _'}/>
                    <button className={s.button}>Заказать звонок</button>
                </div>
                <div className={s.hor_line}/>
                <p className={s.text}>Или позвоните нам прямо сейчас:</p>
                <div className={s.form}>
                    <a href={'tel:+375339161619'} className={s.call_button}>+375 (33) 916 16 19</a>
                </div>
            </div>
        </div>
    );
};

export default MoreQuestions;