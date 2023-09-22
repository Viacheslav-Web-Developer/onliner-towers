import React from 'react';
import s from './Footer.module.scss';
import Image from "next/image";

import {IFooterProps, IHeaderLinks} from "@/types/types";

import phone from '@/public/Footer/phone.svg';
import mail from '@/public/Footer/mail.svg';
import map from '@/public/Footer/map.svg';

const Footer = (props: IFooterProps) => {

    const linksRender = (linksData: IHeaderLinks[]) => {
        return linksData.map((el, id) => <li className={s.links_item} key={id}><a href={el.url}>{el.text}</a></li>)
    }

    return (
        <div className={s.layout}>
            <div className={'container'}>
                <div className={s.content}>
                    <div className={s.contacts_part + ' ' + s.part}>
                        <h2 className={s.title}>Контакты</h2>
                        <div className={s.information_section}>
                            <div className={s.item}>
                                <div className={s.item_content}>
                                    <div className={s.title_part}>
                                        <Image src={phone} alt={'Icon'}/>
                                        <span className={s.item_title}>Телефон:</span>
                                    </div>
                                    <a href={'#'} className={s.text}>+375 33 916 16 19</a>
                                </div>
                                <p className={s.ps}>Предварительно ОБЯЗАТЕЛЬНО звонить!</p>
                            </div>
                            <div className={s.item}>
                                <div className={s.item_content}>
                                    <div className={s.title_part}>
                                        <Image src={map} alt={'Icon'}/>
                                        <span className={s.item_title}>Адрес:</span>
                                    </div>
                                    <span className={s.text}>д. Лесковка, улица Центральная, 6а (только яндекс навигатор, другие навигаторы не показывают этот адрес)</span>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.item_content}>
                                    <div className={s.title_part}>
                                        <Image src={mail} alt={'Icon'}/>
                                        <span className={s.item_title}>E-mail:</span>
                                    </div>
                                    <a href={'#'} className={s.text}>gradovichnicolay@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.links_part + ' ' + s.part}>
                        <ul className={s.links_list}>
                            {linksRender(props.linksData[props.viewMode.page])}
                        </ul>
                    </div>
                    <div className={s.button_part + ' ' + s.part}>
                        <button className={s.button} onClick={() => props.setModalOpen(true)}>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;