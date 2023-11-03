import React from 'react';
import s from './Description.module.scss';
import Image from "next/image";
import {IScaffoldingDescription} from "@/types/types";

const Description = (props: IScaffoldingDescription) => {

    const listDataRender = (listData: string[]) => {
        return listData.map((el, id) => <li className={s.item} key={id}>{el}</li>)
    }

    return (
        <div className={s.content + ' container'}>
            <div className={s.img_part}>
                <Image src={props.img} alt={'Изображение продукта'}/>
            </div>
            <div className={s.text_part}>
                <h2 className={s.title}>{props.title}</h2>
                <ul className={s.list}>
                    {listDataRender(props.listData)}
                </ul>
            </div>
        </div>
    );
};

export default Description;