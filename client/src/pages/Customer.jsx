import React, { useEffect, useState } from "react";
import axios from "axios"

const Customer = () => {
  const [customers, setCustomers] = useState([])
  const [search, setSearch] = useState("")

  const token = localStorage.getItem("token")

  const fetchAllCustomers = async (searchText) => {
    try {
      const res = await axios.get("http://localhost:3000/admin/get-all-customers", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          search: searchText
        }
      })
      console.log(res.data.data);
      setCustomers(res.data.data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllCustomers()
  }, [])

  useEffect(() => {
    fetchAllCustomers(search)
  }, [search])


  return (
    <div className="min-h-screen bg-orange-50/40 p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Customer List
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered customers
          </p>
        </div>

        {/* Total Customers */}
        <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-orange-100">
          <p className="text-sm text-gray-500">
            Total Customers
          </p>

          <h2 className="text-2xl font-bold text-orange-500">
            {customers.length}
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">

        <div className="relative max-w-md">

          <span className="absolute left-3 top-2.5 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search by name, email or phone..."
            className="w-full border border-gray-200 rounded-xl
            pl-10 pr-4 py-2.5 outline-none
            focus:ring-2 focus:ring-orange-300"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            {/* Table Header */}
            <thead className="bg-orange-100 text-gray-700">

              <tr>
                <th className="px-6 py-4 font-semibold">
                  S.No
                </th>

                <th className="px-6 py-4 font-semibold">
                  Customer
                </th>

                <th className="px-6 py-4 font-semibold">
                  Email
                </th>

                <th className="px-6 py-4 font-semibold">
                  Phone
                </th>

                <th className="px-6 py-4 font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 font-semibold">
                  Joined Date
                </th>
              </tr>

            </thead>

            {/* Table Body */}
            <tbody>

              {customers.map((customer, index) => (

                <tr
                  key={customer.id}
                  className="border-t border-gray-100
                  hover:bg-orange-50/50 transition"
                >

                  {/* S.No */}
                  <td className="px-6 py-4 text-gray-600">
                    {index + 1}
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">


                      <div>

                        <p className="font-semibold text-gray-800">
                          {customer.full_name}
                        </p>



                      </div>

                    </div>

                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-gray-600">
                    {customer.email}
                  </td>

                  {/* Phone */}
                  <td className="px-6 py-4 text-gray-600">
                    {customer.phone_no}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${customer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {customer.status}
                    </span>

                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-gray-500">
                    {customer.createdAt}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Customer;