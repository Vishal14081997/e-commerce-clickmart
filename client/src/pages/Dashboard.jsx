import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Users, UserRound, Package, LayoutGrid } from 'lucide-react'

const Dashboard = () => {

  const token = localStorage.getItem("token")
  const [data, setData] = useState({
    totalAgency: "",
    totalCategory: "",
    totalCustomer: "",
    totalProduct: ""
  })
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/get-dashboard", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data.data);
      setData(res.data.data)
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [token])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Customers</p>
            <h2 className="text-3xl font-bold mt-1">{data.totalCustomer}</h2>
          </div>
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <Users size={24} />
          </div>
        </div>

        {/* Total Agents */}
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Agents</p>
            <h2 className="text-3xl font-bold mt-1">{data.totalAgency}</h2>
          </div>
          <div className="bg-green-500 text-white p-3 rounded-full">
            <UserRound size={24} />
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-3xl font-bold mt-1">{data.totalProduct}</h2>
          </div>
          <div className="bg-orange-500 text-white p-3 rounded-full">
            <Package size={24} />
          </div>
        </div>

        {/* Total Categories */}
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-shadow">
          <div>
            <p className="text-gray-500 text-sm">Total Categories</p>
            <h2 className="text-3xl font-bold mt-1">{data.totalCategory}</h2>
          </div>
          <div className="bg-purple-500 text-white p-3 rounded-full">
            <LayoutGrid size={24} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard