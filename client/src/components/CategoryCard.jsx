import axios from 'axios'
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const CategoryCard = () => {
    const token = localStorage.getItem("token")
    const [formData, setFormData] = useState([])
    const navigate = useNavigate()

    const fetchCategory = async () => {
        try {
            const res = await axios.get("http://localhost:3000/admin/get-all-category", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data.data);
            setFormData(res.data.data)
        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        fetchCategory()
    }, [token])

    const handleDelete = async (categoryId) => {
        try {
            const res = await axios.delete(`http://localhost:3000/admin/delete-category/${categoryId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data);
            toast.success(res.data.message)
            setFormData((prev) => prev.filter((item) => item._id !== categoryId))
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <>
            <div className='flex flex-wrap gap-3'>
                {
                    formData.map((item) => {
                        return (
                            <div>
                                <div className="w-72 h-80 bg-white rounded-2xl overflow-hidden border mt-6">
                                    <img
                                        src={item.image_url}
                                        className="w-full h-50 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold">{item.CName}</h2>

                                        <p className="text-gray-500 text-sm mt-1">
                                            {item.CDesc}
                                        </p>
                                        <div className="flex justify-end gap-3 ">

                                            <button
                                                onClick={() => navigate(`/edit-category/${item._id}`)}
                                                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                                            >
                                                <Pencil size={18} />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                                            >
                                                <Trash2 size={18} />

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default CategoryCard