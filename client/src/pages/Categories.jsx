import {  Plus } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <>
      <div>
        <div className='flex justify-between mt-6'>
          <div className=''>
            <h1 className='font-bold text-2xl'>Categories</h1>
            <p className='text-gray-500'>Manage product categories for your store</p>
          </div>
          <div>
            <Link to={"/create-category"}>
              <button className='flex bg-primary p-2 text-white font-semibold rounded-2xl
            text-[16px] items-center'>
                <Plus size={24} />
                Add Category
              </button>
            </Link>
          </div>
        </div>

        <div className='h-screen overflow-y-auto'>
          <CategoryCard />
        </div>

      </div>
    </>
  )
}

export default Categories