import React from 'react'
import './ProductCard.css'
import Button from './Button'

const ProductCard = () => {
  return (
    <div className="product-container">
        <img src="src/assets/hamburguesa.jpg" alt="" className="product-image" />
        <div className="product-name">
            <h3>Hamburguesa</h3>
        </div>
        <div className="price-container">
            <div className="price">Bs. 5</div>
            <Button type={"button-buy"} name_button={"Comprar"} />
        </div>
    </div>
  )
}

export default ProductCard