import React from 'react';
import s from './page.module.scss';

import ScaffoldingPage from "../../sitePages/ScaffoldingPage/ScaffoldingPage";

const Page = () => {
    return (
        <div className={s.content}>
            <ScaffoldingPage/>
        </div>
    );
};

export default Page;