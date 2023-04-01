import React from 'react'
import './productsList.scss'
import Product from '../Product/Product'

const ProductsList = () => {
  return (
    <div className="productsList">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
  )
}

export default ProductsList