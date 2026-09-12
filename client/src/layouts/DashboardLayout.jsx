import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'


const DashboardLayout = () => {
  return (
    <>
      <div className='flex h-screen bg-secondary'>
          <Sidebar />
        <div className='flex-1 flex flex-col p-6'>
          <Topbar />
          <div className=' flex-1 overflow-hidden'>
            <Outlet />
          </div>

        </div>
      </div>
    </>
  )
}

export default DashboardLayout