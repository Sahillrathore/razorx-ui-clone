import React, { useState } from 'react'
import Header from './components/header/Header';
import Filters from './components/filters/Filters';
import Dashboard from './components/dashboard/Dashboard';
import Sidenav from './components/sidenav/Sidenav';
import { NavContextProivider } from './context/sidenavlink';

const App = () => {

  const [activeLink, setActiveLink] = useState('Payouts');
  const [navCollapse, setNavCollapse] = useState(true);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  const handleNavCollapse = () => {
    setNavCollapse(!navCollapse)
  }

  return (
    <>
      <NavContextProivider
      value={{ activeLink, setActiveLink, navCollapse, setNavCollapse, handleLinkClick, handleNavCollapse }}
      >
        <div className='flex'>
          <div>
            <Sidenav />
          </div>

          <div className='w-full pl-12'>
            <Header />
            <Filters />
            <Dashboard />
          </div>
        </div>
        
      </NavContextProivider>
    </>
  )
}

export default App