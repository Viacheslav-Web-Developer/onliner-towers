import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import logo from '@/public/Header/logoMin.svg';
import {IHeaderLinks, IHeaderProps} from "@/types/types";
import Link from "next/link";

import HeaderLinks from "@/components/Header/Header-links";
import classNames from "classnames";

const Header = (props: IHeaderProps) => {
    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map((el, id) => <HeaderLinks text={el.text} url={el.url} key={id}/>)
    }

    const headerClassname = classNames([s.header as string], {
        [s.sticky as string]: props.isSticky
    })

    const [fixedHeaderPosition, setFixedHeaderPosition] = useState<number>(-100)


    useEffect(() => {
        document.documentElement.scrollTop > 100 && setFixedHeaderPosition(0)
        props.isSticky ? window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 200) {
                setFixedHeaderPosition(document.documentElement.scrollTop - 200)
            }
            else if (document.documentElement.scrollTop > 200) setFixedHeaderPosition(0)
            else setFixedHeaderPosition(-100)


        }) : setFixedHeaderPosition(0)
    }, [null])

    return (
        <header className={headerClassname} id={'header'} style={{transform: `translateY(${fixedHeaderPosition}%)`}}>
            <div className={s.content + ' container'}>
                <div className={s.logo}>
                    <Link href={'/'}>
                        <Image src={logo} alt={'Logo'}/>
                        <p>ArendaTur</p>
                    </Link>
                </div>
                <ul className={s.links}>
                    {linksRender(props.links)}
                </ul>
            </div>
        </header>
    );
};

export default Header;