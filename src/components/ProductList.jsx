import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'

const ProductList = () => {
    return (
        <div className="product_list">
            <h2 className='product_list_title'>Products</h2>
            <div className='product_list_container'>
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>



    )
}

export default ProductList