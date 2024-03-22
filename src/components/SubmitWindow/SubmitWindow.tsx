import React from 'react';
import s from './SubmitWindow.module.scss';
import Image, {StaticImageData} from "next/image";
import classNames from "classnames";

interface SubmitWindowProps {
    message: string,
    addMessage: string,
    img: StaticImageData,
    isOpen: boolean
}

const SubmitWindow = (props: SubmitWindowProps) => {
    const contentClassName = classNames([s.content as string], {
        [s.close]: !props.isOpen
    })

    return (
        <div className={s.layout}>
            <div className={contentClassName}>
                <Image src={props.img} alt={'Подтверждение'}/>
                <div className={s.text_part}>
                    <h2 className={s.title}>{props.message}</h2>
                    <p className={s.text}>{props.addMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default SubmitWindow;