import React from 'react';
import s from './Docs-card.module.scss';
import {IDocsCardProps} from "@/types/types";
import Image from "next/image";

import docIcon from '@/public/Docs/docIcon.svg';

const DocsCard = (props: IDocsCardProps) => {
    return (
        <div className={s.card}>
            <Image src={docIcon} alt={'Иконка документа'}/>
            <p className={s.text}>{props.cardData.docName}</p>
        </div>
    );
};

export default DocsCard;