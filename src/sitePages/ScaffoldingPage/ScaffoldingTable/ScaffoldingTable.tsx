import React from 'react';
import s from "./ScaffoldingTable.module.scss";
import Table from "@/components/Table/Table";
import {IScaffoldingTable} from "@/types/types";

const ScaffoldingTable = (props: IScaffoldingTable) => {
    return (
        <div className={'container'}>
            <div className={s.table}>
                <h2 className={s.table_title}>{props.title}</h2>
                <div>
                      <Table tableData={props.tableData}/>
                </div>
            </div>
        </div>
    );
};

export default ScaffoldingTable;