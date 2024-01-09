import React, {useEffect} from 'react';
import s from './Header.module.scss';
import Image from "next/image";
import logo from '@/public/Header/logoMin.svg';
import {IHeaderLinks, IHeaderProps} from "@/types/types";
import Link from "next/link";

import HeaderLinks from "@/components/Header/Header-links";

const Header = (props: IHeaderProps) => {
    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map((el, id) => <HeaderLinks text={el.text} url={el.url} key={id}/>)
    }

    let header = React.createRef<HTMLElement>();
    useEffect(() => {
        document.documentElement.scrollTop > 100 && (header.current!.style.height = '50px') && (header.current!.classList.add(s.sticky));
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop < 50) {
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
                header.current && (header.current!.style.height = '50px');
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
                <ul className={s.links}>
                    {linksRender(props.links)}
                </ul>
            </div>
        </header>
    );
};

export default Header;