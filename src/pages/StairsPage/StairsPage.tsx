'use client'
import React, {useState} from 'react';
import s from "@/app/page.module.scss";

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import Modal from "@/components/Modal/Modal";
import Faq from "@/components/Faq/Faq";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Footer from "@/components/Footer/Footer";
import YandexMap from "@/components/YandexMap/YandexMap";
import ButtonUp from "../../common_components/ButtonUp/ButtonUp";
import NavLinks from "@/components/NavLinks/NavLinks";

import img1 from "@/public/Prices/tower/img1.png";
import img2 from "@/public/Prices/tower/img2.png";
import img3 from "@/public/Prices/tower/img3.png";

import {EPages, IFaqCardsData, IHeaderLinksData, IPricesCardProps} from "@/types/types";
import Description from "@/pages/StairsPage/components/Description/Description";

const StairsPage = () => {
    // const [modalIsOpen, setModalOpen] = useState(false)
    //
    // const headerLinksData: IHeaderLinksData = {
    //     'tower': [
    //         {
    //             url: '#prices',
    //             text: 'Стоимость'
    //         },
    //         {
    //             url: '#specifications',
    //             text: 'Характеристики'
    //         },
    //         {
    //             url: '#faq',
    //             text: 'Вопросы'
    //         },
    //         {
    //             url: '#manual',
    //             text: 'Инструкция по сборке'
    //         },
    //         {
    //             url: '#contacts',
    //             text: 'Контакты'
    //         },
    //     ],
    //     'scaffold': [
    //         {
    //             url: '#',
    //             text: 'Стоимость'
    //         },
    //         {
    //             url: '#',
    //             text: 'Характеристики'
    //         },
    //         {
    //             url: '#',
    //             text: 'Инструкция по сборке'
    //         },
    //         {
    //             url: '#',
    //             text: 'Вопросы'
    //         },
    //         {
    //             url: '#',
    //             text: 'Контакты'
    //         },
    //     ],
    //     'scaffolding': [
    //         {
    //             url: '#',
    //             text: 'Стоимость'
    //         },
    //         {
    //             url: '#',
    //             text: 'Характеристики'
    //         },
    //         {
    //             url: '#',
    //             text: 'Инструкция по сборке'
    //         },
    //         {
    //             url: '#',
    //             text: 'Вопросы'
    //         },
    //         {
    //             url: '#',
    //             text: 'Контакты'
    //         },
    //     ],
    //     'stairs': [
    //         {
    //             url: '#',
    //             text: 'Стоимость'
    //         },
    //         {
    //             url: '#',
    //             text: 'Характеристики'
    //         },
    //         {
    //             url: '#',
    //             text: 'Инструкция по сборке'
    //         },
    //         {
    //             url: '#',
    //             text: 'Вопросы'
    //         },
    //         {
    //             url: '#',
    //             text: 'Контакты'
    //         },
    //     ]
    // }
    //
    // const pricesCardsData: IPricesCardProps[] = [
    //     {
    //         title: 'Вышка тура ВСР-1',
    //         description: '(рабочая площадка 0,7 на 1,6 метра)',
    //         image: img1,
    //         prices: [
    //             {
    //                 title: 'До 7,6 м',
    //                 pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
    //             },
    //             {
    //                 title: 'До 7,7 м',
    //                 pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
    //
    //             },
    //             {
    //                 title: 'До 7,8 м',
    //                 pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
    //             },
    //
    //         ],
    //     },
    //     {
    //         title: 'Вышка тура ВСР-1',
    //         description: '(рабочая площадка 0,7 на 1,6 метра)',
    //         image: img2,
    //         prices: [
    //             {
    //                 title: 'До 7,6 м',
    //                 pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Вышка тура ВСР-1',
    //         description: '(рабочая площадка 0,7 на 1,6 метра)',
    //         image: img3,
    //         prices: [
    //             {
    //                 title: 'До 7,6 м',
    //                 pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
    //             },
    //         ],
    //     }
    // ]
    //
    // const faqCardsData: IFaqCardsData[] = [
    //     {
    //         question: 'Возможна ли доставка?',
    //         answer: 'К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.'
    //     },
    //     {
    //         question: 'Что мне нужно при себе иметь, чтобы взять лестницу в аренду?',
    //         answer: 'Чтобы взять лестницу на прокат, вам нужно иметь при себе паспорт для заключения договора и деньги.'
    //     },
    //     {
    //         question: 'Как быть, когда минимальный срок аренды лестниц, стремянок 3 дня, а мне она нужна на 1 день?',
    //         answer: 'Вы можете привести ее раньше положенного срока сдачи.'
    //     },
    //     {
    //         question: 'Можно оплатить по факту?',
    //         answer: 'К сожалению, оплата у нас происходит наперед.'
    //     },
    //     {
    //         question: 'Можно ли продлить аренду стремянки, если не успел доделать работу?',
    //         answer: 'Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжить пользоваться дальше. Только нужно будет произвести оплату через ЕРИП. '
    //     },
    //     {
    //         question: 'Как можно оплатить за продление?',
    //         answer: 'Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк.'
    //     },
    //     {
    //         question: 'Ничего, если мой знакомый привезет лестницу вместо меня?',
    //         answer: 'Да ничего страшного.'
    //     },
    //     {
    //         question: 'Нужно ли оставлять какой-то залог когда мне нужно взять лестницу аренду?',
    //         answer: 'Нет. Договор заключается без залоговой стоимость. Можем попросить залог только в том случае, если человек приехал с большим количеством задолженностей по исполнительным документам.'
    //     },
    //     {
    //         question: 'Аренда какой самой длинной лестницы возможна?',
    //         answer: 'Мы можем предложить в аренду лестницу 10 метров.'
    //     },
    //     {
    //         question: 'Какие документы нужно иметь юридическому лицу, чтобы взять строительную лестницу на прокат?',
    //         answer: 'Нужно иметь подписанные документы:\n' +
    //             '- договор\n' +
    //             '- счет\n' +
    //             '- акт приема передачи или иметь доверенность.\n'
    //     },
    // ]

    return (
        <div className={s.home}>
            {/*<MainScreen viewMode={{'page': EPages.stairs, 'component': 'main_screen'}} headerData={headerLinksData} setModalOpen={setModalOpen}/>*/}
            {/*/!*Якорь цены*!/*/}
            {/*<div className={'anchor_link'} id={'prices'}/>*/}
            {/*<Prices viewMode={{'page': EPages.stairs, 'component': 'prices'}} cardsData={pricesCardsData} setModalOpen={setModalOpen}/>*/}
            {/*<Benefits viewMode={{'page': EPages.stairs, 'component': 'benefits'}}/>*/}
            {/*<Order viewMode={{'page': EPages.stairs, 'component': 'order'}}/>*/}
            {/*<Description/>*/}
            {/*<NavLinks viewMode={{'page': EPages.stairs, 'component': 'none'}}/>*/}
            {/*/!*Якорь вопрос/ответ*!/*/}
            {/*<div className={'anchor_link'} id={'faq'}/>*/}
            {/*<Faq cardsData={faqCardsData}/>*/}
            {/*<MoreQuestions title={'Остались вопросы?'} component={'main'}/>*/}
            {/*/!*Якорь контакты*!/*/}
            {/*<div className={'anchor_link'} id={'contacts'}/>*/}
            {/*<Footer viewMode={{'page': EPages.stairs, 'component': 'footer'}} linksData={headerLinksData}*/}
            {/*        setModalOpen={setModalOpen}/>*/}
            {/*<YandexMap/>*/}
            {/*<Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>*/}
            {/*<ButtonUp/>*/}
        </div>
    )
};

export default StairsPage;