import React, {useEffect, useState} from 'react';
import s from './ComponentsCarousel.module.scss'
import {IComponentsCarouselCard} from "@/types/types";

import ComponentsCarouselCard from "@/pages/ScaffoldingPage/ComponentsCarousel/ComponentsCarousel-card";
import ComponentsCarouselMarker from "@/pages/ScaffoldingPage/ComponentsCarousel/ComponentsCarousel-marker";

import img from '@/public/ScaffoldingCarousel/templateImg.png'
import arrow from '@/public/ScaffoldingCarousel/arrow.svg'
import Image from "next/image";
import classNames from "classnames";

const ComponentsCarousel = () => {
    const cardsData: IComponentsCarouselCard[] = [
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
        {
            title: 'Название элемента',
            img: img,
            size: 'Размер элемента',
            weight: 'Вес элемента'
        },
    ]

    const [position, setPosition] = useState<number>(0)
    const [cardWidth, setCardWidth] = useState<number>(100)
    const [visibleCardsCount, setVisibleCardsCount] = useState<number>(4)
    const [buttonPrevActive, setButtonPrevActive] = useState<boolean>(false)
    const [buttonNextActive, setButtonNextActive] = useState<boolean>(false)

    useEffect(() => {
        setCardWidth(100 / visibleCardsCount)
    })

    useEffect(() => {
        position > 0 ? setButtonPrevActive(true) : setButtonPrevActive(false)
        position < (cardsData.length - visibleCardsCount) ? setButtonNextActive(true) : setButtonNextActive(false)
    }, [position, buttonPrevActive, buttonNextActive])

    const cardsRender = (cardsData: IComponentsCarouselCard[]) => {
        return cardsData.map((el, id) => <ComponentsCarouselCard cardWidth={cardWidth} cardData={el}/>)
    }

    const markersRender = (cardsData: IComponentsCarouselCard[]) => {
        return cardsData.map((el, id) => (id < cardsData.length - visibleCardsCount + 1) && <ComponentsCarouselMarker id={id} setPosition={setPosition} activeStatus={position === id}/> )
    }

    const handleNext = () => {
        position < (cardsData.length - visibleCardsCount) && setPosition(position+1)
    }

    const handlePrev = () => {
        position > 0 && setPosition(position-1)
    }

    const buttonNextClassName = classNames([s.button as string], [s.next as string], {
        [s.disable as string]: !buttonNextActive
    })

    const buttonPrevClassName = classNames([s.button as string], [s.prev as string], {
        [s.disable as string]: !buttonPrevActive
    })

    const timer = setInterval(() => {
        position < (cardsData.length - visibleCardsCount) ? setPosition(position+1) : setPosition(0)
    }, 1000)

    const carouselAutoScroller = () => {

    }

    useEffect(() => {

    }, [null])

    // useEffect(() => {
    //     setTimeout(() => {
    //         position < (cardsData.length - visibleCardsCount) ? setPosition(position+1) : setPosition(0)
    //     }, 1000)
    // }, [position])

    return (
        <div className={s.carousel}>
            <div className={s.layout}>
                <button onClick={handlePrev} className={buttonPrevClassName}><Image src={arrow} alt={'Назад'}/></button>
                <div className={s.content}>
                    <div className={s.track} style={{transform: `translateX(-${position * cardWidth}%)`}}>
                        {cardsRender(cardsData)}
                    </div>
                </div>
                <button onClick={handleNext} className={buttonNextClassName}><Image src={arrow} alt={'Вперед'}/></button>
            </div>
            <div className={s.markers}>
                {markersRender(cardsData)}
            </div>
        </div>
    );
};

export default ComponentsCarousel;