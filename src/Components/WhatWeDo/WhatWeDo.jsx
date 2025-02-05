import React from 'react'
import './WhatWeDo.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="what-we-do-info">
        <h2>What We Do?</h2>
        <p>GP & co is to be recognized as one of the best providers of dental equipment's and interiors across the country, based on the quality of products, our superior service, efficiency, viability, integrity, innovation & teamwork.</p>
      </div>
      <div className="cards">
        <div className="card card1">Dental Equipments <MdKeyboardDoubleArrowRight className='icon'/></div>
        <div className="card card2">Interiors <MdKeyboardDoubleArrowRight className='icon'/> </div>
      </div>
    </div>
  )
}

export default WhatWeDo