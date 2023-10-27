import React from 'react';
import s from './NavLinks.module.scss';
import {INavLinks, INavLinksProps} from "@/types/types";

import NavLinksCard from "@/components/NavLinks/NavLinks-card";

const NavLinks = (props: INavLinksProps) => {
    const linksRender = (linksData: INavLinks[]) => {
        return linksData.filter(el => el.page !== props.page).map((el, id) => <NavLinksCard navLinks={el} component={props.component} key={id}/>)
    }

    return (
        <div className={s.nav_links}>
            <div className={s.content}>
                {linksRender(props.navLinks)}
            </div>
        </div>
    );
};

export default NavLinks;