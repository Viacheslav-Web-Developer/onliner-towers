import React from 'react';
import s from './TopBar.module.scss'
import Image from "next/image";

import phoneIcon from '@/public/TopBar/phoneIcon.svg';
import mailIcon from '@/public/TopBar/mailIcon.svg';
import timeIcon from '@/public/TopBar/timeIcon.svg'

const TopBar = () => {
    const listData = [
        {
            href: 'tel:+3753391619',
            image: phoneIcon,
            text: '+375 (33) 916 16 19'
        },
        {
            href: 'mailto:gradovichnicolay@gmail.com',
            image: mailIcon,
            text: 'gradovichnicolay@gmail.com'
        },
        {
            image: timeIcon,
            text: '9:00 - 20:00'
        },
    ]

    const listItemRender = (listData) => {
        return listData.map(el => {
            return (
                <li className={s.list_item}>
                    {el.href ?
                        <a href={el.href}>
                            <Image src={el.image} alt={'Icon'}/>
                            <p>{el.text}</p>
                        </a>
                        :
                        <>
                            <Image src={el.image} alt={'Icon'}/>
                            <p>{el.text}</p>
                        </>
                    }
                </li>

            )
        })
    }

    return (
        <div className={s.top_bar}>
            <ul className={s.list}>
                {listItemRender(listData)}

            </ul>
        </div>
    );
};

export default TopBar;