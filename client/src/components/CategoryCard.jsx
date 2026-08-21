import axios from 'axios'
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect } from 'react'
import { useState } from 'react'

const CategoryCard = () => {
    const token = localStorage.getItem("token")

    const [formData, setFormData] = useState([])

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
    console.log(formData);

    useEffect(() => {
        fetchCategory()
    }, [token])

    return (
        <>
           <div className='flex flex-wrap gap-3'>
            {
                formData.map((item) => {
                    console.log(item);
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
                                        <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                                            <Pencil size={18} />
                                        </button>

                                        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
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