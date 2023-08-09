import React from "react";
import s from './page.module.scss'
import MainScreen from "@/components/MainScreen/MainScreen";

const Home = () => {
    return (
        <div className={s.home}>
            <MainScreen/>
        </div>
    )
}

export default Home;
