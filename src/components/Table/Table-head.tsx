import React from 'react';
import s from "@/components/Table/Table.module.scss";
import {ITableHead, ITableHeadProps} from "@/types/types";

const TableHead = (props: ITableHeadProps) => {
    const tableHeadRender = (tableHeadData: ITableHead) => {
        return tableHeadData.map((el, id) => <th scope={'col'} className={s.td + ' ' + s.th} key={id}>{el}</th>)
    }

    return (
        <thead className={s.head}>
            <tr className={s.tr}>{tableHeadRender(props.tableHeadData)}</tr>
        </thead>
    );
};

export default TableHead;