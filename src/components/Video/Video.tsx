import React from 'react';
import s from './Video.module.scss';

import {IVideoProps} from "@/types/types";

const Video = (props: IVideoProps) => {
    return (
        <div className={'container'}>
            <div className={s.content}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.video_part}>
                    <iframe width="560" height="315" src={props.video}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Video;