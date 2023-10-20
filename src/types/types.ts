import {StaticImageData} from "next/image";
import {Dispatch, SetStateAction} from "react";

export const enum EPages {
    'tower' = 'tower',
    'scaffold' = 'scaffold',
    'scaffolding' = 'scaffolding',
    'stairs' = 'stairs'
}


export interface IViewModeProps {
    page: string,
    component: string
}


export interface IMainScreenProps {
    viewMode: IViewModeProps,
    headerData: IHeaderLinksData,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IMainScreenTitlesData {
    tower: IMainScreenTitles,
    scaffold: IMainScreenTitles,
    scaffolding: IMainScreenTitles,
    stairs: IMainScreenTitles,
}

export interface IMainScreenTitles {
    title: string
}



export interface IHeaderProps extends IViewModeProps {

}

export interface IHeaderLinksData {
    tower: IHeaderLinks[],
    scaffold: IHeaderLinks[],
    scaffolding: IHeaderLinks[],
    stairs: IHeaderLinks[],
}

export interface IHeaderLinks {
    text: string,
    url: string,
}



export interface INavLinksProps extends IViewModeProps {

}

export interface INavLinksCardProps {
    page: EPages,
    title: string,
    image: StaticImageData,
    linkHref: string
}



export interface IPricesProps {
    viewMode: IViewModeProps,
    cardsData: IPricesCardProps[],
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IPricesCardProps {
    title: string,
    description: string,
    image: StaticImageData,
    prices: IPricesCardPricesData[],
}

export interface IPricesCardPricesData {
    title: string,
    pricesValue: JSX.Element[],
}

export interface IPricesCardButtonProps {
    buttonClassName: string,
    onClickFunc: () => void,
    currentItem: number,
    itemsNumber: number
}



export interface IBenefitsProps {
    viewMode: IViewModeProps,
}

export interface IBenefitsCardProps {
    image: StaticImageData,
    title: string,
    text: string
}



export interface IOrderProps {
    viewMode: IViewModeProps,
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
    viewMode: IViewModeProps,
    linksData: IHeaderLinksData,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}



export interface IModalProps {
    modalIsOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}