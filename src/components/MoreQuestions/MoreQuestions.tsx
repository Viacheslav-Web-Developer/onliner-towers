import React, {BaseSyntheticEvent, useEffect, useState} from 'react';
import s from './MoreQuestions.module.scss'
import {IMoreQuestions} from "@/types/types";
import classNames from "classnames";

const MoreQuestions = (props: IMoreQuestions) => {
    const [changedUserPhone, setChangedUserPhone] = useState<string>('+375 (__) ___-__-__')
    const [userPhone, setUserPhone] = useState<string>('')
    const [digits, setDigits] = useState<number[]>([])
    const [handleStatus, setHandleStatus] = useState<boolean>(false)

    //Создать массив индексов для замены значений в строке шаблоне
    useEffect(() => {
        let digitsId = []
        let pos = -1;
        while ((pos = changedUserPhone.indexOf('_', pos + 1)) != -1) {
            digitsId.push(pos)
        }
        setDigits(digitsId)
    }, [])

    //Заменить значения в индексах из digits значениями цифр введенного номера телефона
    useEffect(() => {
        let userPhoneArray = userPhone.split('')
        let localUserPhone = changedUserPhone;
        digits.map((digit, id) => {
            localUserPhone = localUserPhone.substring(0, digit) + (userPhoneArray[id] ? userPhoneArray[id] : '_') + localUserPhone.substring(digit + 1)
        })
        setChangedUserPhone(localUserPhone)
    }, [userPhone])

    //Показать шаблон +375 (__) ___-__-__
    const handleClick = () => {
        setHandleStatus(true)
    }

    //Скрыть шаблон если ничего не введено
    const handleAbort = () => {
        !userPhone && setHandleStatus(false);
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

    const phoneInputClassName = classNames(
        [s.phone_input as string],
        {
            [s.handle_in as string]: handleStatus,
        }
    )

    return (
        <div className={s.layout + ' ' + s[props.component]}>
            <div className={s.content}>
                <h2 className={s.title}>{props.title}</h2>
                <p className={s.text}>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие вопросы.</p>
                <div className={s.form}>
                    <div className={phoneInputClassName}>
                        <input type="tel" name={'phone'} className={s.input} value={userPhone}
                               onChange={e => handleChange(e.target.value)} onClick={handleClick} onBlur={handleAbort}/>
                        <div className={s.phone_input_text}>{changedUserPhone}</div>
                    </div>
                    <button className={s.button}>Заказать звонок</button>
                </div>
                <div className={s.hor_line}/>
                <p className={s.text}>Или позвоните нам прямо сейчас:</p>
                <div className={s.form}>
                    <a href={'tel:+375339161619'} className={s.call_button}>+375 (33) 916 16 19</a>
                </div>
            </div>
        </div>
    );
};

export default MoreQuestions;