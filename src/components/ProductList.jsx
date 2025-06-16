import React, { useEffect, useState } from 'react'

function ProductList() {
    // useState hook -> holding 2 parameters (variable, function)
    const [products, setProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const [searchProducts, setSearchProducts] = useState('');
    const [filterProducts, setFilterProducts] = useState('all');
    const [categories, setCategories] = useState([]);
    // useEffect -> having the direct access to our DOM elements
    // ** Very important for interview Components lifecycle methods -> mounting, updating, unmounting
    useEffect(() => { // Asynchronous function by default MOUNTING
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())                    // UPDATING
            .then(data => setProducts(data))

        fetch('http://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(['all', ...data]));
    }, []); // UNMOUNTING

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    }

    const addtocart = (title) => {
        window.alert(`Product added to cart - ${title}`);
    }

    const filteredProducts = products.filter(product => filterProducts === 'all' 
        || product.category === filterProducts).filter(product => product.title.toLowerCase().includes(searchProducts.toLowerCase()));

    return (
        <section className='p-4 md:p-8'>
            <h3 className='text-2xl md:text-3xl font-bold text-center mb-6'>All products</h3>

            {/* Search and filter products functionality */}

            <div className='felx flex-col md:flex-row justify-between items-center gap-4 mb-6'>
                {/* Search function */}
                <input type="text" 
                placeholder='Search products'
                value={searchProducts}
                onChange={(e) => setSearchProducts(e.target.value)}
                 className='border border-gray-300 rounded px-4 py-2 w-full md:w-1/4' />
                
                {/* Filter function */}
                <select value={filterProducts} onChange={(e) => setFilterProducts(e.target.value)}>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>
                                    {category.toUpperCase()};
                            </option>
                        ))
                    }
                </select>
            </div>

            {/* Grid layout */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    // map is known as list in react
                    filteredProducts.slice(0, visibleCount).map(product => (
                        <div key={product.id} className='bg-white shadow rounded p-4 flex flex-col items-center h-full'>
                            <img src={product.image} className='h-40 w-auto mb-4 object-contain' alt="" />
                            <h4 className='text-md md:text-lg font-semibold mb-2 text-center'>{product.title}</h4>
                            <h4 className='text-md md:text-lg font-semibold text-red-500'>$ {product.price}</h4>
                            <button onClick={() => addtocart(product.title)} className='bg-red-600 px-6 py-2 text-white rounded w-full'>Add to cart</button>
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