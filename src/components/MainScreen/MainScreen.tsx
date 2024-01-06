import React from 'react';
import s from './MainScreen.module.scss';
import {IMainScreenProps} from "@/types/types";

import Header from "@/components/Header/Header";
import TopBar from "@/components/TopBar/TopBar";
import NavLinks from "@/components/NavLinks/NavLinks";

const MainScreen = (props: IMainScreenProps) => {
    return (
        <div className={s.main_screen + ' ' + s[props.page]}>
            <div className={s.content}>
                <div className={s.top_section}>
                    <Header links={props.headerLinks} isSticky={false}/>
                    <Header links={props.headerLinks} isSticky={true}/>
                    <TopBar cards={props.topBarCards}/>
                </div>
                <div className={s.middle_section + ' container'}>
                    <h1 className={s.title}>{props.title}</h1>
                    <p className={s.text}>Качественное оборудование и приятные цены!</p>
                    <button className={s.button} onClick={() => props.setModalOpen(true)}>Заказать звонок</button>
                </div>
                <div className={s.bottom_section}>
                    <NavLinks navLinks={props.navLinks} page={props.page} component={'main_screen'}/>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;