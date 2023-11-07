'use client'
import React, {useState} from 'react';
import s from "@/app/page.module.scss";
import MainScreen from "@/components/MainScreen/MainScreen";
import YandexMap from "@/components/YandexMap/YandexMap";
import Modal from "@/components/Modal/Modal";
import ButtonUp from "@/common_components/ButtonUp/ButtonUp";
import Footer from "@/components/Footer/Footer";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Faq from "@/components/Faq/Faq";
import NavLinks from "@/components/NavLinks/NavLinks";
import Description from "@/pages/StairsPage/Description/Description";
import {store} from "@/assets/store";
import {EPages} from "@/types/types";
import Order from "@/components/Order/Order";
import Benefits from "@/components/Benefits/Benefits";
import Prices from "@/components/Prices/Prices";

const StairsPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)

    return (
        <div className={s.home}>
            <MainScreen title={store.tower.mainScreenTitle}
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
            <Faq cardsData={store.stairs.faq}/>

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