import React from 'react'

function Hero() {
  return (
    <div className='bg-cover bg-center h-[400px] md:h-[600px] flex flex-col justify-center items-center text-center px-4' 
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')"}}
    >
        {/* Glassy morphism */}
        <div  className='backdrop-blur-md bg-white/20 p-6 rounded max-w-2xl border border-white/30'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-white '>Discover trendy products</h2>
            <p className='text-md md:text-lg mb-6 text-white'>Ultimate destination for your online shopping</p>
            <button className='bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-500 transition text-lg'>Shop now</button>
        </div>
    </div>
  )
}

export default Hero