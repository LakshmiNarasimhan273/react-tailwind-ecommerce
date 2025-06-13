import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App