import React from "react";
import s from './page.module.scss';
import TowerPage from "../sitePages/TowerPage/TowerPage";

const Home = () => {
    return (
        <div className={s.home}>
            <TowerPage/>
        </div>
    )
}

export default Home;
