import React, { useRef } from 'react';
import './filterbox.css';

const Filterbox = ({ text,}) => {

    const ref = useRef();

    const refHand = () => {
        const inp = ref.current;
        inp.toggleAttribute('checked' )
        // console.log(inp);
    }

    return (
        <div className='filter-info px-4 py-[6px] border-[.1px] flex gap-2 items-center cursor-pointer border-blue-600/20 bg-[#0d143f] relative active:bg-blue-400/30 active:text-blue-400'
        onClick={refHand}
        >
            <div className='rounded-full overflow-hidden'>
                <input
                    type='checkbox'
                    className=''
                    ref={ref}
                />
                <span className='custom'></span>
            </div>
            <span className='text-gray-400 font-semibold text-xs'>
                {text}
            </span>
        </div>
    )
}

export default Filterbox