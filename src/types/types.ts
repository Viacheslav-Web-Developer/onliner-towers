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



export interface IMainScreenProps extends IViewModeProps{

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



export interface IHeaderProps extends IViewModeProps{

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



export interface INavLinksProps extends IViewModeProps{

}

export interface INavLinksCardProps {
    page: EPages,
    title: string,
    image: StaticImageData,
    linkHref: string
}



export interface IPricesCardProps {
    title: string,
    description: string,
    image: StaticImageData,
    prices: IPricesCardPricesData[],
    clickFunc: Dispatch<SetStateAction<boolean>>
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



export interface IBenefitsCardProps {
    image: StaticImageData,
    title: string,
    text: string
}



export type ITableHeadData = string[];
export type ITableBodyData = string[][];

export interface ITableData {
    thead: ITableHeadData,
    tbody: ITableBodyData
}