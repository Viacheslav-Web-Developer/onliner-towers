import React from 'react';
import s from './Specifications.module.scss';
import Image from "next/image";
import {ITable} from "@/types/types";

import Table from "@/components/Table/Table";

import scaffoldImage from '@/public/ScaffoldSpecifications/image.png'

const Specifications = () => {
    const tableData: ITable = {
        tbody: [
            ['Длина, мм','1710'],
            ['Ширина, мм','550'],
            ['Высота, мм','1800'],
            ['Допустимая нагрузка, кг','200'],
            ['Max. высота рабочей площадки','1260/1620'],
            ['Min. высота рабочей площадки','180'],
            ['Вес, кг','35'],
        ]
    }

    return (
        <>
            <div className={s.title_part}>
                <div/>
                <h2 className={s.title}>Технические характеристики и стоимость</h2>
                <div/>
            </div>
            <div className={'container'}>
                <div className={s.content}>
                    <h3 className={s.table_title + ' ' + s.mobile}>Технические характеристики помоста ПМ-200</h3>
                    <div className={s.image_part}>
                        <Image src={scaffoldImage} alt={'Помост ПМ-200'}/>
                    </div>
                    <div className={s.table_part}>
                        <h3 className={s.table_title}>Технические характеристики помоста ПМ-200</h3>
                        <div className={s.layout}>
                            <Table tableData={tableData}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Specifications;