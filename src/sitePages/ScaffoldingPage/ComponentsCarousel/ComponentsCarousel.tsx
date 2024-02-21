import React, {useEffect, useState} from 'react';
import s from './ComponentsCarousel.module.scss'
import {IComponentsCarouselCard} from "@/types/types";

import ComponentsCarouselCard from "../../ScaffoldingPage/ComponentsCarousel/ComponentsCarousel-card";
import ComponentsCarouselMarker from "../../ScaffoldingPage/ComponentsCarousel/ComponentsCarousel-marker";

import templateImg from '@/public/ScaffoldingCarousel/templateImg.png'
import arrow from '@/public/ScaffoldingCarousel/arrow.svg'
import Image from "next/image";
import classNames from "classnames";

import frame_without_ladder from '@/public/ScaffoldingCarousel/frame_without_ladder.png';
import frame_with_ladder from '@/public/ScaffoldingCarousel/frame_with_ladder.png'
import horizontal_screed from '@/public/ScaffoldingCarousel/horizontal_screed.png'
import diagonal_screed from '@/public/ScaffoldingCarousel/diagonal_screed.png'
import shoe from '@/public/ScaffoldingCarousel/shoe.png';
import mounting_bracket from '@/public/ScaffoldingCarousel/mounting_bracket.png'
import rigel from '@/public/ScaffoldingCarousel/rigel.png'
import wooden_flooring from '@/public/ScaffoldingCarousel/wooden_flooring.png'

const ComponentsCarousel = () => {
    const cardsData: IComponentsCarouselCard[] = [
        {
            title: 'Рама без лестницы',
            img: frame_without_ladder,
            size: '1060*2000',
            weight: '7,4'
        },
        {
            title: 'Рама с лестницей',
            img: frame_with_ladder,
            size: '1060*2000',
            weight: '9,4'
        },
        {
            title: 'Горизонтальная стяжка',
            img: horizontal_screed,
            size: '3050',
            weight: '1,7'
        },
        {
            title: 'Диагональная стяжка',
            img: diagonal_screed,
            size: '3300',
            weight: '3,65'
        },
        {
            title: 'Башмак',
            img: shoe,
            size: '100*100*160',
            weight: '0,41'
        },
        {
            title: 'Кронштейн крепления',
            img: mounting_bracket,
            size: '300-600',
            weight: '0,42'
        },
        {
            title: 'Ригель',
            img: rigel,
            size: '3060',
            weight: '6,5'
        },
        {
            title: 'Настил деревянный',
            img: wooden_flooring,
            size: '1000*1000',
            weight: '20'
        },
    ]

    const [cardWidth, setCardWidth] = useState<number>(100)
    const [visibleCardsCount, setVisibleCardsCount] = useState<number>(4)

    const [position, setPosition] = useState<number>(0)

    const [slideShowIsPaused, setSlideShowIsPaused] = useState<boolean>(false)

    // Рассчитать колличество карточек
    useEffect(() => {
        let screenWidth = window.innerWidth;

        switch (true) {
            case (screenWidth < 576):
                setVisibleCardsCount(1)
                break;

            case (screenWidth >= 576 && screenWidth < 768):
                setVisibleCardsCount(2)
                break;

            case (screenWidth >= 768 && screenWidth < 992):
                setVisibleCardsCount(3)
                break;

            case (screenWidth >= 992 && screenWidth < 1200):
                setVisibleCardsCount(3)
                break;

            default:
                setVisibleCardsCount(4)
                break;
        }
    })

    // Рассчитать ширину карточки
    useEffect(() => {
        setCardWidth(100 / visibleCardsCount)
    })

    // Цикличность скроллинга
    useEffect(() => {
        position < 0 && setPosition(cardsData.length - visibleCardsCount)
        position === (cardsData.length - visibleCardsCount + 1) && setPosition(0)
    }, [position])

    // Авто-прокручивание карусели
    useEffect(() => {
        const timer = setTimeout(carouselAutoScrollerLogic, 5000); // 5 секунд

        return () => clearTimeout(timer);
    }, [position, slideShowIsPaused])

    const carouselAutoScrollerLogic = () => {
        !slideShowIsPaused && setPosition(position + 1)
    }

    // Рендеринг карточек карусели
    const cardsRender = (cardsData: IComponentsCarouselCard[]) => {
        return cardsData.map((el, id) => <ComponentsCarouselCard cardWidth={cardWidth} cardData={el} key={id}/>)
    }

    // Рендеринг маркеров
    const markersRender = (cardsData: IComponentsCarouselCard[]) => {
        return cardsData.map((el, id) =>
            (id < cardsData.length - visibleCardsCount + 1) &&
			<ComponentsCarouselMarker id={id} setPosition={(position: number) => {
                setSlideShowIsPaused(true)
                setPosition(position)
            }} activeStatus={position === id} key={id}/>)
    }

    const handleNext = () => {
        setSlideShowIsPaused(true)
        setPosition(position + 1)
    }

    const handlePrev = () => {
        setSlideShowIsPaused(true)
        setPosition(position - 1)
    }

    return (
        <div className={s.carousel + ' container'} onMouseEnter={() => setSlideShowIsPaused(true)} onMouseLeave={() => setSlideShowIsPaused(false)}>
            <h2 className={s.title}>Комплектация:</h2>
            <div className={s.layout}>
                <button onClick={handlePrev} className={classNames([s.button as string], [s.prev as string])}><Image
                    src={arrow} alt={'Назад'}/></button>
                <div className={s.content}>
                    <div className={s.track} style={{transform: `translateX(-${position * cardWidth}%)`}}>
                        {cardsRender(cardsData)}
                    </div>
                </div>
                <button onClick={handleNext} className={classNames([s.button as string], [s.next as string])}><Image
                    src={arrow} alt={'Вперед'}/>
                </button>
            </div>
            <div className={s.markers}>
                {markersRender(cardsData)}
            </div>
        </div>
    );
};

export default ComponentsCarousel;