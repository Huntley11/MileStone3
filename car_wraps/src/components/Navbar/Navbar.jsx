import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
      <nav className={`navbar ${showMenu ? 'active' : ''}`}>
        <div className="hamburger" onClick={handleToggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
        <div className={`menu ${showMenu ? 'active' : ''}`}>
          <Link to="/" onClick={handleToggleMenu}>
          <h1>Car Wraps R Us</h1>
          </Link>
          <Link to="/about" onClick={handleToggleMenu}>
            About
          </Link>
          <Link to="/Appointment" onClick={handleToggleMenu}>
            Appointment
          </Link>
          <Link to="/sign-up" onClick={handleToggleMenu}>
            Sign Up
          </Link>
          <Link to="/Login" onClick={handleToggleMenu}>
            Login
          </Link>
        </div>
      </nav>
  );
}

export default Navbar;