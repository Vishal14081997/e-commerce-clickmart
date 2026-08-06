import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'


const DashboardLayout = () => {
  return (
    <>
      <div className='flex'>
        <div className=' bg-secondary w-1/4 h-screen'>
          <Sidebar />
        </div>
        <div className='w-3/4 p-6'>

          <div>
            <Topbar />
          </div>

          <Outlet />

        </div>
      </div>
    </>
  )
}

export default DashboardLayout