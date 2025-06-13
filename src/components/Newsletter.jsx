import React from 'react'

function Newsletter() {
  return (
    <div className='bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-center mt-10'>
        <h4 className='text-2xl md:text-3xl font-semibold mb-4'>Join our newsletter</h4>
        <p className='mb-4 text-md md:text-lg'>Get updates on new arrivals and exclusive offers</p>

        <div>
            <input type="email" className='border border-gray-300 px-4 py-2 rounded w-full sm:w-64' />
            <button className='bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter