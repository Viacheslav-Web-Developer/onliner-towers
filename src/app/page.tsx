import React from "react";
import s from './page.module.scss';
import Tower from "../pages/Tower/Tower";

const Home = () => {
    return (
        <div className={s.home}>
            <Tower/>
        </div>
    )
}

export default Home;
