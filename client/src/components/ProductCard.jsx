import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";

const ProductCard = () => {
    const [data, setData] = useState([])
    const token = localStorage.getItem("token")

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/admin/get-all-products", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data.data);
            setData(res.data.data)

        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        fetchData()
    }, [token])


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
                {
                    data.map((item) => {
                        return (
                            <div
                                className="w-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition"
                            >
                                {/* Product Image */}
                                <div className="w-full h-52 bg-gray-100">
                                    <img
                                        src={item.image_url}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4">

                                    {/* Product Name */}
                                    <h2 className="text-xl font-semibold text-gray-800 truncate">
                                        {item.PName}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                        {item.PDesc}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-center gap-3 mt-3">
                                        <h3 className="text-2xl font-bold text-primary">
                                            ₹{item.price}
                                        </h3>

                                        <span className="text-sm text-gray-400 line-through">
                                            ₹{item.MRP}
                                        </span>
                                    </div>

                                    {/* Quantity & Rating */}
                                    <div className="flex justify-between items-center mt-3 text-sm">
                                        <span className="text-gray-600">
                                            Qty: <b>{item.Qty}</b>
                                        </span>

                                        <span className="text-yellow-500">
                                            ⭐ {item.rating || 0}
                                        </span>
                                    </div>

                                    {/* Status */}
                                    <div className="mt-3">
                                        {/* <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    item.status === "Active"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }`}
                            >
                                {item.status}
                            </span> */}
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium `}
                                        >
                                            {item.status}
                                        </span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-end gap-3 mt-4">
                                        <button
                                            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
                                        >
                                            <Pencil size={18} />
                                        </button>

                                        <button
                                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    );
};

export default ProductCard;