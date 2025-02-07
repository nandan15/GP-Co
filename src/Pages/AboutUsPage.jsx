import React from 'react'
import './Css/AboutUsPage.css'
import contentImage from '../assets/close-up-boy-dentist.jpg'
import handTogether from '../assets/hands-together.jpg'
function AboutUsPage() {
  return (
    <div className="about-us-page">
        <div className="about-us-hero">
            <h1>ABOUT US</h1>
        </div>
        <div className="about-us-content">
            <div className="about-us-image">
                <img src={contentImage} alt="About Us Image"/>
            </div>
            <div className="about-us-text">
                <p>Started in the year 2004, with an aim to be recognized in the industry world wide, Trust Dental® is a firm established by Mr.GP kumar under Indian laws with its corporate base at Bangalore. The said corporate name was adopted to reflect the amount of "Trust" which command among the dental fraternity and thus resulting in expanding base of business, which now encompasses almost the entire gamut of dental supply markets. We put our experiences of working on Dental chairs, the pros and cons that a dentist undergoes while treating a patient, things we taken into care and ideas put forward to create good quality dental chairs.​​</p>
                <p>With about 20 plus years of experience, both of them have a broader work picture and in depth understanding of dental field. Today in the year 2016 we have been notable dealers covering nearly half of India, we are one among the leading manufacturers of all kinds of dental chairs and equipment’s. Our company is an ISO certified company, recognized by dealers and doctors through out the country.</p>
                <p>It is almost 15 years since we’re committed to manufacturing innovative and high-quality surgical, endodontic, and portable dental products.</p>
            </div>
        </div>

        <div className="about-us-mission">
            <div className="mission-text">
                <h2>MISSION</h2>
                <p>GP & Co is born with a noble mission- the mission is to assemble the trade communities of all the states of India under one common platform,
                     the mission is to contribute to the development of national business, thereby contributing to the economic development of the respective states.
                      We are committed to assist all our registered members in locating and communicating with new business partners from across the nation. 
                      GP & Co always and continually strives to set the standard for excellence in the dental equipment industry, advancing dental technology with products 
                      that are unrivaled in quality and innovation. In every interaction, we aim to treat our customers and employees with respect, offering superior service in a friendly, professional, and productive manner.</p>
            
                <p>GP & Co is born with a noble mission- the mission is to assemble the trade communities of all the states of India under one common platform,
                     the mission is to contribute to the development of national business, thereby contributing to the economic development of the respective states.
                      We are committed to assist all our registered members in locating and communicating with new business partners from across the nation. 
                      GP & Co always and continually strives to set the standard for excellence in the dental equipment industry, advancing dental technology with products 
                      that are unrivaled in quality and innovation. In every interaction, we aim to treat our customers and employees with respect, offering superior service in a friendly, professional, and productive manner.</p>    
            </div>
            <div className="mission-image">
                <img src={handTogether} alt="hands together" />
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage