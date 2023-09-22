import React from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import logo from '@/public/Header/logo.svg';

import {IHeaderLinks, IHeaderLinksData, IHeaderProps} from "@/types/types";

const Header = (props: {viewMode: IHeaderProps, linksData: IHeaderLinksData}) => {
    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map((el, id) => <li className={s.links_item} key={id}><a href={el.url}>{el.text}</a><div className={s.underline}/></li>)
    }

    return (
        <div className={s.header}>
            <div className={s.content + ' container'}>
                <div className={s.logo}>
                    <Image src={logo} alt={'Logo'}/>
                </div>
                <ul className={s.links}>
                    {linksRender(props.linksData[props.viewMode.page])}
                </ul>
            </div>
        </div>
    );
};

export default Header;