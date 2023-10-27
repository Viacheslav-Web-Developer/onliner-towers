import {StaticImageData} from "next/image";
import {Dispatch, SetStateAction} from "react";

export const enum EPages {
    'tower' = 'tower',
    'scaffold' = 'scaffold',
    'scaffolding' = 'scaffolding',
    'stairs' = 'stairs'
}



export interface IMainScreenProps {
    title: string,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    page: EPages,
    headerLinks: IHeaderLinks[],
    topBarCards: ITopBarCards[],
    navLinks: INavLinks[]
}



export interface IHeaderProps {
    links: IHeaderLinks[],
}

export interface IHeaderLinksProps extends IHeaderLinks {

}

export interface IHeaderLinks {
    text: string,
    url: string,
}



export interface ITopBarProps {
    cards: ITopBarCards[]
}

export interface ITopBarCards {
    href?: string,
    image: StaticImageData,
    text: string
}

export interface ITopBarCardsProps {
    image: StaticImageData,
    text: string
}

export interface ITopBarLinksProps {
    href: string,
    image: StaticImageData,
    text: string
}




export interface INavLinksProps{
    page: EPages,
    component: string,
    navLinks: INavLinks[]
}

export interface INavLinksCardProps {
    component: string,
    navLinks: INavLinks
}

export interface INavLinks{
    page: EPages,
    title: string,
    image: StaticImageData,
    linkHref: string
}



export interface IPricesProps {
    page: EPages,
    cardsData: IPricesCard[],
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IPricesCardProps {
    setModalOpen: () => void,
    cardData: IPricesCard
}

export interface IPricesCard {
    title: string,
    description: string,
    image: StaticImageData,
    prices: IPricesCardPrices[],
}

export interface IPricesCardPrices {
    title: string,
    pricesValue: JSX.Element[],
}

export interface IPricesCarouselProps {
    prices: IPricesCardPrices[],
}

export interface IPricesCardButtonProps {
    buttonClassName: string,
    onClickFunc: () => void,
    currentItem: number,
    itemsNumber: number
}



export interface IBenefitsProps {
    cardsData: IBenefitsCardProps[],
    page: EPages
}

export interface IBenefitsCardProps {
    image: StaticImageData,
    title: string,
    text: string
}



export interface IOrderProps {
    page: EPages
}

export interface IOrderInputsProps {
    userData: string,
    setUserData: Dispatch<SetStateAction<string>>
}



export type ITableHeadData = string[];
export type ITableBodyData = string[][];

export interface ITableData {
    thead: ITableHeadData,
    tbody: ITableBodyData
}



export interface IFaqCardsData {
    answer: string,
    question: string
}



export interface IInstructionsData {
    text: string,
    image: StaticImageData,
    textAfterImage?: string
}



export interface IVideoProps {
    title: string,
    video: string
}



export interface IFooterProps {
    linksData: IHeaderLinksData,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}



export interface IModalProps {
    modalIsOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}



export interface IStairsPageDescriptionData {
    title: string,
    description: string[],
    table: ITableData,
    image: StaticImageData,
}

export interface IScaffoldingPageDescriptionData {
    img: StaticImageData,
    title: string,
    listData: string[]
}