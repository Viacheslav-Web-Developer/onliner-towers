import React from 'react';
import s from './NavLinks.module.scss';
import towerImage from '@/assets/images/NavLinks/tower.png';
import scaffoldImage from '@/assets/images/NavLinks/scaffold.png';
import scaffoldingImage from '@/assets/images/NavLinks/scaffold.png';
import stairsImage from '@/assets/images/NavLinks/stairs.png';
import NavLinksCard from "@/components/NavLinks/NavLinks-card";

const NavLinks = () => {
    const mainScreenLinksData = [
        {
            title: 'Аренда вышек',
            image: null,
            linkHref: ''
        },
        {
            title: 'Аренда помостов',
            image: null,
            linkHref: ''
        },
        {
            title: 'Аренда лесов',
            image: null,
            linkHref: ''
        },
        {
            title: 'Аренда лестниц',
            image: null,
            linkHref: ''
        }
    ]

    const linksData = [
        {
            title: 'Аренда вышек',
            image: towerImage,
            linkHref: ''
        },
        {
            title: 'Аренда помостов',
            image: scaffoldImage,
            linkHref: ''
        },
        {
            title: 'Аренда лесов',
            image: scaffoldingImage,
            linkHref: ''
        },
        {
            title: 'Аренда лестниц',
            image: stairsImage,
            linkHref: ''
        }
    ]

    const linksRender = (linksData) => {
        return linksData.map(el => <NavLinksCard linkData={el}/>)
    }

    return (
        <div className={s.nav_links}>
            <div className={s.content}>
                {linksRender(mainScreenLinksData)}
            </div>
        </div>
    );
};

export default NavLinks;