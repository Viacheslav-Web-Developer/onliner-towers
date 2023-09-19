import React from 'react';
import s from './MainScreen.module.scss';

import Header from "@/components/Header/Header";
import TopBar from "@/components/TopBar/TopBar";
import NavLinks from "@/components/NavLinks/NavLinks";

import {IHeaderLinksData, IMainScreenProps, IMainScreenTitlesData} from "@/types/types";

const MainScreen = (props: {viewMode: IMainScreenProps, headerData: IHeaderLinksData}) => {
    const titlesData: IMainScreenTitlesData = {
        'tower': {
            'title': 'Аренда строительной вышки туры в Минске',
        },
        'scaffold': {
            'title': 'Аренда строительных помостов в Минске',
        },
        'scaffolding': {
            'title': 'Аренда строительных лесов в Минске',
        },
        'stairs': {
            'title': 'Аренда строительных лестниц в Минске',
        }
    }

    return (
        <div className={s.main_screen}>
            <div className={s.content}>
                <div className={s.top_section}>
                    <Header viewMode={props.viewMode} linksData={props.headerData}/>
                    <TopBar/>
                </div>
                <div className={s.middle_section + ' container'}>
                    <h1 className={s.title}>{titlesData[props.viewMode.page].title}</h1>
                    <p className={s.text}>Качественное оборудование и приятные цены!</p>
                    <button className={s.button}>Заказать звонок</button>
                </div>
                <div className={s.bottom_section}>
                    <NavLinks viewMode={props.viewMode}/>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;