import React from 'react';

const Tablerow = ({ date, amount, status, contact, createdby, utr }) => {
  return (
    <tbody>
      
        <tr className='text-gray-300 text-xs'>

          <td className='capitalize px-4 py-3'>{date}</td>
          <td className='capitalize px-4 py-3'><span className='text-[.65rem]'>₹</span>{amount}</td>
          <td className='capitalize px-4 py-3'>
            <span className='bg-yellow-700/40 text-[.7rem] py-[2px] px-[5px] rounded-xl text-yellow-500'>
              {status}
            </span>
          </td>
          <td className='capitalize px-4 py-3'>{contact}</td>
          <td className='capitalize px-4 py-3 text-gray-400'>{createdby}</td>
          <td className='capitalize px-4 py-3'>{utr}</td>

        </tr>
    </tbody>
  )
}

export default Tablerow