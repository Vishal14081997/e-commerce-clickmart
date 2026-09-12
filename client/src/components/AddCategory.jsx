import axios from 'axios'
import React, { useState } from 'react'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const [formData, setFormData] = useState({
    CName: "",
    CDesc: ""
  })
  const [imageUrl, setImageUrl] = useState(null)
  const [preview, setPreview] = useState("")
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);

    const file = e.target.files[0]

    setImageUrl(file)
    setPreview(URL.createObjectURL(file))
  }
  const token = localStorage.getItem("token")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append("CName", formData.CName)
      data.append("CDesc", formData.CDesc)
      data.append("category_image", imageUrl )

      const res = await axios.post("http://localhost:3000/admin/create-category", data,
        {
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":"multipart/form-data"
          }
        }
      )
      // console.log(res.data);
      toast.success("Create category successfully")
      navigate("/categories")
      setFormData({
        CName:"",
        CDesc:""
      })
      setImageUrl(null)
      setPreview("")
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">
        {/* Left Side - Image Preview */}
        <div className="w-1/2 bg-orange-50 flex items-center justify-center">
          <img
            src={preview}
            alt="Category preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            New Category
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit} >
            <input
              onChange={handleChange}
              name='CName'
              type="text"
              value={formData.CName}
              placeholder="Category Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              onChange={handleChange}
              name='CDesc'
              value={formData.CDesc}
              placeholder="Category Description"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              Save Category
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default AddCategory