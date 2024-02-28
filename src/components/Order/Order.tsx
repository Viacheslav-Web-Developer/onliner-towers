import React, {BaseSyntheticEvent, createRef, useEffect, useState} from 'react';
import s from './Order.module.scss';
import Image from "next/image";
import image from '@/public/Order/image.png';
import {IOrderProps} from "@/types/types";
import emailJs from '@emailjs/browser';

import OrderNameInput from "@/components/Order/Order-name-input";
import OrderPhoneInput from "@/components/Order/Order-phone-input";

const Order = (props: IOrderProps) => {
    const [userName, setUserName] = useState<string>('');
    const [changedUserPhone, setChangedUserPhone] = useState<string>('+375 (__) ___-__-__')
    const [userOrderDescription, setUserOrderDescription] = useState<string>('');
    const [submitButtonStatus, setSubmitButtonStatus] = useState<boolean>(false)

    // Включение/отключение кнопки при выполнении/не выполнении проверки
    useEffect(() => {
        let regName = /^[a-zA-Zа-яёА-ЯЁ]{3,}\s?([a-zA-Zа-яёА-ЯЁ]{3,})*\s?([a-zA-Zа-яёА-ЯЁ]{3,})*$/;
        let regPhone = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        (regName.test(userName) && regPhone.test(changedUserPhone)) ? setSubmitButtonStatus(true) : setSubmitButtonStatus(false);
    }, [userName, changedUserPhone])

    const form = createRef<HTMLFormElement>();

    const sendEmail = (e: BaseSyntheticEvent) => {
        e.preventDefault();

        emailJs.sendForm('service_uqbbxzs', 'template_i683h0n', form.current!, {publicKey: '2MO8k-LlB9WezUuHW',}).then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className={s.content + ' ' + s[props.page]}>
            <div className={'container' + ' ' + s.header_container}>
                <h2 className={s.title}>Заявка на расчет стоимости и сроков поставки:</h2>
            </div>
            <div className={s.form_part} onSubmit={sendEmail}>
                <div className={s.container + ' container'}>
                    <form className={s.form} ref={form}>
                        <div className={s.user_data_inputs}>
                            <OrderNameInput userData={userName} setUserData={setUserName} name={'user_name'}/>
                            <OrderPhoneInput userData={changedUserPhone} setUserData={setChangedUserPhone} name={'user_phone'}/>
                        </div>
                        <div className={s.order_description_input}>
                            <label>
                                <p className={s.text}>Опишите ваш заказ:</p>
                                <textarea name={'user_description'} className={s.input} value={userOrderDescription}
                                          onChange={e => setUserOrderDescription(e.target.value)}/>
                            </label>
                        </div>
                        <button className={s.button} disabled={!submitButtonStatus} type={'submit'}>Отправить заявку</button>
                    </form>
                    <div className={s.image}>
                        <Image src={image} alt={'Фото'}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;