import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
        <div className='flex'>
            <div className='bg-amber-400 w-1/4 h-screen'>
                
            </div>
            <div className='w-3/4'>
                <Outlet/>
            </div>
        </div>
    </>
  )
}

export default DashboardLayout