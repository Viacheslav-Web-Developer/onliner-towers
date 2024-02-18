import React from 'react';
import s from './Kit.module.scss'
import Table from "@/components/Table/Table";
import {store} from "@/assets/store";
import Image from "next/image";

import img from '@/public/TowerKit/img.jpg';

const Kit = () => {
    return (
        <div className={s.container + ' container'}>
            <div className={s.content}>
                <h2 className={s.title}>{store.tower.thirdTable.title}</h2>
                <div className={s.info}>
                    <div className={s.table}>
                        <Table tableData={store.tower.thirdTable.tableData}/>
                    </div>
                    <div className={s.image}>
                        <Image src={img} alt={'Фото комплекта для установки на лестничный марш'}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Kit;