import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  // console.log(id);
  const token = localStorage.getItem("token")
  const [formData, setFormData] = useState({
    CName: "",
    CDesc: "",
    status: "Active"
  });
  const [preview, setPreview] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/admin/get-category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data);
      setFormData(res.data.data)
      setPreview(res.data?.data?.image_url)
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [id])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImageUrl(file)
    setPreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = new FormData()
      data.append("CName", formData.CName)
      data.append("CDesc", formData.CDesc)
      data.append("category_image", imageUrl)

      const res = await axios.patch(`http://localhost:3000/admin/update-category/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      console.log(res.data);
      navigate("/categories")
    } catch (error) {
      console.log(error.respnose);
    }
  }

  return (
    <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">

      {/* IMAGE PREVIEW */}
      <div className="w-1/2 bg-orange-50 flex items-center justify-center">
        <img
          src={preview}
          alt="Category preview"
          className="w-100 h-100 object-cover"
        />
      </div>

      {/* FORM */}
      <div className="w-1/2 p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Edit Category
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit} >
          {/* CATEGORY NAME */}
          <input
            name="CName"
            value={formData.CName}
            
            onChange={handleChange}
            type="text"
            placeholder="Category Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            name="CDesc"
            value={formData.CDesc}
            onChange={handleChange}
            placeholder="Category Description"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* STATUS */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* IMAGE */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          />

          {/* UPDATE BUTTON */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl disabled:opacity-50"
          >
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
