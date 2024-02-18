'use client'
import React, {useState} from 'react';
import s from "./ScaffoldingPage.module.scss";
import {store} from "@/assets/store";
import {EPages} from "@/types/types";

import YandexMap from "@/components/YandexMap/YandexMap";
import Modal from "@/components/Modal/Modal";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import Footer from "@/components/Footer/Footer";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Instructions from "@/components/Instructions/Instructions";
import Faq from "@/components/Faq/Faq";
import NavLinks from "@/components/NavLinks/NavLinks";
import Order from "@/components/Order/Order";
import Benefits from "@/components/Benefits/Benefits";
import Description from "@/components/Description/Description";
import MainScreen from "@/components/MainScreen/MainScreen";
import Docs from "@/components/Docs/Docs";
import Prices from "../ScaffoldingPage/Prices/Prices";
import ComponentsCarousel from "./ComponentsCarousel/ComponentsCarousel";
import Video from "@/components/Video/Video";
import ScaffoldingTable from "@/sitePages/ScaffoldingPage/ScaffoldingTable/ScaffoldingTable";

const ScaffoldingPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)

    return (
        <div className={s.home}>
            <MainScreen title={store.scaffolding.mainScreenTitle}
                        setModalOpen={setModalOpen}
                        page={EPages.scaffolding}
                        headerLinks={store.scaffolding.headerLinks}
                        topBarCards={store.topBarCards}
                        navLinks={store.navLinks}
            />

            <Description img={store.scaffolding.description.img}
                         title={store.scaffolding.description.title}
                         listData={store.scaffolding.description.list}
            />

            <Docs/>

            {/*Якорь цены*/}
            <div className={'anchor_link'} id={'prices'}/>
            <Prices pricesData={store.scaffolding.prices}/>

            {/*Якорь характеристики*/}
            {/*<div className={'anchor_link'} id={'specifications'}/>*/}

            {/*<ScaffoldingTable title={store.scaffolding.table.title} tableData={store.scaffolding.table.tableData}/>*/}

            {/*<ComponentsCarousel/>*/}

            <Benefits cardsData={store.benefits} page={EPages.scaffolding}/>

            <Order page={EPages.scaffolding}/>

            <NavLinks page={EPages.scaffolding}
                      component={'main'}
                      navLinks={store.navLinks}
            />

            {/*Якорь вопрос/ответ*/}
            <div className={'anchor_link'} id={'faq'}/>
            <Faq cardsData={store.scaffolding.faq} page={EPages.scaffolding}/>

            {/*Якорь инструкция*/}
            <div className={'anchor_link'} id={'manual'}/>
            <Instructions cardsData={store.scaffolding.instructions.content}
                          title={store.scaffolding.instructions.title}/>

            <div className={s.videos_section + ' '}>
                <h2 className={s.title}>Видеоинструкции</h2>
                <div className={s.content}>
                    <Video video={store.scaffolding.firstVideo.video} title={store.scaffolding.firstVideo.title}/>
                    <Video title={store.scaffolding.secondVideo.title} video={store.scaffolding.secondVideo.video}/>
                </div>
            </div>

            <MoreQuestions title={'Остались вопросы?'} component={'main'}/>

            {/*Якорь контакты*/}
            <div className={'anchor_link'} id={'contacts'}/>
            <Footer links={store.scaffolding.headerLinks} setModalOpen={setModalOpen}/>

            <YandexMap/>
            <Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>
            <ButtonUp/>
        </div>
    )
};

export default ScaffoldingPage;