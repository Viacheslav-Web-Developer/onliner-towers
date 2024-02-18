import React from 'react';
import s from './Docs.module.scss'
import {IDocsCards} from "@/types/types";
import {store} from "@/assets/store";

import DocsCard from "@/components/Docs/Docs-card";

const Docs = () => {
    const cardsRender = (cardsData: IDocsCards[]) => {
        return cardsData.map((el, id) => <DocsCard cardData={el} key={id}/>)
    }

    return (
        <div className={s.content}>
            <div className={s.title_part}>
                <div/>
                <h2 className={s.title}>Документация ЛРСП-40:</h2>
                <div/>
            </div>

            <div className={'container'}>
                <div className={s.docs_part}>
                    {cardsRender(store.scaffolding.docs)}
                </div>
            </div>
        </div>
    );
};

export default Docs;