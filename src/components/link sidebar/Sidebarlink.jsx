import React, { useState } from 'react';
import useNavContext from '../../context/sidenavlink';
import Newbadge from '../newbadge/Newbadge';

const Sidebarlink = ({name, icon}) => {

    const {handleLinkClick, navCollapse, handleNavCollapse, activeLink} = useNavContext();

    return (
        <div className='side-menu-links'>
            <a
                href='#'
                className={`flex pl-4 gap-3 items-center hover:bg-gray-700/80 cursor-pointer active:bg-gray-700 ${activeLink === name && 'bg-gray-700/80 border-l-2 border-l-orange-500'} transition-colors py-2`}
                onClick={() => { handleLinkClick(name) }}
            >
                <div
                onClick={handleNavCollapse}
                className={`${navCollapse ? 'pr-4' : ''}`}
                >
                    {icon}
                </div>
                <span className={`${navCollapse ? 'hidden' : 'block'}`}>{name}</span>
                <div className={`${navCollapse ? 'hidden' : 'block'}`}>{name === 'Payouts' && <Newbadge/>}</div>
            </a>
        </div>
    )
}

export default Sidebarlink