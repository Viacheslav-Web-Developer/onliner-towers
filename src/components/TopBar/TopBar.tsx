import React from 'react';
import s from './TopBar.module.scss'

import {ITopBarCards, ITopBarProps} from "@/types/types";
import TopBarLink from "@/components/TopBar/TopBar-link";
import TopBarCard from "@/components/TopBar/TopBar-card";

const TopBar = (props: ITopBarProps) => {
    const listItemRender = (cardsData: ITopBarCards[]) => {
        return cardsData.map((el, id) => {
            return (
                <li className={s.list_item} key={id}>
                    {el.href
                        ? <TopBarLink text={el.text} image={el.image} href={el.href}/>
                        : <TopBarCard text={el.text} image={el.image}/>
                    }
                </li>
            )
        })
    }

    return (
        <div className={s.top_bar}>
            <ul className={s.list}>
                {listItemRender(props.cards)}
            </ul>
        </div>
    );
};

export default TopBar;