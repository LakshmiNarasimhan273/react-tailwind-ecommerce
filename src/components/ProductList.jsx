import React, { useEffect, useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(8);

    // Fetch products and categories
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(['all', ...data]));
    }, []);

    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    const addToCart = (productTitle) => {
        alert(`Product added to cart: ${productTitle}`);
    };

    // Apply category and search filters
    const filteredProducts = products
        .filter(product =>
            selectedCategory === 'all' || product.category === selectedCategory
        )
        .filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <section className='p-4 md:p-8 bg-gray-50 min-h-screen'>
            <h3 className='text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800'>All Products</h3>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                            {cat.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {filteredProducts.slice(0, visibleCount).map(product => (
                    <div key={product.id} className='bg-white shadow rounded-lg p-4 flex flex-col justify-between h-full'>
                        <div className='flex flex-col items-center'>
                            <img src={product.image} className='h-40 w-auto mb-4 object-contain' alt={product.title} />
                            <h4 className='text-sm md:text-md font-semibold text-gray-800 mb-2 text-center line-clamp-2'>
                                {product.title}
                            </h4>
                            <p className='text-lg font-bold text-red-600 mb-4'>$ {product.price}</p>
                        </div>
                        <button
                            onClick={() => addToCart(product.title)}
                            className='mt-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition w-full'
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            {visibleCount < filteredProducts.length && (
                <div className='text-center mt-8'>
                    <button
                        onClick={showMore}
                        className='bg-red-600 text-white px-6 py-2 cursor-pointer rounded hover:bg-red-500 transition'
                    >
                        Show More
                    </button>
                </div>
            )}
        </section>
    );
}

export default ProductList;
