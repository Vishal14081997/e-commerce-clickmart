import { Plus } from 'lucide-react'
import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <>
      <div>

        <div className='flex justify-between mt-6'>
          <div className=''>
            <h1 className='font-bold text-2xl'>Products</h1>
            <p className='text-gray-500'>Manage product for your store</p>
          </div>
          <div>
            <button className='flex bg-primary p-2 text-white font-semibold rounded-2xl
            text-[16px] items-center'>
              <Plus size={24} />
              Add Product
            </button>
          </div>
        </div>

        <div>
          <ProductCard/>
        </div>

      </div>
    </>
  )
}

export default Products