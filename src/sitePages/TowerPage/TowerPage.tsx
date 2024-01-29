'use client'
import React, {useState} from "react";
import s from './TowerPage.module.scss';
import {EPages} from "@/types/types";
import {store} from '@/assets/store';

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import NavLinks from "@/components/NavLinks/NavLinks";
import Faq from "@/components/Faq/Faq";
import Instructions from "@/components/Instructions/Instructions";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";
import YandexMap from "@/components/YandexMap/YandexMap";
import Video from "@/components/Video/Video";
import TowersTable from "@/sitePages/TowerPage/TowersTable/TowersTable";

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

            <Benefits cardsData={store.benefits} page={EPages.tower}/>
            <Order page={EPages.tower}/>

            {/*Якорь характеристики*/}
            <div className={'anchor_link'} id={'specifications'}/>

            {/*<TowersTable tableData={store.tower.firstTable.tableData} title={store.tower.firstTable.title}/>*/}
            {/*<TowersTable tableData={store.tower.secondTable.tableData} title={store.tower.secondTable.title}/>*/}

            <NavLinks navLinks={store.navLinks} page={EPages.tower} component={'main'}/>

            {/*Якорь вопрос/ответ*/}
            <div className={'anchor_link'} id={'faq'}/>
            <Faq cardsData={store.tower.faq} page={EPages.tower}/>

            {/*Якорь инструкция*/}
            <div className={'anchor_link'} id={'manual'}/>
            <Instructions cardsData={store.tower.instructions}/>

            <div className={s.videos_section + ' '}>
                <h2 className={s.title}>Видеоинструкции</h2>
                <div className={s.content}>
                    <Video video={store.tower.firstVideo.video} title={store.tower.firstVideo.title}/>
                    <Video video={store.tower.secondVideo.video} title={store.tower.secondVideo.title}/>
                    <Video title={store.tower.thirdVideo.title} video={store.tower.thirdVideo.video}/>
                </div>
            </div>

            {/*<MoreQuestions component={'main'} title={'Остались вопросы?'}/>*/}

            {/*Якорь контакты*/}
            <div className={'anchor_link'} id={'contacts'}/>
            {/*<Footer setModalOpen={setModalOpen} links={store.tower.headerLinks}/>*/}

            <YandexMap/>

            {/*<Modal setModalOpen={setModalOpen} modalIsOpen={modalIsOpen}/>*/}
            <ButtonUp/>
        </div>
    )
}

export default TowerPage;