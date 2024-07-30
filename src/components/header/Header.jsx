import React, { useEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FaMagnifyingGlass, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { CiBullhorn } from 'react-icons/ci';
import { FiUserCheck } from 'react-icons/fi';
import { RiMenu3Line } from "react-icons/ri";
import Headerlinkcomp from './Headerlinkcomp';
import Payoutbutton from '../payoutButton/Payoutbutton';

const Header = () => {

    const [linksCollapse, setLinksCollapse] = useState(true);

    return (
        <header className='sm:px-8 xs:px-4 xxs:px-2 py-4 bg-headerBlueDark  overflow-hidden'>
            <div className='header-actions flex sm:justify-between  overflow-hidden sm:gap-0 xs:gap-5 xxs:gap-2 '>

                {/* left navigation section  */}
                <ul className='flex sm:gap-4 xs:gap-6 xxs:gap-2 items-center '>

                    <div className={`flex h-full sm:gap-4 gap-2  ${linksCollapse ? 'items-center' : 'flex-col gap-5 justify-center items-start '}`}>
                        <li
                            className='text-gray-300 text-xl p-[2px] rounded-sm bg-gray-800/60 hover:bg-gray-800/90'
                        >
                            <GoArrowUpRight />
                        </li>
                        <li
                            className='text-gray-300 font-semibold sm:text-xl xs:text-xl xxs:text-lg'
                        >
                            Payouts
                        </li>

                        <RiMenu3Line
                            className={`lg:hidden block text-gray-200 cursor-pointer text-xl`}
                            onClick={() => { setLinksCollapse(!linksCollapse) }}
                        />

                        <Headerlinkcomp name='/' classname={`text-lg cursor-auto lg:block hidden ${linksCollapse ? 'block' : 'hidden'}`} />
                    </div>

                    <div className={`gap-4 lg:flex sm:items-center ${linksCollapse ? 'hidden' : 'flex flex-col'} `}>
                        <a
                            className='text-blue-400 font-semibold text-sm cursor-pointer p-1 px-2 rounded-sm bg-blue-400/15'
                        >
                            Single
                        </a>

                        <Headerlinkcomp name='Bulk' />
                        <Headerlinkcomp name='Tally' />
                        <Headerlinkcomp name='Payout Links' />

                    </div>
                </ul>

                {/* Right section of header  */}
                <div className={`header-actions-right sm:flex ${linksCollapse ? 'hidden' : 'flex flex-col'} sm:flex-row flex-col justify-center gap-4 items-center`}>
                    <Payoutbutton name='Payout' />

                    <div className='flex gap-4 items-center'>
                        <FaMagnifyingGlass className='text-blue-400/90 cursor-pointer' />
                        <CiBullhorn className='text-orange-400 text-lg -rotate-45 cursor-pointer' />
                        <FiUserCheck className='text-blue-400/90 text-lg font-bold cursor-pointer' />
                    </div>
                </div>
            </div>

            {/* onboarding toast on top  */}
            <div className="back-to-onboarding flex justify-center border-t-[.025px] border-t-yellow-600 absolute top-0 rounded-b-md px-6 left-0 w-full z-[100]">
                <div className='uppercase text-gray-800 text-[.6rem] bg-yellow-500 px-3 py-[2px] w-fit rounded-b-md cursor-pointer relative -top-5 xl:top-0'>
                    go back to onboarding
                    <FaArrowUpRightFromSquare className='inline ml-2 text-gray-800' />
                </div>
            </div>
        </header>
    )
}

export default Header