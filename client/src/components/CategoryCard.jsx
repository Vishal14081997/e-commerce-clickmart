import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const CategoryCard = () => {
    return (
        <>
            <div className="w-72 bg-white rounded-2xl overflow-hidden border mt-6">
                <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                    alt="Product"
                    className="w-full h-50 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold">Nike Shoes</h2>

                    <p className="text-gray-500 text-sm mt-1">
                        Comfortable running shoes.
                    </p>

                    <h3 className="text-2xl font-bold text-primary mt-3">
                        ₹2000
                    </h3>

                    <div className="flex justify-end gap-3 ">
                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                            <Pencil size={18} />
                        </button>

                        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CategoryCard