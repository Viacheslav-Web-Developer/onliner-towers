'use client'
import React, {useState} from 'react';
import s from "@/app/page.module.scss";

import MainScreen from "@/components/MainScreen/MainScreen";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import NavLinks from "@/components/NavLinks/NavLinks";
import Faq from "@/components/Faq/Faq";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Footer from "@/components/Footer/Footer";
import YandexMap from "@/components/YandexMap/YandexMap";
import Modal from "@/components/Modal/Modal";
import ButtonUp from "@/common_components/ButtonUp/ButtonUp";
import Description from "@/components/Description/Description";

import img from '@/public/ScaffDescriptions/scaffolding.png';

import {
    EPages,
    IFaqCardsData,
    IHeaderLinksData,
    IInstructionsData,
    IScaffoldingPageDescriptionData
} from "@/types/types";
import instImage1 from "@/public/Instructions/towers/image1.png";
import instImage2 from "@/public/Instructions/towers/image2.png";
import instImage3 from "@/public/Instructions/towers/image3.png";
import instImage4 from "@/public/Instructions/towers/image4.png";
import instImage5 from "@/public/Instructions/towers/image5.png";
import Instructions from "@/components/Instructions/Instructions";

const ScaffoldingPage = () => {
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
    // const faqCardsData: IFaqCardsData[] = [
    //     {
    //         question: 'Почему именно вышка тура?',
    //         answer: 'Большое разнообразие ремонтных, строительных работ проводится на высоте. Для этого создаются специальные устройства, обеспечивающие удобный доступ к отдельным участкам. Активно задействуется вышка тура передвижная, отличающиеся относительной простотой конструкции. Визуально они напоминают строительные леса, однако выгодно отличаются от последних гораздо большей мобильностью и простотой сборки. Если надо, то удастся собрать вышку в течение часа без привлечения большого количества работников, спецсредств.'
    //     },
    //     {
    //         question: 'Какие преимущества аренды вышек тур?',
    //         answer: 'Есть выбор разных размеров и высоты. Организована подача непосредственно на строительную площадку, к любому месту, где будут проводиться манипуляции. Иногда пользователи затрудняются назвать точно, какая модель им подходит в зависимости от функционала. Например, в узких пространствах целесообразно выбирать сборно-разборные аналоги, а монолитные не всегда могут вместиться в них. Целесообразно обращаться к специалистам прежде чем остановить выбор на аренде какого-то определённого вида.'
    //     },
    //     {
    //         question: 'На сколько безопасны вышки?',
    //         answer: 'Эти устройства являются максимально безопасными, поэтому учитывается структура поверхности, возможность зафиксировать стойки на требуемой высоте.\n' +
    //             'Есть не менее популярные вышки-туры ВСР, имеющие небольшие колёса. Они способны поворачиваться вправо-влево либо под определённым углом, в некоторых случаях до 360. Это важное конструктивное решение, позволяющее обрабатывать конфигурацию пространства с многочисленными углами, выступами. Поворачивая вышку под нужным углом в разные стороны, удастся получить доступ к труднодоступным местам. Как видно, технические возможности действительно впечатляют, поэтому можно взять вышку туру напрокат для исполнения проектов разной сложности, срочности.'
    //     },
    //     {
    //         question: 'Что мне надо иметь при себе, чтобы взять в аренду вышку?',
    //         answer: 'Чтобы взять в аренду вышку туру, при себе необходимо иметь ПАСПОРТ для заключения договора'
    //     }
    // ]
    //
    // const descriptionData: IScaffoldingPageDescriptionData = {
    //     img: img,
    //     title: 'Леса строительные ЛРСП-40',
    //     listData: [
    //         'работы на высоте до 40 метров',
    //         'быстрый монтаж и демонтаж ',
    //         'высокая надёжность',
    //         'для любых видов строительных работ',
    //         'возможность установки на участках с разными уровнями по высоте'
    //     ]
    // }
    //
    // const instructionsData: IInstructionsData[] = [
    //     {
    //         text: 'Монтаж вышки туры начинается с установки двухколесных балок. Вывернутые винтовые опоры ставим балки на ровную поверхность с замками внутрь параллельно друг другу. Сверху на стаканы базы прикладываем длинную объемную диагональ синего цвета. Обратите внимание на то, что эта деталь не вставляется в колесную базу, а именно прикладывается сверху.',
    //         image: instImage1
    //     },
    //     {
    //         text: 'Далее вставляем лестницы секции через объемную диагональ длинными концами вниз, тем самым скрепляя предыдущие детали. Берем 4 стяжки желтого цвета, которые соединяют между собой лестницы и основание. Соединяем их между собой с помощью флажков замков последовательно по часовой стрелке. Теперь на лестнице основания надеваем гантели синего цвета и также закрепляем их между собой в той же последовательности с помощью желтых стяжек.',
    //         image: instImage2,
    //         textAfterImage: 'После того как мы собрали полностью первую секцию, необходимо слегка встряхнуть получившуюся конструкцию и такую манипуляцию нужно будет проделать каждой последующей секции, чтобы убедиться, что все соединения плотно сели на свои места.'
    //     },
    //     {
    //         text: 'Теперь можно приступить к выравниванию туры по уровню с четырех сторон с помощью винтовых опор. На этом сборка первой части завершена. Теперь мы по такому же принципу можем продолжить монтаж последующих секций. На гантели синего цвета надеваем желтый рамы, крепим конструкции четырьмя стяжками, на этом моменте можно установить настил. Далее сверху снова установленных гантели и еще 4 стяжки. Когда все промежуточные секции готовы, у нас остаются детали красного цвета. Это секция ограждения. Берем лестницы ограждения и вставляем в гантели последней секции, также друг напротив друга. Далее берем 4 стяжки и закрепляем ими лестницы к гантелям предыдущий секции.\n',
    //         image: instImage3
    //     },
    //     {
    //         text: 'На поперечные лестницы ограждения устанавливаем настил с люком и перекладину ограждения с помощью тех же флажковых соединений, к которым крепились стяжки. Устанавливаем гантели ограждения. Теперь осталось закрепить гантели. Для этого берем оставшийся 4 стяжки и соединяем ими гантели с лестницами. За счет расстояния между ступенями мы можем регулировать высоту установки настила каждые 40 сантиметров.\n',
    //         image: instImage4
    //     },
    //     {
    //         text: 'Для обеспечения дополнительной устойчивости предусмотрена установка двух стабилизатора, которые рекомендуют устанавливать при высоте вышки более 6 метров. Cтабилизаторы крепится хомутами к основной конструкции вышки.\n',
    //         image: instImage5
    //     },
    // ]

    return (
        <div className={s.home}>
            {/*<MainScreen viewMode={{'page': EPages.scaffolding, 'component': 'main_screen'}} headerData={headerLinksData}*/}
            {/*            setModalOpen={setModalOpen}/>*/}
            {/*<Description descriptionData={descriptionData}/>*/}
            {/*/!*Якорь цены*!/*/}
            {/*<div className={'anchor_link'} id={'prices'}/>*/}
            {/*<Benefits viewMode={{'page': EPages.scaffolding, 'component': 'benefits'}}/>*/}
            {/*<Order viewMode={{'page': EPages.scaffolding, 'component': 'order'}}/>*/}
            {/*<NavLinks viewMode={{'page': EPages.scaffolding, 'component': 'none'}}/>*/}
            {/*/!*Якорь вопрос/ответ*!/*/}
            {/*<div className={'anchor_link'} id={'faq'}/>*/}
            {/*<Faq cardsData={faqCardsData}/>*/}
            {/*<Instructions instructionsData={instructionsData}/>*/}
            {/*<MoreQuestions title={'Остались вопросы?'} component={'main'}/>*/}
            {/*/!*Якорь контакты*!/*/}
            {/*<div className={'anchor_link'} id={'contacts'}/>*/}
            {/*<Footer viewMode={{'page': EPages.scaffolding, 'component': 'footer'}} linksData={headerLinksData}*/}
            {/*        setModalOpen={setModalOpen}/>*/}
            {/*<YandexMap/>*/}
            {/*<Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>*/}
            {/*<ButtonUp/>*/}
        </div>
    )
};

export default ScaffoldingPage;