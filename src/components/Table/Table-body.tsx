import React from 'react';
import s from './Table.module.scss'
import {ITableBody, ITableBodyProps} from "@/types/types";

const TableBody = (props: ITableBodyProps) => {
    const tableBodyRowsRender = (tableBodyData: ITableBody) => {
        return tableBodyData.map((el, id) => <tr className={s.tr} key={id}>{tableBodyCellSRender(el)}</tr>)
    }

    const tableBodyCellSRender = (tableBodyRowData: string[]) => {
        return tableBodyRowData.map((el, id) => {
            return(id > 0 ? <td className={s.td} key={id}>{el}</td> : <th className={s.td + ' ' + s.th} key={id}>{el}</th>)
        })
    }

    return (
        <tbody className={s.body}>
        {tableBodyRowsRender(props.tableBodyData)}
        </tbody>
    );
};

export default TableBody;