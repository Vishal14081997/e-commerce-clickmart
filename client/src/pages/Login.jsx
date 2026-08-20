import React, { useState } from 'react'
import WelcomePanel from '../components/WelcomPanel'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", formData)
      console.log(res.data);
      localStorage.setItem("token" ,res.data.data.token )
      toast.success(res.data.message)
      setFormData({email:"", password:""})
      navigate("/dashboard")
    } catch (error) {
      console.log(error.response.data.message);
       toast.success(error.response.data.message)
    }
  }

  return (
    <>
      <div className="flex bg-secondary">

        {/* Left Section */}
        <div className="w-1/2  flex justify-center items-center">
          <WelcomePanel />
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center h-screen bg-secondary">
          <div className="w-[500px] bg-white rounded-2xl shadow-2xl p-10">

            <h1 className="text-4xl font-extrabold text-center text-primary mb-2">
              Welcome Back
            </h1>

            <p className="text-center text-gray-500 mb-8">
              Login to your
              <span className="font-semibold text-primary">
                {""} ClickMart
              </span>
              {""} account.
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  name='password'
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember Me
                </label>
                Forgot Password?
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition duration-300"
              >
                Login
              </button>

            </form>

            <p className="text-center text-gray-600 mt-6">
              Don't have an account?
              <Link
                to="/signup"
                className="text-primary font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login