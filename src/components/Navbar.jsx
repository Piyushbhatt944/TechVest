import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          🚀 <span>TechVest</span>
        </NavLink>
        
        <div className="navbar-right-controls">
          {/* Theme Toggle Button */}
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" className="navbar-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="navbar-link" onClick={closeMenu}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/showcase" className="navbar-link" onClick={closeMenu}>
              Showcase
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar-login-btn" onClick={closeMenu}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
