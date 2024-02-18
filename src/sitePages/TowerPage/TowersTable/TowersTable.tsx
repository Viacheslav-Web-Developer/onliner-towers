import React from 'react';
import s from "./TowersTable.module.scss";

import Table from "@/components/Table/Table";
import {ITowerTable} from "@/types/types";

const TowersTable = (props: ITowerTable) => {
    return (
        <div className={s.container + ' container'}>
            <div className={s.table}>
                <h2 className={s.table_title}>{props.title}</h2>
                <div className={s.table_layout}>
                    <Table tableData={props.tableData}/>
                </div>
            </div>
        </div>
    );
};

export default TowersTable;