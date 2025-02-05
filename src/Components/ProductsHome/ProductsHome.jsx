import React from 'react'
import ourProduct01 from '../../assets/our-product-1.jpg'
import ourProduct02 from '../../assets/our-product-2.jpg'
import ourProduct03 from '../../assets/our-product-3.jpg'
import ourProduct04 from '../../assets/our-product-4.jpg'
import ourProduct05 from '../../assets/our-product-5.jpg'
import ourProduct06 from '../../assets/our-product-6.jpg'
import ourProduct07 from '../../assets/our-product-7.jpg'
import ourProduct08 from '../../assets/our-product-08.jpg'
import ourProduct09 from '../../assets/our-product-09.jpg'
import './ProductsHome.css'

function ProductsHome() {
  return (
    <div className="products-home">
        <div className="header">
        <h1>Our Products</h1>
        <p>We always provide the best in class products to our customers</p>
      </div>

      {/* Image Grid */}
      <div className="grid-container">
        {/* Column 1 - 4 images */}
        <div className="grid-column">
          <img src={ourProduct01} alt="Product 1" />
          <img src={ourProduct02} alt="Product 2" />
          <img src={ourProduct03} alt="Product 3" />
          <img src={ourProduct04} alt="Product 4" />
        </div>

        {/* Column 2 - 3 images */}
        <div className="grid-column">
          <img src={ourProduct05} alt="Product 5" />
          <img src={ourProduct06} alt="Product 6" />
          <img src={ourProduct07} alt="Product 7" />
        </div>

        {/* Column 3 - 2 images */}
        <div className="grid-column">
          <img src={ourProduct08} alt="Product 8" />
          <img src={ourProduct09} alt="Product 9" />
        </div>
      </div>
    </div>
  )
}

export default ProductsHome