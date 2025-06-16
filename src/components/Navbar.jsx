import React from 'react'
import { useState } from 'react';
import {Menu, X} from "lucide-react";

function Navbar() {
    // const isOpen = false;
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    // Issue resolved here adding offset(top, bottom, left, right) value of top-0 and z-index of 50
    <nav className='bg-white shadow-md fixed w-full top-0 z-50'>
        {/* responsiveness */}
        <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
                <div className='text-xl font-bold text-red-600'>ShopWave.</div>

                <div className='hidden md:flex space-x-6'>
                    <a href="#" className='hover:text-red-600'>Home</a>
                    <a href="#" className='hover:text-red-600'>Products</a>
                    <a href="#" className='hover:text-red-600'>My orders</a>
                    <a href="#" className='hover:text-red-600'>Help & Support</a>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            isOpen ? <X /> : <Menu/> 
                        }
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile design */}
        {
            isOpen && (
                <div className='md:hidden bg-white px-4 pb-4 space-y-2 shadow'>
                    <a href="#" className='block text-slate-800 font-semibold hover:text-blue-500'>Home</a>
                    <a href="#" className='block text-slate-800 font-semibold hover:text-blue-500'>Products</a>
                    <a href="#" className='block text-slate-800 font-semibold hover:text-blue-500'>My orders</a>
                    <a href="#" className='block text-slate-800 font-semibold hover:text-blue-500'>Help & Support</a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar