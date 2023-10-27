import React from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import logo from '@/public/Header/logo.svg';

import {IHeaderLinks, IHeaderProps} from "@/types/types";
import HeaderLinks from "@/components/Header/Header-links";

const Header = (props: IHeaderProps) => {
    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map((el, id) => <HeaderLinks text={el.text} url={el.url} key={id}/>)
    }

    return (
        <div className={s.header}>
            <div className={s.content + ' container'}>
                <div className={s.logo}>
                    <Image src={logo} alt={'Logo'}/>
                </div>
                <ul className={s.links}>
                    {linksRender(props.links)}
                </ul>
            </div>
        </div>
    );
};

export default Header;