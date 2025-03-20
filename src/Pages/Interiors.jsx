import React from 'react'
import './Css/Interiors.css'
import { motion } from 'framer-motion'
import interiorContentImage from "../assets/interior-conent.jpg"

import interiorImg01 from '../assets/interior01.jpg'
import interiorImg02 from '../assets/interior02.jpg'
import interiorImg03 from '../assets/interior03.jpg'
import interiorImg04 from '../assets/interior04.jpg'

import chair from '../assets/chair.jpg'
import interiorequip01 from '../assets/interior-equipment-01.jpg'
import interiorequip02 from '../assets/interior-equipment-02.jpg'

const colors =["#659EA7" , "#A595AB", "#DC896B", "#2A2128","#565B98","#E198BC","#F0D382","#523B79","#484E4E","#959BBB"]

function Interiors() {
  return (
    <div className="interiors">
        <div className="interior-hero">
            <h1>INTERIORS</h1>
        </div>
        <div className="interior-content">
            <div className="interior-image">
                <img src={interiorContentImage} alt="interior image"/>
            </div>
            <div className="interior-text">
                <h2>Premium Interiors</h2>
                <p>Trust Dental offers turnkey projects to setup a new dental clinic or upgrade an existing one. <br/>Right from planning the layout to the color schemes to final installation and finishing touches.</p>

                <p>Every minute detail is taken care of while developing & commissioning with stringent control of quality during the entire process.</p>

                <p>We also undertake custom premium interior projects based on the requirement of the clients and promise to deliver the best outcome.</p>

                <p>We always thrive for our customer satisfaction and do anything for it. A happy customer is our best way for marketing. </p>
            </div>
        </div>

        <div className="interior-shades">
        <div className="color-grid">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            initial={{ opacity: 0, y: 50 }} // Start hidden
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger only once
          />
        ))}
      </div>
         <motion.div
         className="text-overlay"
         initial={{ opacity: 0, y: 20, x: -680 }}
         whileInView={{ opacity: 1, y: -60, x:-700}}
         transition={{ duration: 0.65, delay: colors.length * 0.1 }} // Delay after all colors
         viewport={{ once: true }}
         >
                <h2>Choice of shades</h2>
                <p>GP & co offers turnkey projects to setup a new dental clinic or upgrade an existing one. Right from planning the layout to the colour schemes to final installation and finishing touches.<br/>
                Every minute detail is taken care of while developing & commissioning with stringent control of quality during the entire process.</p>

            </motion.div>
        </div>

        <div className="interior-equipment">
            <div className="equipment-grid">
              <img src={interiorequip01} alt="" />
              <img src={interiorequip02} alt="" />
            </div>
            <div className="chair">
              <img src={chair} alt="" />
            </div>
            <div className="interior-eqipment-text">
              <h2>Equipment</h2>
              <p><span>{">>"}</span>Dentist's Stool with multifuntional features and movements.</p>
              <p><span>{">>"}</span>Dental Cabinet, designed to suit the Dentist's operational needs.</p>
              <p><span>{">>"}</span>Treatment units available in different models.</p>
            </div>
          </div>

        <div className="interior-gallery">
          <div className="gallery-header">
            <h1>Gallery</h1>
            <p>A sneak peak into our recent projects and ongoing projects.</p>
          </div>

          <div className="grid-container-interior">
              <div className="grid-column-interior">
                <img className='img1' src={interiorImg01} alt="interior 1" />
                <img className='img2' src={interiorImg02} alt="interior 2" />
              </div>
              <div className="grid-column-interior">
                <img className='img3' src={interiorImg03} alt="interior 3" />
                <img className='img4' src={interiorImg04} alt="interior 4" />
          </div>
        </div>
    </div>

  </div>
  )
}

export default Interiors