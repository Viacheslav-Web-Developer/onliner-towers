import React from 'react';
import s from './Video.module.scss';

import {IVideoProps} from "@/types/types";

const Video = (props: IVideoProps) => {
    return (
        <div className={'container'}>
            <div className={s.content}>
                <div className={s.video_part}>

                    <iframe src={props.video}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}
                    ></iframe>
                </div>
                <h2 className={s.title}>{props.title}</h2>
            </div>
        </div>
    );
};

export default Video;