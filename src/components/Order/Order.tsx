import React, {BaseSyntheticEvent, createRef, useEffect, useState} from 'react';
import s from './Order.module.scss';
import Image from "next/image";
import {IOrderProps} from "@/types/types";
import emailJs from '@emailjs/browser';
import classNames from "classnames";

import OrderNameInput from "@/components/Order/Order-name-input";
import OrderPhoneInput from "@/components/Order/Order-phone-input";
import SubmitWindow from "@/components/SubmitWindow/SubmitWindow";

import successImg from '@/public/SubmitWindow/success.svg';
import errorImg from '@/public/SubmitWindow/error.svg';
import image from '@/public/Order/image.png';
import loaderImg from '@/public/Order/loader.svg'

const Order = (props: IOrderProps) => {
    const [userName, setUserName] = useState<string>('');
    const [changedUserPhone, setChangedUserPhone] = useState<string>('+375 (__) ___-__-__');
    const [userOrderDescription, setUserOrderDescription] = useState<string>('');
    const [submitButtonStatus, setSubmitButtonStatus] = useState<boolean>(false);
    const [submitButtonLoad, setSubmitButtonLoad] = useState<boolean>(false);
    const [inputKey, setInputKey] = useState<number>(1);
    const [submitIsSuccess, setSubmitIsSuccess] = useState<boolean>(true);
    const [submitMessage, setSubmitMessage] = useState<string>('Запрос отправлен!')
    const [addSubmitMessage, setAddSubmitMessage] = useState<string>('Спасибо, что выбрали наш сервис :)')
    const [submitWindowOpen, setSubmitWindowOpen] = useState<boolean>(false)

    // Включение/отключение кнопки при выполнении/не выполнении проверки
    useEffect(() => {
        let regName = /^[a-zA-Zа-яёА-ЯЁ]{3,}\s?([a-zA-Zа-яёА-ЯЁ]{3,})*\s?([a-zA-Zа-яёА-ЯЁ]{3,})*$/;
        let regPhone = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        (regName.test(userName) && regPhone.test(changedUserPhone)) ? setSubmitButtonStatus(true) : setSubmitButtonStatus(false);
    }, [userName, changedUserPhone])

    const form = createRef<HTMLFormElement>();

    const sendEmail = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        setInputKey(inputKey === 1 ? 2 : 1)
        setChangedUserPhone('+375 (__) ___-__-__')
        setUserName('')
        setUserOrderDescription('')

        emailJs.sendForm('service_3h9i74t', 'template_2raobfu', form.current!, {publicKey: 'iRtzOZ-9E05qG4kZV'}).then(
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
        <div className={s.content + ' ' + s[props.page]}>
            <div className={'container' + ' ' + s.header_container}>
                <h2 className={s.title}>Заявка на расчет стоимости и сроков поставки:</h2>
            </div>
            <div className={s.form_part}>
                <div className={s.container + ' container'}>
                    <form className={s.form} ref={form} onSubmit={sendEmail}>
                        <div className={s.user_data_inputs}>
                            <OrderNameInput key={inputKey} userData={userName} setUserData={setUserName}
                                            name={'user_name'}/>
                            <OrderPhoneInput key={inputKey + 1} userData={changedUserPhone}
                                             setUserData={setChangedUserPhone} name={'user_phone'}/>
                        </div>
                        <div className={s.order_description_input}>
                            <label>
                                <p className={s.text}>Опишите ваш заказ:</p>
                                <textarea name={'user_description'} className={s.input} value={userOrderDescription}
                                          onChange={e => setUserOrderDescription(e.target.value)}/>
                            </label>
                        </div>
                        <button className={submitButtonClassName} disabled={!submitButtonStatus} type={'submit'}
                                onClick={() => setSubmitButtonLoad(true)}>
                            <div className={s.text} style={{opacity: `${!submitButtonLoad ? 1 : 0}`}}>
                                Отправить заявку
                            </div>
                            <div className={s.image} style={{opacity: `${submitButtonLoad ? 1 : 0}`}}>
                                <Image src={loaderImg} alt="Загрузка"/>
                            </div>
                        </button>
                    </form>
                    <div className={s.image}>
                        <Image src={image} alt={'Фото'}/>
                    </div>
                </div>
            </div>
            <SubmitWindow message={submitMessage} addMessage={addSubmitMessage} img={submitIsSuccess ? successImg : errorImg} isOpen={submitWindowOpen}/>
        </div>
    );
};


export default Order;

