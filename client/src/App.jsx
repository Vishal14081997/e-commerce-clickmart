import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Products from './pages/Products'
import AgencyList from './pages/AgencyList'
import Customer from './pages/Customer'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "dashboard", element: <Dashboard/> },
        {path:"categories", element:<Categories/>},
        {path:"products", element:<Products/>},
        {path:"agency", element:<AgencyList/>},
        {path:"customer", element:<Customer/>},
      ]
    },
    {
      path: "*",
      element: <div className='bg-orange-50 h-screen flex justify-center items-center font-bold text-2xl text-gray-600'> Page Not Found</div>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App