import React, {useEffect, useState} from 'react';
import s from './Order.module.scss';
import Image from "next/image";

import image from '@/public/Order/image.png';
import {IOrderProps} from "@/types/types";
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

    return (
        <div className={s.content}>
            <div className={'container'}>
                <h2 className={s.title}>Оставьте заявку на расчет стоимости и сроков поставки:</h2>
            </div>
            <div className={s.form_part + ' ' + s[props.viewMode.page]}>
                <div className={s.container + ' container'}>
                    <div className={s.form}>
                        <div className={s.user_data_inputs}>
                            <OrderNameInput userData={userName} setUserData={setUserName}/>
                            <OrderPhoneInput userData={changedUserPhone} setUserData={setChangedUserPhone}/>
                        </div>
                        <div className={s.order_description_input}>
                            <label>
                                <p className={s.text}>Опишите ваш заказ:</p>
                                <textarea className={s.input} value={userOrderDescription}
                                          onChange={e => setUserOrderDescription(e.target.value)}/>
                            </label>
                        </div>
                        <button className={s.button} disabled={!submitButtonStatus}
                                onClick={() => alert('Отправка данных...')}>Отправить заявку
                        </button>
                    </div>
                    <div className={s.image}>
                        <Image src={image} alt={'Фото'}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;