import React from 'react'
import usePageContext from '../../context/pagiContext'

  const Pagination = () => {

  const {page, setPage} = usePageContext();

  const pageHandler = (e) => {
    setPage(e.target.value);
  }


  return (
    <div className='pagination-opt py-4 flex gap-3 justify-end pr-4 items-center '>

        <select
        name="pagecount"
        id="pagination"
        className='bg-headerBlue px-3 py-1 text-gray-400/70 rounded-sm outline-gray-500 focus:outline'
        onChange={pageHandler}
        >
            <option
            value="5"
            >
            5
            </option>
            <option
            value="7"
            >
            7
            </option>
            <option
            value="10"
            >
            10
            </option>
            <option
            value="12"
            >
            12
            </option>
        </select>

        <p className='text-gray-400 text-xs'>rows/page</p>
    </div>
  )
}

export default Pagination