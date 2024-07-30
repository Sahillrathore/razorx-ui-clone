import React from 'react'
import Filterbox from './filterbox/Filterbox'

const Filters = () => {
    return (
        <div className='filters-tab sm:px-8 px-4 py-4 bg-headerBlue flex sm:flex-row xs:flex-row xxs:flex-col  items-  justify-between relative'>
            <div className="filters flex gap-3 flex-wrap items-center">
                <div className='text-gray-400 font-semibold text-sm capitalize'>quick filters:</div>

                <div className='flex gap-3 flex-wrap'>
                <Filterbox text="All Payouts" />
                <Filterbox text="Scheduled for next 2 days" />
                <Filterbox text="Queued (RazorpayX a/c)" />
                </div>
            </div>

            <div className='min-w-fit h-full'>
                <label
                    htmlFor='more-filters'
                    className='text-xs font-semibold text-blue-400/90'
                >
                    View More Filters
                </label>
                <select
                name='addtnfilters'
                id='more-filters'
                className='bg-transparent text-[#638BC9]'
                >

                </select>
            </div>
        </div>
    )
}

export default Filters