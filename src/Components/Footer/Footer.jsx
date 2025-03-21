import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link ,useLocation} from 'react-router';
import { HashLink } from 'react-router-hash-link';
function Footer() {

  const location =useLocation();
  return (
    <div className="footer-container">
      {/* Left Side (Black) */}
      <div className="footer-left">
        {/* Logo in red */}
        <img src={logo} alt="Logo" className="footer-logo" />

        {/* "Follow us on" and social icons */}
        <div className="footer-follow">
          <p>Follow us on</p>
          <div className="social-icons">
            {/* Replace these spans with actual icons (e.g., FontAwesome) */}
            <span><FaFacebook /></span>
            <span><FaXTwitter /></span>
            <span><FaInstagram /></span>
            <span><FaLinkedin /></span>
          </div>
        </div>

        {/* Disclaimer at the bottom */}
        <p className="footer-disclaimer">
          All information is subject to market conditions.
          <br />
          © 2010 to 2030, All rights reserved.
        </p>
      </div>

      {/* Right Side (Blue) */}
      <div className="footer-right">

        <h3 className="get-in-touch-title">Get in Touch</h3>
        <p className="contact-info"><span className="contact-icon"><FaPhoneAlt /></span>  +91 8880 222 111</p>
        <p className="contact-info"><span className="contact-icon"><IoMail /></span>gmail@gmail.com</p>
        <p className="contact-info"><span className="contact-icon"> <FaLocationDot /></span>
          #252, Shop #1/3, 3rd main road, <br />
          Raja Nagar Industrial Estate, <br />
          RajaNagar Bengaluru - 560110
        </p>
      </div>
    </div>
  );
};

export default Footer