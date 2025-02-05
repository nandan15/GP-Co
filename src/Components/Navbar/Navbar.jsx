import React, { useRef } from 'react'
import "./Navbar.css"
import { Link ,useLocation} from 'react-router';

function Navbar() {

    const menuRef=useRef();
    const location =useLocation()

  return (
    <div className='navbar'>
        <div className='logo'>

        </div>

        <ul ref={menuRef} className='nav-menu'>
          {location.pathname!=='/' && (<li><Link to='/'>Home</Link></li>
          )}
            <li> <Link to="/aboutus" className="navbar-link" style={{textDecoration:'none'}}>About Us</Link></li>
            <li>Products</li>
            <li><Link to="/interiors" className="navbar-link" style={{textDecoration:'none'}}>Interiors</Link></li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar