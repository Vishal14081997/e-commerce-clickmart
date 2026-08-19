import React from 'react'

const CreateCategory = () => {
  return (
    <>
      <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">
        {/* Left Side - Image Preview */}
        <div className="w-1/2 bg-orange-50 flex items-center justify-center">
          <img
            src={""}
            alt="Category preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            New Category
          </h2>

          <form className="space-y-3" >
            <input
              type="text"
              placeholder="Category Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="Category Description"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="file"
              accept="image/*"
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

export default CreateCategory