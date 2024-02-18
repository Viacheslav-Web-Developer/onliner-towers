import React from 'react';
import s from './Table.module.scss';
import {ITableProps} from "@/types/types";

import TableHead from "@/components/Table/Table-head";
import TableBody from "@/components/Table/Table-body";

const Table = (props: ITableProps) => {
    return (
        <div className={s.layout}>
            <table className={s.table}>
                {props.tableData.thead && <TableHead tableHeadData={props.tableData.thead}/>}
                <TableBody tableBodyData={props.tableData.tbody}/>
            </table>
        </div>
    );
};

export default Table;