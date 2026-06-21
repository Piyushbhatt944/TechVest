import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          TechVest
        </NavLink>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="navbar-link" onClick={() => setIsOpen(false)}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/showcase" className="navbar-link" onClick={() => setIsOpen(false)}>
              Showcase
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-login-btn" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
