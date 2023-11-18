import React from 'react';
import s from './page.module.scss';

import TowerPage from "../../sitePages/TowerPage/TowerPage";

const Page = () => {
    return (
        <div className={s.content}>
            <TowerPage/>
        </div>
    );
};

export default Page;