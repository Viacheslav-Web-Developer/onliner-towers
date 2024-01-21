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
    page: EPages,
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

export interface ITopBarCardsProps {
    image: StaticImageData,
    text: string
}

export interface ITopBarLinksProps {
    href: string,
    image: StaticImageData,
    text: string
}

export interface ITopBarCards {
    href?: string,
    image: StaticImageData,
    text: string
}


export interface INavLinksProps {
    page: EPages,
    component: string,
    navLinks: INavLinks[]
}

export interface INavLinksCardProps {
    component: string,
    navLinks: INavLinks
}

export interface INavLinks {
    page: EPages,
    title: string,
    titleMobile: string,
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
    description?: string,
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



export interface ITableProps {
    tableData: ITable
}

export interface ITable {

    thead?: ITableHead,
    tbody: ITableBody
}

export interface ITableHeadProps {
    tableHeadData: ITableHead
}

export interface ITableBodyProps {
    tableBodyData: ITableBody
}

export type ITableHead = string[];
export type ITableBody = string[][];


export interface IFaqProps {
    page: EPages,
    cardsData: IFaqCard[]
}

export interface IFaqCardProps {
    page: EPages,
    cardData: IFaqCard
}

export interface IFaqCard {
    question: string,
    answer: string
}


export interface IInstructionsProps {
    cardsData: IInstructions[]
}

export interface IInstructionsCardsProps {
    cardData: IInstructions,
    cardNumber: number
}

export interface IInstructions {
    text: string,
    image: StaticImageData,
    textAfterImage?: string
}


export interface IVideoProps {
    title: string,
    video: string
}


export interface IMoreQuestions {
    title: string,
    component: string
}


export interface IFooterProps {
    links: IHeaderLinks[],
    setModalOpen: Dispatch<SetStateAction<boolean>>
}


export interface IModalProps {
    modalIsOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}


export interface IStairsDescription {
    title: string,
    description: string[],
    table: ITable,
    image: StaticImageData,
}


export interface IStairsDescriptionCard {
    cardData: IStairsDescription,
    reverseRow: boolean
}


export interface IScaffoldingDescription {
    img: StaticImageData,
    title: string,
    listData: string[]
}


export interface IDocsCardProps {
    cardData: IDocsCards
}

export interface IDocsCards {
    docName: string,
    docUrl: string
}


export interface IScaffoldingPricesProps {
    pricesData: IScaffoldingPricesType[]
}

export interface IScaffoldingPricesTypeProps {
    typeData: IScaffoldingPricesType
}

export interface IScaffoldingPricesCardProps {
    cardData: IScaffoldingPricesCard
}

export interface IScaffoldingPricesType {
    typeTitle: string,
    pricesCards: IScaffoldingPricesCard[]
}

export interface IScaffoldingPricesCard {
    title: string,
    prices: string[]
}




export interface IComponentsCarouselCardProps {
    cardWidth: number,
    cardData: IComponentsCarouselCard
}

export interface IComponentsCarouselMarkerProps {
    id: number,
    setPosition: Dispatch<SetStateAction<number>>,
    activeStatus: boolean,
}

export interface IComponentsCarouselCard {
    title: string,
    img: StaticImageData,
    size: string,
    weight: string,
}



export interface ITowerTable extends ITableProps{
    title: string,
}




export interface BurgerMenuProps {
    mobileMenuIsOpen: boolean,
    setMobileMenuIsOpen: Dispatch<SetStateAction<boolean>>
}