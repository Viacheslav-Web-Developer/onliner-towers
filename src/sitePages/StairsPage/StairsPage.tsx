'use client'
import React, {useState} from 'react';
import s from "./StairsPage.module.scss";
import {store} from "@/assets/store";
import {EPages} from "@/types/types";

import MainScreen from "@/components/MainScreen/MainScreen";
import YandexMap from "@/components/YandexMap/YandexMap";
import Modal from "@/components/Modal/Modal";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import Footer from "@/components/Footer/Footer";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Faq from "@/components/Faq/Faq";
import NavLinks from "@/components/NavLinks/NavLinks";
import Description from "../StairsPage/Description/Description";
import Benefits from "@/components/Benefits/Benefits";
import Prices from "@/components/Prices/Prices";
import Order from "@/components/Order/Order";
import Video from "@/components/Video/Video";

const StairsPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)

    return (
        <div className={s.home}>
            <MainScreen title={store.stairs.mainScreenTitle}
                        setModalOpen={setModalOpen}
                        page={EPages.stairs}
                        headerLinks={store.stairs.headerLinks}
                        topBarCards={store.topBarCards}
                        navLinks={store.navLinks}
            />

            {/*/!*Якорь цены*!/*/}
            <div className={'anchor_link'} id={'prices'}/>
            <Prices page={EPages.stairs}
                    cardsData={store.stairs.prices}
                    setModalOpen={setModalOpen}
            />

            <Benefits cardsData={store.benefits} page={EPages.stairs}/>

            <Order page={EPages.stairs}/>

            {/*/!*Якорь характеристик*!/*/}
            <div className={'anchor_link'} id={'specifications'}/>
            <Description/>

            <NavLinks page={EPages.stairs} component={'main'} navLinks={store.navLinks}/>

            {/*Якорь вопрос/ответ*/}
            <div className={'anchor_link'} id={'faq'}/>
            <Faq cardsData={store.stairs.faq} page={EPages.stairs}/>

            <div className={s.videos_section + ' '}>
                <h2 className={s.title}>Видеоинструкции</h2>
                <div className={s.content}>
                    <Video video={store.stairs.firstVideo.video} title={store.stairs.firstVideo.title}/>
                </div>
            </div>

            <MoreQuestions component={'main'} title={'Остались вопросы?'}/>

            {/*Якорь контакты*/}
            <div className={'anchor_link'} id={'contacts'}/>
            <Footer links={store.stairs.headerLinks} setModalOpen={setModalOpen}/>

            <YandexMap/>
            <Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>
            <ButtonUp/>
        </div>
    )
};

export default StairsPage;