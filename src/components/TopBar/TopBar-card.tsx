import React from 'react';
import {ITopBarCardsProps} from "@/types/types";
import Image from "next/image";

const TopBarCard = (props: ITopBarCardsProps) => {
    return (
        <>
            <Image src={props.image} alt={'Icon'}/>
            <p>{props.text}</p>
        </>
    );
};

export default TopBarCard;