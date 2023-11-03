import React from 'react';
import s from './Description.module.scss';
import {IStairsDescription} from "@/types/types";
import {store} from "@/assets/store";

import DescriptionCard from "@/pages/StairsPage/components/Description/Description-card";

const Description = () => {
    const descriptionDataRender = (descriptionData: IStairsDescription[]) => {
        return descriptionData.map((el, id) => <DescriptionCard cardData={el} key={id} reverseRow={id % 2 === 0}/>)
    }

    return (
        <div className={s.content + ' container'}>
            {descriptionDataRender(store.stairs.description)}
        </div>
    );
};

export default Description;