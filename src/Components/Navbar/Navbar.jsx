import React, { useRef,useState, useEffect } from 'react'
import "./Navbar.css"
import { Link ,useLocation} from 'react-router';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

    const menuRef=useRef();
    const location =useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
  };
  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth > 768) {
              setIsMobileMenuOpen(false);
          }
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div
                className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            >
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {location.pathname!=='/' && (<li><Link to='/'onClick={closeMobileMenu}>Home</Link></li>
          )}
            <li> <HashLink smooth to="/#aboutus" className="navbar-link" style={{textDecoration:'none'}}onClick={closeMobileMenu}>About Us</HashLink></li>
            <li><Link to="/products" className="navbar-link" style={{textDecoration:'none'}} onClick={closeMobileMenu}>Products</Link></li>
            <li><Link to="/interiors" className="navbar-link" style={{textDecoration:'none'}}onClick={closeMobileMenu}>Interiors</Link></li>
            <li><Link to="/contact" className="navbar-link" style={{textDecoration:'none'}}onClick={closeMobileMenu}>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar