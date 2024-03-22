import React from 'react';
import s from './BurgerMenu-info.module.scss'
import {IBurgerMenuInfoProps, TBurgerMenuInfoProps} from "@/types/types";

const BurgerMenuInfo = (props: IBurgerMenuInfoProps) => {
    const cardsRender = (cardsData: TBurgerMenuInfoProps) => cardsData.map((el, id) => {
        return (
            <li className={s.item} key={id}>
                <h3 className={s.item_title}>{el.title}</h3>
                {el.href ? <a href={el.href} className={s.item_text}>{el.text}</a> : <p className={s.item_text}>{el.text}</p>}
            </li>
        )
    })

    return (
        <div className={s.content}>
            <h2 className={s.title}>Контакты</h2>
            <ul className={s.list}>
                {cardsRender(props.info)}
            </ul>
        </div>
    );
};

export default BurgerMenuInfo;