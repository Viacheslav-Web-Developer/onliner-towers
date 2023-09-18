import React from 'react';
import s from './page.module.scss';

import Tower from "../../pages/Tower/Tower";

const Page = () => {
    return (
        <div className={s.content}>
            <Tower/>
        </div>
    );
};

export default Page;