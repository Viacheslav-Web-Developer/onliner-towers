'use client'
import React, {useState} from 'react';
import {
    EPages,
    IFaqCardsData,
    IHeaderLinksData,
    IInstructionsData,
    IScaffoldingPageDescriptionData
} from "@/types/types";
import img from "@/public/ScaffDescriptions/scaffold.png";
import s from "@/app/page.module.scss";

import MainScreen from "@/components/MainScreen/MainScreen";
import Description from "@/components/Description/Description";
import Benefits from "@/components/Benefits/Benefits";
import Order from "@/components/Order/Order";
import NavLinks from "@/components/NavLinks/NavLinks";
import Faq from "@/components/Faq/Faq";
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import Footer from "@/components/Footer/Footer";
import YandexMap from "@/components/YandexMap/YandexMap";
import Modal from "@/components/Modal/Modal";
import ButtonUp from "@/common_components/ButtonUp/ButtonUp";
import instImage1 from "@/public/Instructions/towers/image1.png";
import instImage2 from "@/public/Instructions/towers/image2.png";
import instImage3 from "@/public/Instructions/towers/image3.png";
import instImage4 from "@/public/Instructions/towers/image4.png";
import instImage5 from "@/public/Instructions/towers/image5.png";
import Instructions from "@/components/Instructions/Instructions";

const ScaffoldPage = () => {
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
    //         question: 'Возможна ли доставка?',
    //         answer: 'К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.'
    //     },
    //     {
    //         question: 'Что мне нужно при себе иметь, чтобы взять малярный помост в аренду?',
    //         answer: 'Чтобы взять помост ПМ 200 в прокат, вам нужно иметь при себе паспорт для заключения договора и деньги.'
    //     },
    //     {
    //         question: 'Как быть, когда минимальный срок аренды помоста 7 дней, а мне он нужен на 2-3 дня?',
    //         answer: 'Вы можете привести ее раньше положенного срока сдачи.'
    //     },
    //     {
    //         question: 'Можно оплатить по факту?',
    //         answer: 'К сожалению, оплата у нас происходит наперед.'
    //     },
    //     {
    //         question: 'Можно ли продлить аренду помоста, если не успел доделать работу?',
    //         answer: 'Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжить пользоваться дальше. Только нужно будет произвести оплату через ЕРИП. '
    //     },
    //     {
    //         question: 'Как можно оплатить за продление?',
    //         answer: 'Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк.'
    //     },
    //     {
    //         question: 'Ничего, если мой знакомый привезет малярный помост ПМ 200 вместо меня?',
    //         answer: 'Да ничего страшного.'
    //     },
    //     {
    //         question: 'Нужно ли оставлять какой-то залог когда мне нужно взять помост аренду?',
    //         answer: 'Нет. Договор заключается без залоговой стоимость. Можем попросить залог только в том случае, если человек приехал с большим количеством задолженностей по исполнительным документам.'
    //     },
    //     {
    //         question: 'Какие документы нужно иметь юридическому лицу, чтобы взять помост на прокат?',
    //         answer: 'Нужно иметь подписанные документы:\n' +
    //             '- договор\n' +
    //             '- счет\n' +
    //             '- акт приема передачи или иметь доверенность.\n'
    //     },
    // ]
    //
    // const descriptionData: IScaffoldingPageDescriptionData = {
    //     img: img,
    //     title: 'Помост ПМ 200',
    //     listData: [
    //         'высокая скорость сборки и установки',
    //         'удобное хранение и транспортировку',
    //         'долговечность и безопасность',
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
            {/*<MainScreen viewMode={{'page': EPages.scaffold, 'component': 'main_screen'}} headerData={headerLinksData}*/}
            {/*            setModalOpen={setModalOpen}/>*/}
            {/*<Description descriptionData={descriptionData}/>*/}
            {/*/!*Якорь цены*!/*/}
            {/*<div className={'anchor_link'} id={'prices'}/>*/}
            {/*<Benefits viewMode={{'page': EPages.scaffold, 'component': 'benefits'}}/>*/}
            {/*<Order viewMode={{'page': EPages.scaffold, 'component': 'order'}}/>*/}
            {/*<NavLinks viewMode={{'page': EPages.scaffold, 'component': 'none'}}/>*/}
            {/*/!*Якорь вопрос/ответ*!/*/}
            {/*<div className={'anchor_link'} id={'faq'}/>*/}
            {/*<Faq cardsData={faqCardsData}/>*/}
            {/*<Instructions instructionsData={instructionsData}/>*/}
            {/*<MoreQuestions title={'Остались вопросы?'} component={'main'}/>*/}
            {/*/!*Якорь контакты*!/*/}
            {/*<div className={'anchor_link'} id={'contacts'}/>*/}
            {/*<Footer viewMode={{'page': EPages.scaffold, 'component': 'footer'}} linksData={headerLinksData}*/}
            {/*        setModalOpen={setModalOpen}/>*/}
            {/*<YandexMap/>*/}
            {/*<Modal modalIsOpen={modalIsOpen} setModalOpen={setModalOpen}/>*/}
            {/*<ButtonUp/>*/}
        </div>
    )
};

export default ScaffoldPage;