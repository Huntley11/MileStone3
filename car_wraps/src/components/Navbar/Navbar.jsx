import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    console.log('useEffect triggered:', isAuthenticated);
  }, [isAuthenticated]);
  

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
        <Link to="/Profile" onClick={handleToggleMenu}>
          Profile
        </Link>
        {isAuthenticated ? (
          // Show the user's profile information if authenticated
          <div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        ) : (
          // Show the login button if not authenticated
          <button
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect() }
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;