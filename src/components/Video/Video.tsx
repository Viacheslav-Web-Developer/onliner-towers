import React from 'react';
import s from './Video.module.scss';

import {IVideoProps} from "@/types/types";

const Video = (props: {videoData: IVideoProps}) => {


    return (
        <div className={'container'}>
            <div className={s.content}>
                <h2 className={s.title}>{props.videoData.title}</h2>
                <div className={s.video_part}>
                    video
                </div>
            </div>
        </div>
    );
};

export default Video;