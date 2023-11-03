'use client'
import React, {useState} from 'react';
import img from "@/public/ScaffDescriptions/scaffold.png";
import s from "@/app/page.module.scss";

const ScaffoldPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)

    const faqCardsData: IFaqCardsData[] = [
        {
            question: 'Возможна ли доставка?',
            answer: 'К сожалению, собственной доставки у нас нет. Но это могут выполнить наши перевозчики.'
        },
        {
            question: 'Что мне нужно при себе иметь, чтобы взять малярный помост в аренду?',
            answer: 'Чтобы взять помост ПМ 200 в прокат, вам нужно иметь при себе паспорт для заключения договора и деньги.'
        },
        {
            question: 'Как быть, когда минимальный срок аренды помоста 7 дней, а мне он нужен на 2-3 дня?',
            answer: 'Вы можете привести ее раньше положенного срока сдачи.'
        },
        {
            question: 'Можно оплатить по факту?',
            answer: 'К сожалению, оплата у нас происходит наперед.'
        },
        {
            question: 'Можно ли продлить аренду помоста, если не успел доделать работу?',
            answer: 'Да, можно позвонить и предупредить по телефону, что не успели сделать в срок и продолжить пользоваться дальше. Только нужно будет произвести оплату через ЕРИП. '
        },
        {
            question: 'Как можно оплатить за продление?',
            answer: 'Самый простой способ – оплатить через ЕРИП. Можно оплатить в любом инфокиоске, через интернет банкинг, почту, банк.'
        },
        {
            question: 'Ничего, если мой знакомый привезет малярный помост ПМ 200 вместо меня?',
            answer: 'Да ничего страшного.'
        },
        {
            question: 'Нужно ли оставлять какой-то залог когда мне нужно взять помост аренду?',
            answer: 'Нет. Договор заключается без залоговой стоимость. Можем попросить залог только в том случае, если человек приехал с большим количеством задолженностей по исполнительным документам.'
        },
        {
            question: 'Какие документы нужно иметь юридическому лицу, чтобы взять помост на прокат?',
            answer: 'Нужно иметь подписанные документы: - договор - счет - акт приема передачи или иметь доверенность.'
        },
    ]

    const descriptionData: IScaffoldingPageDescriptionData = {
        img: img,
        title: 'Помост ПМ 200',
        listData: [
            'высокая скорость сборки и установки',
            'удобное хранение и транспортировку',
            'долговечность и безопасность',
        ]
    }

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