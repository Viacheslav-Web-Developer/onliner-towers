import React from 'react';
import s from './ComponentsCarousel-marker.module.scss';
import {IComponentsCarouselMarkerProps} from "@/types/types";
import classNames from "classnames";

const ComponentsCarouselMarker = (props: IComponentsCarouselMarkerProps) => {
    const className = classNames([s.marker as string], {
        [s.active as string]: props.activeStatus
    })

    return (
        <button className={s.button} onClick={() => props.setPosition(props.id)}>
            <div className={className}></div>
        </button>
    );
};

export default ComponentsCarouselMarker;