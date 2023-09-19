import React from 'react';
import s from "@/app/page.module.scss";

import MainScreen from "@/components/MainScreen/MainScreen";
import Prices from "@/components/Prices/Prices";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import NavLinks from "@/components/NavLinks/NavLinks";
import Faq from "@/components/Faq/Faq";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";

import {EPages, IFaqCardsData, IHeaderLinksData, ITableData} from "@/types/types";

const Stair = () => {
    const headerLinksData: IHeaderLinksData = {
        'tower': [
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

    const firstTableData: ITableData = {
        thead: [''],
        tbody: [
            ['']
        ]
    }

    const secondTableData: ITableData = {
        thead: [''],
        tbody: [
            ['']
        ]
    }

    const faqCardsData: IFaqCardsData[] = [
        {
            answer: 'Почему именно вышка тура?',
            question: 'Большое разнообразие ремонтных, строительных работ проводится на высоте. Для этого создаются специальные устройства, обеспечивающие удобный доступ к отдельным участкам. Активно задействуется вышка тура передвижная, отличающиеся относительной простотой конструкции. Визуально они напоминают строительные леса, однако выгодно отличаются от последних гораздо большей мобильностью и простотой сборки. Если надо, то удастся собрать вышку в течение часа без привлечения большого количества работников, спецсредств.'
        },
        {
            answer: 'Какие преимущества аренды вышек тур?',
            question: 'Есть выбор разных размеров и высоты. Организована подача непосредственно на строительную площадку, к любому месту, где будут проводиться манипуляции. Иногда пользователи затрудняются назвать точно, какая модель им подходит в зависимости от функционала. Например, в узких пространствах целесообразно выбирать сборно-разборные аналоги, а монолитные не всегда могут вместиться в них. Целесообразно обращаться к специалистам прежде чем остановить выбор на аренде какого-то определённого вида.'
        },
        {
            answer: 'На сколько безопасны вышки?',
            question: 'Эти устройства являются максимально безопасными, поэтому учитывается структура поверхности, возможность зафиксировать стойки на требуемой высоте.\n' +
                'Есть не менее популярные вышки-туры ВСР, имеющие небольшие колёса. Они способны поворачиваться вправо-влево либо под определённым углом, в некоторых случаях до 360. Это важное конструктивное решение, позволяющее обрабатывать конфигурацию пространства с многочисленными углами, выступами. Поворачивая вышку под нужным углом в разные стороны, удастся получить доступ к труднодоступным местам. Как видно, технические возможности действительно впечатляют, поэтому можно взять вышку туру напрокат для исполнения проектов разной сложности, срочности.'
        },
        {
            answer: 'Что мне надо иметь при себе, чтобы взять в аренду вышку?',
            question: 'Чтобы взять в аренду вышку туру, при себе необходимо иметь ПАСПОРТ для заключения договора'
        }
    ]

    return (
        <div className={s.home}>
            <MainScreen viewMode={{'page': EPages.stairs, 'component': 'main_screen'}} headerData={headerLinksData}/>
            <Prices viewMode={{'page': EPages.stairs, 'component': 'main_screen'}}/>
            <Benefits/>
            <Order/>
            <NavLinks viewMode={{'page': EPages.stairs, 'component': 'none'}}/>
            <Faq cardsData={faqCardsData}/>
            <MoreQuestions/>
        </div>
    )
};

export default Stair;