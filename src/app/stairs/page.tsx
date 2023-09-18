import React from 'react';
import s from './page.module.scss';

import Stair from "@/pages/Stairs/Stair";

const Page = () => {
    return (
        <div className={s.content}>
            <Stair/>
        </div>
    );
};

export default Page;