import React from 'react';
import s from './Prices.module.scss'
import PricesType from "../../ScaffoldingPage/Prices/Prices-type";
import {IScaffoldingPricesProps, IScaffoldingPricesType} from "@/types/types";

const Prices = (props: IScaffoldingPricesProps) => {
    const pricesRender = (pricesData: IScaffoldingPricesType[]) => {
        return pricesData.map((el, id) => <PricesType typeData={el} key={id}/>)
    }

    return (
        <div className={'container'}>
            <div className={s.content}>
                {pricesRender(props.pricesData)}
            </div>
            <div className={s.ps}>
                <p className={s.text}>* Минимальный срок аренды - 3 дня</p>
            </div>
        </div>
    );
};

export default Prices;