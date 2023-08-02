import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import HomePage from '../HomePage';
import About from '../About'
import Login from '../Login';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Router>
      <div className={`navbar ${showMenu ? 'active' : ''}`}>
        <div className="hamburger" onClick={handleToggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`menu ${showMenu ? 'active' : ''}`}>
          <Link to="/" onClick={handleToggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={handleToggleMenu}>
            About
          </Link>
          <Link to="/appointment" onClick={handleToggleMenu}>
            Appointment
          </Link>
          <Link to="/sign-up" onClick={handleToggleMenu}>
            Sign Up
          </Link>
          <Link to="/signin" onClick={handleToggleMenu}>
            Log In
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>} />
        {/* <Route path="/appointment" element={Appointment} />
        <Route path="/sign-up" element={SignUp} /> */}
        <Route path="/login" element={<Login/>} />
      </Routes>
      
    </Router>
  );
}

export default Navbar;