import React from 'react'
import './TopFoods.css'
import ProductCard from './ProductCard'

const TopFoods = () => {
  return (
    <div className="top-container">
        <h2 className="top-title">Los cuatro más vendidos</h2>
        <h3 className="top-subtitle">Descubre hoy nuestros cinco mejores platos</h3> 
        <div className="top-foods">
            
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        
    </div>
  )
}

export default TopFoods