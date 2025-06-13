import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white text-center p-4 mt-10 text-sm md:text-base'>
        <p>&copy; All rights reserved | {new Date().getFullYear()}</p>
        {/* Date */}
    </footer>
  )
}

export default Footer