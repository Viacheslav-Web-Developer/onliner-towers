import React from 'react';
import s from './Description.module.scss';
import Image from "next/image";
import {IScaffoldingPageDescriptionData} from "@/types/types";

const Description = (props: {descriptionData: IScaffoldingPageDescriptionData}) => {

    const listDataRender = (listData: string[]) => {
        return listData.map((el, id) => <li className={s.item} key={id}>{el}</li>)
    }

    return (
        <div className={s.content + ' container'}>
            <div className={s.img_part}>
                <Image src={props.descriptionData.img} alt={'Изображение продукта'}/>
            </div>
            <div className={s.text_part}>
                <h2 className={s.title}>{props.descriptionData.title}</h2>
                <ul className={s.list}>
                    {listDataRender(props.descriptionData.listData)}
                </ul>
            </div>
        </div>
    );
};

export default Description;