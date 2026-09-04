import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddProduct = () => {
    const [categories, setCategories] = useState([])

    const [formData, setFormData] = useState({
        CId: "", PName: "", PDesc: "", MRP: "", price: "", Qty: ""
    })

    const token = localStorage.getItem("token")

    const fetchCategory = async () => {
        try {
            const res = await axios.get("http://localhost:3000/admin/get-all-category", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data);
            setCategories(res.data.data)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCategory()
    }, [token])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData()
            data.append("CId", formData.CId)
            data.append("PName", formData.PName)
            data.append("PDesc", formData.PDesc)
            data.append("MRP", formData.MRP)
            data.append("price", formData.price)
            data.append("Qty", formData.Qty)
            const res = await axios.post("http://localhost:3000/admin/create-product", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data);

        } catch (error) {
            console.log(error.response?.data);
        }
    }

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

                <form className="space-y-3" onSubmit={handleSubmit}>

                    <input
                        onChange={handleChange}
                        name='PName'
                        value={formData.PName}
                        type="text"
                        placeholder="Product Name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        onChange={handleChange}
                        name="MRP"
                        value={formData.MRP}
                        type="number"
                        placeholder="MRP"
                        min="0"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        onChange={handleChange}
                        name="price"
                        value={formData.price}
                        type="number"
                        placeholder="Selling Price"
                        min="0"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <textarea
                        onChange={handleChange}
                        name="PDesc"
                        value={formData.PDesc}
                        placeholder="Description"
                        rows="3"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        onChange={handleChange}
                        name="Qty"
                        value={formData.Qty}
                        type="number"
                        placeholder="Stock Quantity"
                        min="0"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <select
                        name='CId'
                        onChange={handleChange}
                        value={formData.CId}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="">Select Category</option>
                        {
                            categories.map((item) => {
                                return (
                                    <option  key={item._id} value={item._id}>{item.CName}</option>
                                )
                            })
                        }

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