import React, { useState } from 'react'
import Dashboardheading from './dashboardheading/Dashboardheading'
import Dashboardactions from './dashboardactions/Dashboardactions'
import Payouttable from '../payouttablecomp/Payouttable'
import Pagination from '../pagination/Pagination'
import Helpbutton from '../helpbutton/Helpbutton'
import { PageContextProvider } from '../../context/pagiContext'

const Dashboard = () => {

  const [page, setPage] = useState(5);

  return (
    <div className='dashboard bg-primaryBlue min-h-[79.3vh] sm:px-8 px-4 py-4 overflow-hidden'>
      <PageContextProvider value={{page, setPage}}>
        <Dashboardheading />
        <Dashboardactions />
        <Payouttable />
        <Pagination />
        <Helpbutton />
      </PageContextProvider>
    </div>
  )
}

export default Dashboard