import React from 'react'
import './Hero.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>World-Class Dental Equipment at Your Doorstep</h1>
        <p>Get yours now at 20% off before they go out of stock.</p>
        <button className="hero-button">Contact us  <MdKeyboardDoubleArrowRight className='hero-icon'/> </button>
      </div>
    </div>
  )
}

export default Hero