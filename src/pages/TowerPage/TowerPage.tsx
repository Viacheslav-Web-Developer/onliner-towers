'use client'
import React, {useState} from "react";
import s from '@/app/page.module.scss';
import {EPages} from "@/types/types";
import {store} from '@/assets/store';

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";

const TowerPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div className={s.home}>
            <MainScreen
                page={EPages.tower}
                headerLinks={store.tower.headerLinks}
                topBarCards={store.tower.topBarList}
                title={store.tower.mainScreenTitle}
                setModalOpen={setModalOpen}
                navLinks={store.navLinks}
            />

            {/*Якорь цены*/}
            <div className={'anchor_link'} id={'prices'}/>
            <Prices
                cardsData={store.tower.prices}
                setModalOpen={setModalOpen}
                page={EPages.tower}
            />

            <Benefits cardsData={store.tower.benefits} page={EPages.tower}/>
            <Order page={EPages.tower}/>

            {/*/!*Якорь характеристики*!/*/}
            {/*<div className={'anchor_link'} id={'specifications'}/>*/}
            {/*<div className={s.table + ' container'}>*/}
            {/*    <h2 className={s.table_title}>Технические характеристики вышки туры передвижной</h2>*/}
            {/*    <Table tableData={}/>*/}
            {/*</div>*/}
            {/*<div className={s.table + ' container'}>*/}
            {/*    <h2 className={s.table_title}>Подробные технические характеристики вышки туры передвижной</h2>*/}
            {/*    <Table/>*/}
            {/*</div>*/}
            {/*<NavLinks/>*/}
            {/*/!*Якорь вопрос/ответ*!/*/}
            {/*<div className={'anchor_link'} id={'faq'}/>*/}
            {/*<Faq/>*/}
            {/*/!*Якорь инструкция*!/*/}
            {/*<div className={'anchor_link'} id={'manual'}/>*/}
            {/*<Instructions/>*/}
            {/*<div className={s.videos_section}>*/}
            {/*    <Video/>*/}
            {/*    <Video/>*/}
            {/*</div>*/}
            {/*<MoreQuestions/>*/}
            {/*/!*Якорь контакты*!/*/}
            {/*<div className={'anchor_link'} id={'contacts'}/>*/}
            {/*<Footer/>*/}
            {/*<YandexMap/>*/}
            {/*<Modal/>*/}
            {/*<ButtonUp/>*/}
        </div>
    )
}

export default TowerPage;