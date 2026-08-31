import axios from 'axios'
import React, { useEffect } from 'react'

const AddProduct = () => {

    const token = localStorage.getItem("token")

    const fetchCategory = async () => {
        try {
            const res = await axios.get("http://localhost:3000/admin/get-all-category", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCategory()
    }, [token])

    return (
        <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">

            <div className="w-1/2 bg-orange-50 flex flex-col items-center justify-center p-8">
                <div className="w-full h-80 border-2 border-dashed border-orange-300 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                        src=""
                        alt="Category preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                <label className="mt-4 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl">
                    Select Images
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                    />
                </label>
            </div>

            <div className="w-1/2 p-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    New Product
                </h2>

                <form className="space-y-3">

                    <input
                        type="text"
                        required
                        placeholder="Product Name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="number"
                        placeholder="MRP"
                        min="0"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="number"
                        placeholder="Selling Price"
                        min="0"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <textarea
                        placeholder="Description"
                        required
                        rows="3"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        type="number"
                        placeholder="Stock Quantity"
                        min="0"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <select
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="">Select Category</option>

                    </select>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
                    >
                        Save Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct