import React from 'react';
import s from './Video.module.scss';

import {IVideoProps} from "@/types/types";

const Video = (props: IVideoProps) => {
    return (
        <div className={'container'}>
            <div className={s.content}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.video_part}>

                    <iframe src={props.video}
                            allowFullScreen="allowfullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Video;