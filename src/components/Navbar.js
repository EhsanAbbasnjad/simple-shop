import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setDropdownOpen(false);
    }
  };

  const closeMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenus}>فروشگاه من</Link>
      </div>

      <div className="burger-icon" onClick={toggleMobileMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/about" onClick={closeMenus}>درباره ما</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenus}>تماس با ما</Link>
        </li>
        <li className="dropdown-toggle" onClick={toggleDropdown}>
          محصولات <span style={{ fontSize: '0.7rem' }}>{dropdownOpen ? '▲' : '▼'}</span>
          <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
            <li>
              <Link to="/khamir-band-keshi" onClick={closeMenus}>
                خمیر بندکشی
              </Link>
            </li>
            <li>
              <Link to="/rang-ayegh-acrlic" onClick={closeMenus}>
                رنگ و عایق آکریلیک
              </Link>
            </li>
            <li>
              <Link to="/rezin-ab-bandi" onClick={closeMenus}>
                رزین آب‌بندی
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
