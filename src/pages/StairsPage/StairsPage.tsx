'use client'
import React, {useState} from 'react';
import s from "@/app/page.module.scss";

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import Modal from "@/components/Modal/Modal";

import img1 from "@/public/Prices/tower/img1.png";
import img2 from "@/public/Prices/tower/img2.png";
import img3 from "@/public/Prices/tower/img3.png";

import {EPages, IFaqCardsData, IHeaderLinksData, IPricesCardProps} from "@/types/types";
import Faq from "@/components/Faq/Faq";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Footer from "@/components/Footer/Footer";
import YandexMap from "@/components/YandexMap/YandexMap";
import ButtonUp from "../../common_components/ButtonUp/ButtonUp";
import NavLinks from "@/components/NavLinks/NavLinks";

const StairsPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)

    const headerLinksData: IHeaderLinksData = {
        'tower': [
            {
                url: '#prices',
                text: 'Стоимость'
            },
            {
                url: '#specifications',
                text: 'Характеристики'
            },
            {
                url: '#faq',
                text: 'Вопросы'
            },
            {
                url: '#manual',
                text: 'Инструкция по сборке'
            },
            {
                url: '#contacts',
                text: 'Контакты'
            },
        ],
        'scaffold': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ],
        'scaffolding': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ],
        'stairs': [
            {
                url: '#',
                text: 'Стоимость'
            },
            {
                url: '#',
                text: 'Характеристики'
            },
            {
                url: '#',
                text: 'Инструкция по сборке'
            },
            {
                url: '#',
                text: 'Вопросы'
            },
            {
                url: '#',
                text: 'Контакты'
            },
        ]
    }

    const pricesCardsData: IPricesCardProps[] = [
        {
            title: 'Вышка тура ВСР-1',
            description: '(рабочая площадка 0,7 на 1,6 метра)',
            image: img1,
            prices: [
                {
                    title: 'До 7,6 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },
                {
                    title: 'До 7,7 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]

                },
                {
                    title: 'До 7,8 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },

            ],
        },
        {
            title: 'Вышка тура ВСР-1',
            description: '(рабочая площадка 0,7 на 1,6 метра)',
            image: img2,
            prices: [
                {
                    title: 'До 7,6 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },
            ],
        },
        {
            title: 'Вышка тура ВСР-1',
            description: '(рабочая площадка 0,7 на 1,6 метра)',
            image: img3,
            prices: [
                {
                    title: 'До 7,6 м',
                    pricesValue: [<p><span>8</span> рублей / 1 сутки</p>, <p><span>25</span> рублей / 7 дней</p>, <p><span>50</span> рублей / 30 дней</p>]
                },
            ],
        }
    ]

    const faqCardsData: IFaqCardsData[] = [
        {
            question: 'Почему именно вышка тура?',
            answer: 'Большое разнообразие ремонтных, строительных работ проводится на высоте. Для этого создаются специальные устройства, обеспечивающие удобный доступ к отдельным участкам. Активно задействуется вышка тура передвижная, отличающиеся относительной простотой конструкции. Визуально они напоминают строительные леса, однако выгодно отличаются от последних гораздо большей мобильностью и простотой сборки. Если надо, то удастся собрать вышку в течение часа без привлечения большого количества работников, спецсредств.'
        },
        {
            question: 'Какие преимущества аренды вышек тур?',
            answer: 'Есть выбор разных размеров и высоты. Организована подача непосредственно на строительную площадку, к любому месту, где будут проводиться манипуляции. Иногда пользователи затрудняются назвать точно, какая модель им подходит в зависимости от функционала. Например, в узких пространствах целесообразно выбирать сборно-разборные аналоги, а монолитные не всегда могут вместиться в них. Целесообразно обращаться к специалистам прежде чем остановить выбор на аренде какого-то определённого вида.'
        },
        {
            question: 'На сколько безопасны вышки?',
            answer: 'Эти устройства являются максимально безопасными, поэтому учитывается структура поверхности, возможность зафиксировать стойки на требуемой высоте.\n' +
                'Есть не менее популярные вышки-туры ВСР, имеющие небольшие колёса. Они способны поворачиваться вправо-влево либо под определённым углом, в некоторых случаях до 360. Это важное конструктивное решение, позволяющее обрабатывать конфигурацию пространства с многочисленными углами, выступами. Поворачивая вышку под нужным углом в разные стороны, удастся получить доступ к труднодоступным местам. Как видно, технические возможности действительно впечатляют, поэтому можно взять вышку туру напрокат для исполнения проектов разной сложности, срочности.'
        },
        {
            question: 'Что мне надо иметь при себе, чтобы взять в аренду вышку?',
            answer: 'Чтобы взять в аренду вышку туру, при себе необходимо иметь ПАСПОРТ для заключения договора'
        }
    ]

    return (
        <div className={s.home}>
            <MainScreen viewMode={{'page': EPages.stairs, 'component': 'main_screen'}} headerData={headerLinksData} setModalOpen={setModalOpen}/>
            {/*Якорь цены*/}
            <div className={'anchor_link'} id={'prices'}/>
            <Prices viewMode={{'page': EPages.stairs, 'component': 'prices'}} cardsData={pricesCardsData} setModalOpen={setModalOpen}/>
            <Benefits viewMode={{'page': EPages.stairs, 'component': 'benefits'}}/>
            <Order viewMode={{'page': EPages.stairs, 'component': 'order'}}/>
            <NavLinks viewMode={{'page': EPages.stairs, 'component': 'none'}}/>
            {/*Якорь вопрос/ответ*/}
            <div className={'anchor_link'} id={'faq'}/>
            <Faq cardsData={faqCardsData}/>
            <MoreQuestions title={'Остались вопросы?'} component={'main'}/>
            {/*Якорь контакты*/}
            <div className={'anchor_link'} id={'contacts'}/>
            <Footer viewMode={{'page': EPages.stairs, 'component': 'footer'}} linksData={headerLinksData}
                    setModalOpen={setModalOpen}/>
            <YandexMap/>
            <Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>
            <ButtonUp/>
        </div>
    )
};

export default StairsPage;