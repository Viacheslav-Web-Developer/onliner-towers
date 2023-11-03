import React from 'react';
import Image from "next/image";
import classNames from "classnames";
import {INavLinksCardProps} from "@/types/types";
import Link from "next/link";
import s from './NavLinks-card.module.scss'

const NavLinksCard = (props: INavLinksCardProps) => {
    const imgClassName = classNames([s.image as string], [s[props.component as string]])

    return (
        <div className={s.card}>
            <h2 className={s.title}>{props.navLinks.title}</h2>
            <div className={imgClassName}>
                <Image src={props.navLinks.image} alt={'Image'}/>
            </div>
            <Link href={props.navLinks.linkHref} className={s.button}>Подробнее</Link>
        </div>
    );
};

export default NavLinksCard;