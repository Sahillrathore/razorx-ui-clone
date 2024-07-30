import React from 'react';
import { GoDotFill } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import Payoutbutton from '../../payoutButton/Payoutbutton';


const Dashboardactions = () => {
    return (
        <div className='dash-actions py-4 flex justify-between items-center'>

            {/* left-section (sort)  */}
            <div className='dash-action-left flex md:flex-row flex-col md:items-center gap-2 text-gray-400 sm:text-sm xs:text-xs xxs:text-xs font-semibold'>
                <div className='flex'>
                    <input
                        type='checkbox'
                        className='mr-1'
                        id='inp'
                    />
                    <div>
                        <label htmlFor="inp">
                        Showing 1-5 payouts
                        </label>
                    </div>
                </div>
                <div className='flex sm:gap-3 gap-2 sm:flex-row xs:flex-row xxs:flex-col'>
                    <div className='flex items-center'>
                        <GoDotFill />
                        <p className='ml-1'>Sort by</p>
                    </div>

                    <div className="creation-date-filt">
                        <label
                            htmlFor="payment-sorter"
                            className='text-blue-400'
                        >
                            latest creation date
                        </label>
                        <select
                            name="sort-by-date"
                            id="payment-sorter"
                            className='text-blue-400 bg-transparent -ml-1 outline-none'
                        >
                        </select>
                    </div>
                </div>
            </div>

            {/* right section actions  */}
            <div className='dash-action-right flex items-center sm:gap-4 gap-2 text-sm font-semibold text-gray-400 '>
                <div className='flex md:gap-4 gap-6 md:flex-row flex-col-reverse'>
                    <MdOutlineRefresh className='sm:text-2xl text-lg text-blue-400/90' />
                    <CiMenuKebab className='sm:text-2xl text-lg text-blue-400/90' />
                </div>

                <div className='flex gap-4 md:flex-row flex-col'>
                    <button className='flex items-center sm:text-xs xs:text-xs xxs:text-[10px] gap-1 border text-blue-400 border-blue-400/80 px-2 py-[6px] rounded-sm'>
                        <MdOutlineFileDownload className='text-lg' /> Export
                    </button>

                    <Payoutbutton name='Payout' cls='blue' />
                </div>
            </div>
        </div>
    )
}

export default Dashboardactions