import React from 'react';
import s from './page.module.scss';

import StairsPage from "../../sitePages/StairsPage/StairsPage";

const Page = () => {
    return (
        <div className={s.content}>
            <StairsPage/>
        </div>
    );
};

export default Page;