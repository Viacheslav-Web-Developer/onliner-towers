import React from "react";
import s from './page.module.scss'
import MainScreen from "@/components/MainScreen/MainScreen";
import {EPages} from "@/types/types";
import Prices from "@/components/Prices/Prices";

const Home = () => {
    return (
        <div className={s.home}>
            <MainScreen viewMode={{'page': EPages.tower, 'component': 'main_screen'}}/>
            <Prices viewMode={{'page': EPages.tower, 'component': 'main_screen'}}/>
        </div>
    )
}

export default Home;
