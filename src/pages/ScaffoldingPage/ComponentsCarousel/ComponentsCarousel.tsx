import React, {useEffect, useState} from 'react';
import s from './ComponentsCarousel.module.scss'
import {IComponentsCarouselCard} from "@/types/types";
import ComponentsCarouselCard from "@/pages/ScaffoldingPage/ComponentsCarousel/ComponentsCarousel-card";
import ComponentsCarouselMarker from "@/pages/ScaffoldingPage/ComponentsCarousel/ComponentsCarousel-marker";

const ComponentsCarousel = () => {
    const cardsData: IComponentsCarouselCard[] = [
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
        {
            title: 'AAA',
            img: ''
        },
    ]

    const [position, setPosition] = useState<number>(0)
    const [cardWidth, setCardWidth] = useState<number>(100)
    const [visibleCardsCount, setVisibleCardsCount] = useState<number>(4)

    useEffect(() => {
        setCardWidth(100 / visibleCardsCount)
    })

    const cardsRender = (cardsData: IComponentsCarouselCard[]) => {
        return cardsData.map((el, id) => <ComponentsCarouselCard cardWidth={cardWidth} cardData={el}/>)
    }

    const markersRender = (cardsData: IComponentsCarouselCard[]) => {
        return cardsData.map((el, id) => (id < cardsData.length - visibleCardsCount + 1) && <ComponentsCarouselMarker id={id} setPosition={setPosition} activeStatus={position === id}/> )
    }
                <button onClick={handleNext} className={s.button + ' ' + s.next}>вперед</button>
            </div>
            <div className={s.markers}>
                {markersRender(cardsData)}
            </div>
        </div>
    );
};

export default ComponentsCarousel;