'use client'
import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import logo from '@/public/Header/logoMin.svg';
import {IHeaderLinks, IHeaderProps} from "@/types/types";
import Link from "next/link";

import HeaderLinks from "@/components/Header/Header-links";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import {store} from "@/assets/store";

const Header = (props: IHeaderProps) => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false)

    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map((el, id) => <HeaderLinks text={el.text} url={el.url} key={id}/>)
    }

    let header = React.createRef<HTMLElement>();

    useEffect(() => {
        document.documentElement.scrollTop > 100 && (header.current!.style.height = '50px') && (header.current!.classList.add(s.sticky));
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop < 55) {
                if(document.documentElement.scrollTop > 5){
                    header.current && header.current!.classList.add(s.sticky);
                }
                else{
                    header.current && header.current!.classList.remove(s.sticky);
                }
                header.current && (header.current!.style.height = `${100 - document.documentElement.scrollTop}px`);
            }
            else{
                header.current && header.current!.classList.add(s.sticky);
                header.current && (header.current!.style.height = '45px');
            }
        })
    })

    return (
        <header className={s.header + ' ' + s[props.page]} id={'header'} ref={header}>
            <div className={s.content + ' container'}>
                <div className={s.logo}>
                    <Link href={'/'}>
                        <Image src={logo} alt={'Logo'}/>
                        <p>ArendaTur</p>
                    </Link>
                </div>
                <div className={s.logo_title}>
                    <h1 className={s.title}><a href="#">ArendaTur</a></h1>
                </div>
                <ul className={s.links}>
                    {props.links && linksRender(props.links)}
                </ul>
                <button onClick={() => setMobileMenuIsOpen(true)} className={s.burger_menu}>
                    <div/>
                    <div/>
                    <div/>
                </button>
            </div>
            <BurgerMenu mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen} links={props.links} info={store.burgerMenuInfo}/>
        </header>
    );
};

export default Header;