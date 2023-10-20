'use client'
import React, {useEffect, useState} from 'react';
import s from "./ButtonUp.module.scss";
import classNames from "classnames";

const ButtonUp = () => {
    const [scrollY, setScrollY] = useState<number>(0);

    function scrollListener() {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", scrollListener);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    });

    const [documentHeight, setDocumentHeight] = useState<number>(0)

    useEffect(() => {
        setDocumentHeight(document.documentElement.clientHeight)
    })

    const upBtnClassName = classNames([s.button_to_up as string], {
        [s.show as string]: scrollY > documentHeight
    })

    return (
        <button className={upBtnClassName} onClick={() => window.scrollTo(0,0)}>{'>'}</button>
    );
};

export default ButtonUp;