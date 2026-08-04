import React from 'react'
import WelcomPanel from '../components/WelcomPanel'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className='flex justify-between bg-orange-50 h-screen'>
                {/* left section  */}
                <div className=' w-1/2 flex justify-center items-center'>
                    <WelcomPanel />
                </div>
                {/* right section  */}
                <div className='w-1/2 flex justify-center items-center'>
                    <div className='shadow-2xl rounded-2xl bg-white' >
                        <div className='flex flex-col items-center gap-3 p-10 w-[500px]' >
                            <div className='text-center w-full'>
                                <h1 className='font-bold text-primary text-3xl'>Create Account</h1>
                                <p className='text-gray-500 '>Join <span className='text-primary font-semibold'>ClickMart</span> and start shopping today.</p>
                            </div>

                            <form className='flex justify-center items-center flex-col gap-3'>

                                <input className=' w-100 outline-none border-1 border-gray-400 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-primary ' type="text" placeholder='Full Name' />

                                <input className=' w-100 outline-none border-1 border-gray-400 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-primary ' type="text" placeholder='Emai Adress' />

                                <input className=' w-100 outline-none border-1 border-gray-400 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-primary ' type="text" placeholder='Phone Number' />

                                <input className=' w-100 outline-none border-1 border-gray-400 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-primary ' type="text" placeholder='Password' />

                                <select className='border text-gray-500 border-gray-400 rounded-xl w-100 px-4 py-2 outline-none focus:ring-2 focus:ring-primary'>
                                    <option value="">Select UserType</option>
                                    <option value="">Admin</option>
                                    <option value="">Agency</option>
                                    <option value="">Customer</option>
                                </select>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-300"
                                >
                                    Create Account
                                </button>

                            </form>
                            <p className="text-center text-gray-600 ">
                                Already have an account?
                                <Link to={"/login"}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Login
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup