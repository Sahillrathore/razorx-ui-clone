import React from 'react'
import Newbadge from '../newbadge/Newbadge'

const Headerlinkcomp = ({ name, classname }) => {
    return (
        <a
            href='#'
            className={`text-gray-400 font-semibold ${classname} text-sm cursor-pointer p-1 px-2 hover:text-blue-400 hover:bg-blue-400/15 rounded-sm active:bg-blue-400/15`}
        >
            {name}

            {name === 'Bulk' && <Newbadge/>}
        </a>
    )
}

export default Headerlinkcomp