import React, { useRef, useEffect } from 'react';
import './AboutUs.css';
import { CgArrowRightR } from 'react-icons/cg';
import aboutusphoto from '../../assets/aboutus.jpg';
import { Link } from 'react-router-dom';

function AboutUs() {
    const aboutUsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    aboutUsRef.current.classList.add('visible');
                    observer.unobserve(aboutUsRef.current); // Stop observing after animating
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (aboutUsRef.current) {
            observer.observe(aboutUsRef.current);
        }

        return () => {
            if (aboutUsRef.current) {
                observer.unobserve(aboutUsRef.current);
            }
        };
    }, []);

    return (
        <div className="about-us" id="aboutus" ref={aboutUsRef}>
            <div className="about-us-left">
                <img className="aboutus-image" src={aboutusphoto} alt="aboutus image" />
            </div>
            <div className="about-us-right">
                <h2>About us</h2>
                <p>
                    GP & co® was started in early 2008 with a focus on dental supply as a core
                    market segment and is moving aggressively to cover all products in this
                    segment. Our main aim is to provide quality services that encompass the
                    entire gamut of dental supply markets.
                </p>
                <h3>Our products and services include:</h3>
                <ul>
                    <li>
                        <span>Dental Equipment:</span> We offer a wide range of dental
                        equipment, including chairs, X-ray machines, and sterilization
                        units.
                    </li>
                    <li>
                        <span>Dental Instruments:</span> Our selection of dental instruments
                        includes handpieces, forceps, and mirrors.
                    </li>
                    <li>
                        <span>Dental Materials:</span> We provide a variety of dental
                        materials, such as composites, cements, and impression materials.
                    </li>
                    <li>
                        <span>Dental Consumables:</span> Our range of dental consumables
                        includes gloves, masks, and disinfectants.
                    </li>
                </ul>
                <Link to="/aboutus">
                    <button className="btn">
                        About us <CgArrowRightR />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AboutUs;
