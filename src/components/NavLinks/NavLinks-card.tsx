import React from 'react';
import s from './NavLinks-card.module.scss'
import Image from "next/image";

const NavLinksCard = (props) => {
    return (
        <div className={s.card}>
            <h2 className={s.title}>{props.linkData.title}</h2>
            {props.linkData.image ? <Image src={props.linkData.image} alt={'Image'}/> : null}
            <a href={props.linkData.linkHref} className={s.button}>Подробнее</a>
        </div>
    );
};

export default NavLinksCard;