import React from 'react';
import {IHeaderLinksProps} from "@/types/types";
import s from "./Header-links.module.scss";

const HeaderLinks = (props: IHeaderLinksProps) => {
    return (
        <li className={s.link} ><a href={props.url}>{props.text}</a>
            <div className={s.underline}/>
        </li>
    );
};

export default HeaderLinks;