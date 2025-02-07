import React from 'react'
import './AboutUs.css'
import { CgArrowRightR } from "react-icons/cg";
import aboutusphoto from '../../assets/aboutus.jpg'
import { Link } from 'react-router-dom'
function AboutUs() {
  return (
    <div className="about-us" id="aboutus">
        <div className="about-us-left">
          <img className="aboutus-img"src={aboutusphoto} alt="aboutus image" />
        </div>
        <div className="about-us-right">
            <h1>About us</h1>
            <p>GP & co® was started in early 2008 with a focus on dental supply as a core market segment and is moving aggressively to cover all products in this segment. Our main aim is to provide quality services that encompass the entire gamut of dental supply markets.</p>
            <h3>Our products and services include :</h3>
            <ul>
                <li> <span> <CgArrowRightR /> Consumable Products :</span>  Basic and advanced technology dental equipment</li>
                <li><span> <CgArrowRightR /> Value-Added Supplies / Services :</span> to dentists, dental laboratories, and dental colleges.</li>
            </ul>
            <div>
              <Link to="/aboutus" className="btn">
                VIEW MORE {">>"}
              </Link>
            </div>

        </div>
    </div>
  )
}

export default AboutUs