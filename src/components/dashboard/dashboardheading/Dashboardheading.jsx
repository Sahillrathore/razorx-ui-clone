import React from 'react'

const Dashboardheading = () => {
  return (
    <div className='px-4 py-3 flex items-center gap-2 rounded-sm bg-[#1c234b]'>

        <span
        className='uppercase text-[.7rem] px-[2px] bg-yellow-500 text-gray-900 rounded-sm'
        >
            test
        </span>
        <p
        className='text-xs rounded-sm text-gray-300 font-normal'
        >
        These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating events.
        </p>

        <a
        href="#"
        className='text-xs text-blue-400/90 hover:underline'
        >
        Learn More
        </a>
    </div>
  )
}

export default Dashboardheading