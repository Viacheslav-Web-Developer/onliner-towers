import React, {useEffect} from 'react';
import s from './BurgerMenu.module.scss';
import classNames from "classnames";
import {BurgerMenuProps} from "@/types/types";

const BurgerMenu = (props: BurgerMenuProps) => {
    const layoutClassName = classNames([s.layout as string], {
            [s.show]: props.mobileMenuIsOpen
        })

    const contentClassName = classNames([s.content as string], {
            [s.show]: props.mobileMenuIsOpen
        })

    const closeMenuFunc = () => {
        props.setMobileMenuIsOpen(false)
    }

    useEffect(() => {
        let body = document.getElementById('body')
        props.mobileMenuIsOpen ? body!.classList.add('none-scroll') : body!.classList.remove('none-scroll')
    }, [props.mobileMenuIsOpen])

    return (
        <div className={layoutClassName} onClick={(e) => closeMenuFunc()}>
            <div className={contentClassName} onClick={(e) => e.stopPropagation()}>
                <button className={s.button_close} onClick={() => props.setMobileMenuIsOpen(false)}>
                    <div/>
                    <div/>
                </button>
            </div>
        </div>
    );
};

export default BurgerMenu;