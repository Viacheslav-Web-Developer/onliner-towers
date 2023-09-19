import React from 'react';
import s from './page.module.scss';

import ScaffoldPage from "@/pages/ScaffoldPage/ScaffoldPage";

const Page = () => {
    return (
        <div className={s.content}>
            <ScaffoldPage/>
        </div>
    );
};

export default Page;