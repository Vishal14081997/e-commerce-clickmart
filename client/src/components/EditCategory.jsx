const EditCategory = () => {
  return (
    <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">

      {/* IMAGE PREVIEW */}
      <div className="w-1/2 bg-orange-50 flex items-center justify-center">
        <im
          alt="Category preview"
          className="w-100 h-100 object-cover"
        />
      </div>

      {/* FORM */}
      <div className="w-1/2 p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Edit Category
        </h2>

        <form className="space-y-3" >
          {/* CATEGORY NAME */}
          <input
            type="text"
            placeholder="Category Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            placeholder="Category Description"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* STATUS */}
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* IMAGE */}
          <input
            type="file"
            accept="image/*"
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
