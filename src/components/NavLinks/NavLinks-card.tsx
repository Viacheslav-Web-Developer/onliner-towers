import React from 'react';
import Image from "next/image";
import classNames from "classnames";
import {INavLinksCardProps} from "@/types/types";
import Link from "next/link";
import s from './NavLinks-card.module.scss'

const NavLinksCard = (props: INavLinksCardProps) => {
    const cardClassName = classNames([s.card as string], [s[props.component as string]])

    return (
        <div className={cardClassName}>
            <h2 className={s.title}>{props.navLinks.title}</h2>
            <div className={s.image}>
                <Image src={props.navLinks.image} alt={'Image'}/>
            </div>
            <Link href={props.navLinks.linkHref} className={s.button}>Подробнее</Link>
            <Link href={props.navLinks.linkHref} className={s.button + ' ' + s.mobile}>{props.navLinks.titleMobile}</Link>
        </div>
    );
};

export default NavLinksCard;