import React from 'react'
import { Search, UserCircle } from "lucide-react"
import { Link } from "react-router-dom"


const Topbar = () => {
    return (
        <div>
            <div className=' flex justify-between py-2 gap-10 items-center '>
                <div className='bg-secondary flex-1 py-2 border-1 border-gray-500 rounded-2xl px-3'>
                    <div className='flex gap-2 '>
                        <Search className='text-gray-500' />
                        <input type="text" placeholder='Global Search...' className='outline-none w-full' />
                    </div>
                </div>
                <div>
                    <Link to={"/profile"}>
                        <UserCircle className='text-gray-500 ' size={30} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar