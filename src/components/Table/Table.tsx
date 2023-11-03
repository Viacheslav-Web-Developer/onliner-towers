import React from 'react';
import s from './Table.module.scss';
import {ITableBodyData, ITableHeadData, ITableProps} from "@/types/types";

const Table = (props: ITableProps) => {
    const tableHeadRender = (tableHeadData: ITableHeadData) => {
        return tableHeadData.map((tdData, id) => <td className={s.td} key={id}>{tdData}</td>)
    }

    const tableBodyRender = (tableBodyData: ITableBodyData) => {
        return tableBodyData.map((trData, trId) => <tr className={s.tr} key={trId}>{trData.map((tdData, tdId) => <td
            className={s.td} key={tdId}>{tdData}</td>)}</tr>)
    }

    return (
        <div className={s.layout}>
            <table className={s.table}>
                <thead className={s.head}>
                <tr className={s.tr}>{tableHeadRender(props.tableData.thead)}</tr>
                </thead>
                <tbody className={s.body}>
                {tableBodyRender(props.tableData.tbody)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;