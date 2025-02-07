import React from 'react'
import './Css/ContactUs.css'
function ContactUs() {
  return (
    <div className="contact-us">
        <div className="contact-us-hero">
            <h1>CONTACT US</h1>
        </div>

        <div className="contact-container">
      <div className="contact-box">
        <div className="contact-details">
          <div className="detail">
            <span role="img" aria-label="phone">📞</span> - +91 - 8800 222 111
          </div>
          <div className="detail">
            <span role="img" aria-label="email">✉️</span> - gmailid@gmail.com
          </div>
          <div className="detail">
            <span role="img" aria-label="location">📍</span> - #25/2, Shop #11/9, 3rd Main road, Rajaji Nagar,
            Industrial Estate, Rajajinagar, Bengaluru - 560010
          </div>
        </div>
      </div>
      <div className="form-box">
        <h2 className="form-title">Get in Touch</h2>
        <p className="form-subtitle">Drop your details below and we'll get in touch with you!</p>
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Email id" className="input-field" />
        <input type="text" placeholder="Contact Number" className="input-field" />
        <textarea placeholder="Type your requirement here" className="textarea-field"></textarea>
        <button className="send-button">SEND ➤</button>
      </div>
    </div>
    </div>
  )
}

export default ContactUs