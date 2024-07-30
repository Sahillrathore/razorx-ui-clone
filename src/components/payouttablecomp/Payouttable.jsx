import React from 'react'
import Tableheader from '../tableheader/Tableheader'
import Tablerow from '../tablerow/Tablerow'
import usePageContext from '../../context/pagiContext';
import { motion } from "framer-motion"

const payouts = [
  { id: 1, date: 'Fri 9 Feb, 2:32 PM', amount: '10,000.00', status: 'Queued', contact: 'Sahil Rathore', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 2, date: 'Fri 9 Feb, 1:25 PM', amount: '10,000.00', status: 'Queued', contact: 'Ujjwal', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 3, date: 'Fri 9 Feb, 12:04 PM', amount: '10,000.00', status: 'Queued', contact: 'Amit Kumar', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 4, date: 'Thu 8 Feb, 3:52 PM', amount: '50,000.00', status: 'Queued', contact: 'Harsh', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 5, date: 'Tue 6 Feb, 4:09 PM', amount: '10,000.00', status: 'Queued', contact: 'Random Verma', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 6, date: 'Fri 9 Feb, 2:32 PM', amount: '10,000.00', status: 'Queued', contact: 'Sahil Rathore', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 7, date: 'Fri 9 Feb, 1:25 PM', amount: '10,000.00', status: 'Queued', contact: 'Ujjwal', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 8, date: 'Fri 9 Feb, 12:04 PM', amount: '10,000.00', status: 'Queued', contact: 'Amit Kumar', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 9, date: 'Thu 8 Feb, 3:52 PM', amount: '50,000.00', status: 'Queued', contact: 'Harsh', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 10, date: 'Tue 6 Feb, 4:09 PM', amount: '10,000.00', status: 'Queued', contact: 'Random Verma', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 11, date: 'Thu 8 Feb, 3:52 PM', amount: '50,000.00', status: 'Queued', contact: 'Harsh', createdBy: 'Aditya Sharma', utr: '--' },
  { id: 12, date: 'Tue 6 Feb, 4:09 PM', amount: '10,000.00', status: 'Queued', contact: 'Random Verma', createdBy: 'Aditya Sharma', utr: '--' },
];

const Payouttable = () => {

  const { page, setPage } = usePageContext();

  return (
    <motion.div
      whileInView={{ y: [-50, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className='payout-table border-y pb-6 overflow-x-auto border-y-zinc-700/50'
    >
      <table className='w-full'>
        <Tableheader />
        {
          payouts.slice(0, page).map((item) => (
            <Tablerow key={item.id} date={item.date} amount={item.amount} status={item.status} contact={item.contact} createdby={item.createdBy} utr={item.utr} />
          ))
        }
      </table>
    </motion.div>

  )
}

export default Payouttable