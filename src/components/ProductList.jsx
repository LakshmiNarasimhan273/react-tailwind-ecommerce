import React, { useEffect, useState } from 'react'

function ProductList() {
    // useState hook -> holding 2 parameters (variable, function)
    const[products, setProducts] = useState([]);
    const[visibleCount, setVisibleCount] = useState(8);

    // const products = [];
    // function updateProduct(){
            // products.push(data);
    // }

    // useEffect -> having the direct access to our DOM elements
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    }

  return (
    <section className='p-4 md:p-8'>
        <h3 className='text-2xl md:text-3xl font-bold text-center mb-6'>All products</h3>

        {/* Grid layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
            products.slice(0, visibleCount).map(product => (    
                <div className='bg-white shadow rounded p-4 flex flex-col items-center'>
                    <img src={product.image} className='h-40 w-auto mb-4 object-contain' alt="" />
                    <h4 className='text-md md:text-lg font-semibold mb-2 text-center'>{product.title}</h4>
                    <h4 className='text-md md:text-lg font-semibold text-red-500'>$ {product.price}</h4>
                </div>
            ))
        }
        </div>
        {
            visibleCount < products.length && (
                <div className='text-center mt-6'>
                    <button onClick={showMore} className='bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition'>Show more</button>
                </div>
            )
        }
    </section>
  )
}

export default ProductList