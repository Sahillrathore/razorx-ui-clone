import React from 'react';
import logo from '../../assets/razorlogo.png';
import { motion } from "framer-motion"

const Helpbutton = () => {
  return (
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: .7 }}
      className='query-btn flex bg-indigo-400/70 px-3 cursor-pointer hover:bg-transparent hover:border-indigo-400/70 border-transparent border transition-colors py-2 rounded-full w-fit mt-4 float-right overflow-hidden'
    >
      <img
        src={logo}
        alt="logo.."
        className='h-6'
      />
      <button
        className='text-gray-300 text-sm font-semibold'
      >
        Need Help?
      </button>
    </motion.div>
  )
}

export default Helpbutton