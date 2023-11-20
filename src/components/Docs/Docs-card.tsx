import React from 'react';
import s from './Docs-card.module.scss';
import {IDocsCardProps} from "@/types/types";
import Image from "next/image";

import docIcon from '@/public/Docs/docIcon.svg';
import Link from "next/link";

const DocsCard = (props: IDocsCardProps) => {
    return (
        <Link href={props.cardData.docUrl} className={s.card}>
            <Image src={docIcon} alt={'Иконка документа'}/>
            <p className={s.text}>{props.cardData.docName}</p>
        </Link>
    );
};

export default DocsCard;