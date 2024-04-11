import React, {BaseSyntheticEvent, createRef, useEffect, useState} from 'react';
import s from './MoreQuestions.module.scss'
import {IMoreQuestions} from "@/types/types";
import classNames from "classnames";
import successImg from "@/public/SubmitWindow/success.svg";
import errorImg from "@/public/SubmitWindow/error.svg";
import loaderImg from "@/public/Order/loader.svg";
import Image from "next/image";
import emailJs from '@emailjs/browser';

import SubmitWindow from "@/components/SubmitWindow/SubmitWindow";


const MoreQuestions = (props: IMoreQuestions) => {
    const [changedUserPhone, setChangedUserPhone] = useState<string>('+375 (__) ___-__-__')
    const [userPhone, setUserPhone] = useState<string>('')
    const [digits, setDigits] = useState<number[]>([])
    const [handleStatus, setHandleStatus] = useState<boolean>(false)

    const [submitButtonStatus, setSubmitButtonStatus] = useState<boolean>(false);
    const [submitButtonLoad, setSubmitButtonLoad] = useState<boolean>(false);
    const [submitIsSuccess, setSubmitIsSuccess] = useState<boolean>(true);
    const [submitMessage, setSubmitMessage] = useState<string>('Запрос отправлен!')
    const [addSubmitMessage, setAddSubmitMessage] = useState<string>('Спасибо, что выбрали наш сервис :)')
    const [submitWindowOpen, setSubmitWindowOpen] = useState<boolean>(false)
    const [indexCreatorTrigger, setIndexCreatorTrigger] = useState<boolean>(false)

    //Создать массив индексов для замены значений в строке шаблоне
    useEffect(() => {
        let digitsId = []
        let pos = -1;
        while ((pos = changedUserPhone.indexOf('_', pos + 1)) != -1) {
            digitsId.push(pos)
        }
        setDigits(digitsId)
    }, [indexCreatorTrigger])

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
        } else {
            regPhone.test(value) ? setUserPhone(value) : undefined;
        }
    }

    useEffect(() => {
        let regPhone = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        (regPhone.test(changedUserPhone)) ? setSubmitButtonStatus(true) : setSubmitButtonStatus(false);
    }, [changedUserPhone])

    const phoneInputClassName = classNames([s.phone_input as string], {
            [s.handle_in as string]: handleStatus,
        })

    const form = createRef<HTMLFormElement>();

    const sendEmail = (e: BaseSyntheticEvent) => {
        setSubmitButtonLoad(true)
        e.preventDefault();

        setUserPhone('');
        setDigits([]);
        setChangedUserPhone('+375 (__) ___-__-__');
        setIndexCreatorTrigger(!indexCreatorTrigger);

        emailJs.sendForm('service_3h9i74t', 'template_6xyfgmh', form.current!, {publicKey: 'iRtzOZ-9E05qG4kZV'}).then(
            () => {
                console.log('SUCCESS!');
                setSubmitButtonLoad(false);
                setSubmitIsSuccess(true);
                setSubmitMessage('Успешно!');
                setAddSubmitMessage('Спасибо, что выбрали наш сервис :)');
                setSubmitWindowOpen(true);
                const timer = setTimeout(() => setSubmitWindowOpen(false), 3000);
            },
            (error) => {
                console.log('FAILED...', error.text);
                setSubmitButtonLoad(false);
                setSubmitIsSuccess(false);
                setSubmitMessage('Кажется возникла какая-то ошибка...');
                setAddSubmitMessage('Приносим наши извенения :(');
                setSubmitWindowOpen(true);
                const timer = setTimeout(() => setSubmitWindowOpen(false), 3000);
            },
        );
    };

    const submitButtonClassName = classNames([s.button as string], {
        [s.disable as string]: !submitButtonStatus,
    })

    return (
        <div className={s.layout + ' ' + s[props.component]}>
            <SubmitWindow message={submitMessage} addMessage={addSubmitMessage} img={submitIsSuccess ? successImg : errorImg} isOpen={submitWindowOpen}/>
            <div className={s.content}>
                <h2 className={s.title}>{props.title}</h2>
                <p className={s.text}>Оставьте заявку, мы перезвоним и с удовольствием ответим на все интересующие
                    вопросы.</p>
                <form className={s.form} ref={form}>
                    <div className={phoneInputClassName}>
                        <input type="tel" name={'user_phone'} className={s.input} value={userPhone}
                               onChange={e => handleChange(e.target.value)} onClick={handleClick} onBlur={handleAbort}/>
                        <div className={s.phone_input_text}>{changedUserPhone}</div>
                    </div>
                    <button className={submitButtonClassName} onClick={sendEmail} disabled={!submitButtonStatus}>
                        <div className={s.text} style={{opacity: `${!submitButtonLoad ? 1 : 0}`}}>
                            Заказать звонок
                        </div>
                        <div className={s.image} style={{opacity: `${submitButtonLoad ? 1 : 0}`}}>
                            <Image src={loaderImg} alt="Загрузка"/>
                        </div>
                    </button>
                </form>
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