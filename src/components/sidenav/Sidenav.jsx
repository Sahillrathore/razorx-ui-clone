import React, { useState } from 'react';
import logo from '../../assets/logonavv.png';
import logo2 from '../../assets/razorlogo.png';

import { LuBookmarkMinus, LuStamp, LuHome, LuBookMarked } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import { FaRegFileAlt, FaApple } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineAdfScanner } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";

import Sidebarlink from '../link sidebar/Sidebarlink';
import useNavContext from '../../context/sidenavlink';

const Sidenav = () => {

    const { navCollapse, setNavCollapse, handleNavCollapse, activeLink } = useNavContext();

    return (
        <>
            <nav
                className={`${navCollapse ? 'w-12 h-full bg-headerBlueDark' : 'w-72 h-full bg-sidebarBlue shadow-xl shadow-[#383d81]'} fixed py-4 z-50 transition-all`}

                    // onMouseOver={handleNavCollapse}
                    onMouseEnter={()=>{setNavCollapse(false)}}
                    onMouseLeave={()=>{setNavCollapse(true)}}
                    // onMouseLeave={handleNavCollapse}
                >

                {/* website logo  */}
                <div
                    className={`logo ${navCollapse ? 'pl-2' : 'pl-4'} cursor-pointer min-h-[48px]`}
                    // onClick={handleNavCollapse}
                >
                    <img src={navCollapse ? logo2 : logo} alt="logo-img" className={`${navCollapse ? 'h-12 w-10' : 'h-12 w-44'}`} />
                </div>

                {/* sidebar navigations  */}
                <div className='home-menus flex flex-col gap-3 py-6 pt-10 text-gray-400 font-bold border-b border-b-gray-700/60'                    
                >

                    <Sidebarlink name='Home' icon={<LuHome />} />
                    <Sidebarlink name='Payouts' icon=<FaArrowUp className='rotate-45' /> />
                    <Sidebarlink name='Account Statement' icon={<FaRegFileAlt />} />
                    <Sidebarlink name='Contact' icon={<FiUser />} />

                </div>

                <div className="home-menus flex flex-col gap-3 py-6 text-gray-400 font-bold"
                    // onMouseEnter={handleNavCollapse}
                    // onMouseLeave={handleNavCollapse}
                >
                    <Sidebarlink name='Vendor Payments' icon={<LuBookmarkMinus />} />
                    <Sidebarlink name='Tax Payments' icon={<LuStamp />} />
                    <Sidebarlink name='Payout Links' icon={<IoPaperPlaneOutline />} />
                    <Sidebarlink name='Payroll' icon={<MdOutlineAdfScanner />} />
                    <Sidebarlink name='Report' icon={<LuBookMarked />} />
                </div>

                {/* app download link section  */}
                <div className={`mobile-app-cta pl-4 flex gap-2 items-center ${navCollapse ? 'hidden' : 'block'}`}>
                    <p className='text-sm font-bold text-gray-300/90'>Get RazorpayX mobile app</p>
                    <img
                        src="https://img.icons8.com/?size=48&id=L1ws9zn2uD01&format=png"
                        alt="playstore.."
                        className='h-6 cursor-pointer active:bg-gray-700'
                    />
                    <FaApple className='text-gray-400 text-2xl cursor-pointer active:bg-gray-700' />
                </div>
            </nav>
        </>
    )
}

export default Sidenav