import React from 'react';
import s from "@/components/Order/Order.module.scss";
import {IOrderInputsProps} from "@/types/types";

const OrderNameInput = (props: IOrderInputsProps) => {

    //Ограничение вида вводимых данных имени
    const inputUserName = (value: string) => {
        let regName = /^[a-zA-Zа-яёА-ЯЁ]*\s?[a-zA-Zа-яёА-ЯЁ]*\s?[a-zA-Zа-яёА-ЯЁ]*$/;
        regName.test(value) ? props.setUserData(value) : undefined;
    }

    return (
        <label>
            <p className={s.text}>Ваше имя:</p>
            <input type="text" name={'user_name'} className={s.input} value={props.userData} onChange={e => inputUserName(e.target.value)}/>
        </label>
    );
};

export default OrderNameInput;