import React from 'react';
import classNames from "classnames";
import s from "@/components/Prices/Prices-card-button.module.scss";

import imgButton from "@/public/Prices/button.svg";
import imgButtonHover from "@/public/Prices/button_hover.svg";

import {IPricesCardButtonProps} from "@/types/types";
import Image from "next/image";

const PricesCardButton = (props: IPricesCardButtonProps) => {
    const disableButton = (): boolean => {
        return props.buttonClassName === 'prev_button' && props.currentItem === 0 || props.buttonClassName === 'next_button' && props.currentItem === props.itemsNumber - 1
    }

    const buttonClassName = classNames([s.prices_button as string], [s[props.buttonClassName] as string], {
        [s.disable as string]: disableButton()
    });

    return (
        <button className={buttonClassName} onClick={props.onClickFunc} disabled={disableButton()}>
            <div className={s.arrow_image}>
                <div className={s.arrow}>
                    <Image src={imgButton} alt={'Предыдущий'}/>
                </div>
                <div className={s.arrow_hover}>
                    <Image src={imgButtonHover} alt={'Предыдущий'}/>
                </div>
            </div>
        </button>
    );
};

export default PricesCardButton;


