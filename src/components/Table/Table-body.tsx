import React from 'react';
import s from './Table.module.scss'
import {ITableBody, ITableBodyProps} from "@/types/types";

const TableBody = (props: ITableBodyProps) => {
    const tableBodyRender = (tableBodyData: ITableBody) => {
        return tableBodyData.map((trData, trId) => <tr className={s.tr} key={trId}>{trData.map((tdData, tdId) => <td
            className={s.td} key={tdId}>{tdData}</td>)}</tr>)
    }

    return (
        <tbody className={s.body}>
        {tableBodyRender(props.tableBodyData)}
        </tbody>
    );
};

export default TableBody;