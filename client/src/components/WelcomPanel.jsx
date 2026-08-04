import React from 'react'
import logo from "../assets/logo.png"

const WelcomPanel = () => {
    return (
        <>
            <div >
                <div className=' text-center'>
                    <h1 className='text-4xl font-bold'>Welcome <span className='text-primary'>Click</span>Mart</h1>
                    <p className='text-gray-500 text-start'>Smart Shopping , Better Living.</p>
                </div>
                <div>
                    <img className='h-80 ' src={logo} alt="" />
                </div>
            </div>
        </>
    )
}

export default WelcomPanel