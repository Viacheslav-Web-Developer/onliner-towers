import React, {BaseSyntheticEvent, useEffect, useState} from 'react';
import s from "@/components/Order/Order.module.scss";
import {IOrderInputsProps} from "@/types/types";

const OrderPhoneInput = (props: IOrderInputsProps) => {
    const [userPhone, setUserPhone] = useState<string>('')
    const [digits, setDigits] = useState<number[]>([])

    //Создать массив индексов для замены значений в строке шаблоне
    useEffect(() => {
        let digitsId = []
        let pos = -1;
        while ((pos = props.userData.indexOf('_', pos + 1)) != -1) {
            digitsId.push(pos)
        }
        setDigits(digitsId)
    }, [])

    //Заменить значения в индексах из digits значениями цифр введенного номера телефона
    useEffect(() => {
        let userPhoneArray = userPhone.split('')
        let localUserPhone = props.userData;
        digits.map((digit, id) => {
            localUserPhone = localUserPhone.substring(0, digit) + (userPhoneArray[id] ? userPhoneArray[id] : '_') + localUserPhone.substring(digit + 1)
        })
        props.setUserData(localUserPhone)
    }, [userPhone])

    //Показать шаблон +375 (__) ___-__-__
    const handleClick = (e: BaseSyntheticEvent) => {
        e.target.classList.add(s.show)
    }

    //Скрыть шаблон если ничего не введено
    const handleAbort = (e: BaseSyntheticEvent) => {
        !userPhone ? e.target.classList.remove(s.show) : undefined;
    }

    //Ограничение вида вводимых данных телефона
    const handleChange = (value: string) => {
        let quickInput = /^(\+?(375|80|8))?(-|\s)?(\()?((\d{2})|(0\d{2}))(\))?(-|\s)?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
        let regPhone = /^\d{0,9}$/;
        if (quickInput.test(value)) {
            let quickDigits = value.match(/\d/g);
            setUserPhone(quickDigits!.join('').slice(-9));
        }
        else {
            regPhone.test(value) ? setUserPhone(value) : undefined;
        }
    }

    return (
        <div>
            <label>
                <p className={s.text}>Ваш телефон:</p>
                <div className={s.phone_input}>
                    <input type="tel" name={'phone'} className={s.input} value={userPhone}
                           onChange={e => handleChange(e.target.value)} onClick={handleClick} onBlur={handleAbort}/>
                    <div className={s.phone_input_text}>{props.userData}</div>
                </div>
            </label>
        </div>
    );
};

export default OrderPhoneInput;