import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown } from 'react-icons/md';

const Payoutbutton = ({name, cls}) => {
    return (
        <div
            className={`payout-button-container flex items-center rounded-sm ${cls === 'blue' && 'bg-blue-600 border-blue-600 text-white'} text-blue-400 border border-blue-400/80`}>
            <button
                className='uppercase py-2 pl-2 flex gap-1 items-center transition-colors active:bg-gradient-to-l from-blue-400/30 to-blue-100/20'>
                <FaPlus className='text-xs' />
                <span className='sm:text-xs xs:text-xs xxs:text-[10px] pr-2 border-r-blue-300/30 border-r'>{name}</span>
            </button>
            <span className='pl-1 pr-2'>
                <MdKeyboardArrowDown />
            </span>
        </div>
    )
}

export default Payoutbutton