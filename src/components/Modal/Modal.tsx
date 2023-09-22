import React from 'react';
import s from './Modal.module.scss';
import MoreQuestions from "@/components/MoreQuestions/MoreQuestions";
import {IModalProps} from "@/types/types";
import classNames from "classnames";

const Modal = (props: IModalProps) => {
    const layoutClassName = classNames([s.layout as string], {
        [s.open as string]: props.modalIsOpen
    })

    return (
        <div className={layoutClassName}>
            <div className={s.content}>
                <MoreQuestions title={'Обратный звонок'} component={'modal'}/>
                <button className={s.button_close} onClick={() => props.setModalOpen(false)}>
                    <div/>
                    <div/>
                </button>
            </div>
        </div>
    );
};

export default Modal;