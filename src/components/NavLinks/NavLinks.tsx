import React from 'react';
import s from './NavLinks.module.scss';

import towerImage from '@/assets/images/NavLinks/tower.png';
import scaffoldImage from '@/assets/images/NavLinks/scaffold.png';
import scaffoldingImage from '@/assets/images/NavLinks/scaffold.png';
import stairsImage from '@/assets/images/NavLinks/stairs.png';

import NavLinksCard from "@/components/NavLinks/NavLinks-card";

import {EPages, INavLinksCardProps, INavLinksProps} from "@/types/types";

const NavLinks = (props: {viewMode: INavLinksProps}) => {
    const linksData: INavLinksCardProps[] = [
        {
            page: EPages.tower,
            title: 'Аренда вышек',
            image: towerImage,
            linkHref: '/towers'
        },
        {
            page: EPages.scaffold,
            title: 'Аренда помостов',
            image: scaffoldImage,
            linkHref: '/scaffolds'
        },
        {
            page: EPages.scaffolding,
            title: 'Аренда лесов',
            image: scaffoldingImage,
            linkHref: '/scaffoldings'
        },
        {
            page: EPages.stairs,
            title: 'Аренда лестниц',
            image: stairsImage,
            linkHref: '/stairs'
        }
    ]

    const linksRender = (linksData: INavLinksCardProps[]) => {
        const newLinksData = linksData.filter(el => el.page !== props.viewMode.page)
        return newLinksData.map((el, id) => <NavLinksCard linkData={el} key={id} viewMode={props.viewMode}/>)
    }

    return (
        <div className={s.nav_links}>
            <div className={s.content}>
                {linksRender(linksData)}
            </div>
        </div>
    );
};

export default NavLinks;