import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='px-10' >
            <div className='flex justify-center  '>
                <img className='w-40 ' src={logo} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <Link to={"dashboard"}>
                    <div className='font-semibold border-1 border-gray-300  rounded-2xl px-3 py-2 hover:bg-primary hover:text-white'>Dashboard</div>
                </Link>

                <Link to={"categories"}>
                    <div className='font-semibold border-1 border-gray-300  rounded-2xl px-3 py-2 hover:bg-primary hover:text-white'>Categories</div>
                </Link>

                <Link to={"products"}>
                    <div className='font-semibold border-1 border-gray-300  rounded-2xl px-3 py-2 hover:bg-primary hover:text-white'>Products</div>
                </Link>

                <Link to={"agency"}>
                    <div className='font-semibold border-1 border-gray-300  rounded-2xl px-3 py-2 hover:bg-primary hover:text-white '>Agency List</div>
                </Link>

                <Link to={"customer"}>
                    <div className='font-semibold border-1 border-gray-300  rounded-2xl px-3 py-2 hover:bg-primary hover:text-white '>Customer List</div>
                </Link>

                <Link to={""}>
                    <div className='font-semibold border-1 border-gray-300  rounded-2xl px-3 py-2 hover:bg-primary hover:text-white '>Sales Order</div>
                </Link>


            </div>
        </div>
    )
}

export default Sidebar