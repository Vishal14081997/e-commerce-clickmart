import React from "react";

const Customer = () => {
  const customers = [
    {
      id: 1,
      full_name: "Vishal Singh",
      email: "vishal@gmail.com",
      phone_no: "9876543210",
      status: "Active",
      createdAt: "12/09/2026",
    },
    {
      id: 2,
      full_name: "Raj Kumar",
      email: "raj@gmail.com",
      phone_no: "9876543211",
      status: "Active",
      createdAt: "10/09/2026",
    },
    {
      id: 3,
      full_name: "Mohan Sharma",
      email: "mohan@gmail.com",
      phone_no: "9876543212",
      status: "Inactive",
      createdAt: "08/09/2026",
    },
    {
      id: 4,
      full_name: "Rekha Devi",
      email: "rekha@gmail.com",
      phone_no: "9876543213",
      status: "Active",
      createdAt: "05/09/2026",
    },
  ];

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

                      <div
                        className="w-10 h-10 rounded-full
                        bg-orange-100 text-orange-600
                        flex items-center justify-center
                        font-bold"
                      >
                        {customer.full_name.charAt(0)}
                      </div>

                      <div>

                        <p className="font-semibold text-gray-800">
                          {customer.full_name}
                        </p>

                        <p className="text-xs text-gray-400">
                          Customer
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
                      ${
                        customer.status === "Active"
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