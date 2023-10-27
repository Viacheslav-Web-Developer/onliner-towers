import React from 'react';
import {ITopBarLinksProps} from "@/types/types";
import Image from "next/image";


const TopBarLink = (props: ITopBarLinksProps) => {
    return (
        <a href={props.href}>
            <Image src={props.image} alt={'Icon'}/>
            <p>{props.text}</p>
        </a>
    );
};

export default TopBarLink;