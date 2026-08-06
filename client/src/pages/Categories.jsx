import { Plus } from 'lucide-react'
import React from 'react'
import CategoryCard from '../components/CategoryCard'


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
            <button className='flex bg-primary p-2 text-white font-semibold rounded-2xl
            text-[16px] items-center'>
              <Plus size={24} />
              Add Category
            </button>
          </div>
        </div>

        <div>
          <CategoryCard/>
        </div>

      </div>
    </>
  )
}

export default Categories