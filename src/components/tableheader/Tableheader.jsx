import React from 'react'

const Tableheader = () => {
  return (
    <thead>
        <tr className='text-gray-300 text-sm'>

            <th
            className='uppercase px-4 py-2 sm:min-w-72 min-w-52 text-start'
            >
            Created at
            </th>
            <th
            className='uppercase px-4 py-2 sm:min-w-40 min-w-32 text-start'
            >
            Amount
            </th>
            <th
            className='uppercase px-4 py-2 sm:min-w-36 min-w-32 text-start'
            >
            Status
            </th>
            <th
            className='uppercase px-4 py-2 sm:min-w-64 min-w-52 text-start'
            >
            Contact
            </th>
            <th
            className='uppercase px-4 py-2 sm:min-w-64 min-w-52 text-start'
            >
            Created by
            </th>
            <th
            className='uppercase px-4 py-2 sm:min-w-24 min-w-20 text-start'
            >
            Utr
            
            </th>

        </tr>
    </thead>
  )
}

export default Tableheader