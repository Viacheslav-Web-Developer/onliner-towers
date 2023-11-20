'use client'
import React, {useState} from "react";
import s from '@/app/page.module.scss';
import {EPages} from "@/types/types";
import {store} from '@/assets/store';

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import Table from "@/components/Table/Table";
import NavLinks from "@/components/NavLinks/NavLinks";
import Faq from "@/components/Faq/Faq";
import Instructions from "@/components/Instructions/Instructions";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import ButtonUp from "@/common_components/ButtonUp/ButtonUp";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";
import YandexMap from "@/components/YandexMap/YandexMap";
import Video from "@/components/Video/Video";

const TowerPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false);

    return (
        <div className={s.home}>
            <MainScreen
                page={EPages.tower}
                headerLinks={store.tower.headerLinks}
                topBarCards={store.topBarCards}
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

            {/*<Benefits cardsData={store.benefits} page={EPages.tower}/>*/}
            {/*<Order page={EPages.tower}/>*/}

            {/*/!*Якорь характеристики*!/*/}
            {/*<div className={'anchor_link'} id={'specifications'}/>*/}
            {/*<div className={'container'}>*/}
            {/*    <div className={s.table}>*/}
            {/*        <h2 className={s.table_title}>Технические характеристики вышки туры передвижной</h2>*/}
            {/*        <div className={s.layout}>*/}
            {/*            <Table tableData={store.tower.firstTable}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={s.table}>*/}
            {/*        <h2 className={s.table_title}>Подробные технические характеристики вышки туры передвижной</h2>*/}
            {/*        <div className={s.layout}>*/}
            {/*            <Table tableData={store.tower.secondTable}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<NavLinks navLinks={store.navLinks} page={EPages.tower} component={'main'}/>*/}

            {/*/!*Якорь вопрос/ответ*!/*/}
            {/*<div className={'anchor_link'} id={'faq'}/>*/}
            {/*<Faq cardsData={store.tower.faq}/>*/}

            {/*/!*Якорь инструкция*!/*/}
            {/*<div className={'anchor_link'} id={'manual'}/>*/}
            {/*<Instructions cardsData={store.tower.instructions}/>*/}


            {/*<div className={s.videos_section}>*/}
            {/*    <Video video={store.tower.firstVideo.video} title={store.tower.firstVideo.title}/>*/}
            {/*    <Video video={store.tower.secondVideo.video} title={store.tower.secondVideo.title}/>*/}
            {/*</div>*/}

            {/*<MoreQuestions component={'main'} title={'Остались вопросы?'}/>*/}

            {/*/!*Якорь контакты*!/*/}
            {/*<div className={'anchor_link'} id={'contacts'}/>*/}
            {/*<Footer setModalOpen={setModalOpen} links={store.tower.headerLinks}/>*/}

            {/*<YandexMap/>*/}

            {/*<Modal setModalOpen={setModalOpen} modalIsOpen={modalIsOpen}/>*/}
            {/*<ButtonUp/>*/}
        </div>
    )
}

export default TowerPage;