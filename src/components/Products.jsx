import React, { useContext } from 'react'
import '../styles/components/Products.css'
import Product from './Product'
import AppContext from '../context/AppContext.js'

const Products = () => {
  const {products, addToCart} = useContext(AppContext)

  const handleAddToCart = (product) => () => {
      addToCart(product)
    }

  return (
    <div className='Products'>
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  )
}

export default Products