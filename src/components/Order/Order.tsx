import React from 'react';
import s from './Order.module.scss';
import Image from "next/image";

import image from '@/public/Order/image.png';

const Order = () => {
    return (
        <div className={s.content}>
            <div className={'container'}>
                <h2 className={s.title}>Оставьте заявку на расчет стоимости и сроков поставки:</h2>
            </div>
            <div className={s.form_part}>
                <div className={s.container + ' container'}>
                    <div className={s.form}>
                        <div className={s.user_data_inputs}>
                            <label>
                                <p className={s.text}>Введите имя:</p>
                                <input type="text" className={s.input}/>
                            </label>
                            <label>
                                <p className={s.text}>Введите телефон:</p>
                                <input type="text" className={s.input}/>
                            </label>
                        </div>
                        <div className={s.order_description_input}>
                            <label>
                                <p className={s.text}>Опишите ваш заказ:</p>
                                <textarea className={s.input}/>
                            </label>
                        </div>
                        <button className={s.button}>Отправить заявку</button>
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