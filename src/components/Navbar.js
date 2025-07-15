import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './Navbar.css';

const productsDropdownItems = [
  { label: 'بتونه نانو', path: '/batune-nano' },
  { label: 'مادر رنگ', path: '/madar-rang' },
  { label: 'رنگ دکوراتیو', path: '/rang-decorative' },
  { label: 'رزین آببندی', path: '/rezin-abbandi' },
];

function DropdownMenu({ items, isOpen, onClose }) {
  return (
    <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      {items.map(({ label, path }, idx) => (
        <li key={idx}>
          <Link to={path} onClick={onClose}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

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
      <div className="navbar-logo-container">
        <img
          src="/img/STA_LOGO_PNG.png"
          alt="لوگو فروشگاه"
          className="logo-img"
        />
        <Link to="/" onClick={closeMenus} className="home-icon-wrapper">
          <AiFillHome size={24} className="home-icon" />
        </Link>
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
               <li>
          <Link to="/contact" onClick={closeMenus}>نمونه کار</Link>
        </li>

        <li className="dropdown-toggle" onClick={toggleDropdown}>
          محصولات <span style={{ fontSize: '0.7rem' }}>{dropdownOpen ? '▲' : '▼'}</span>
          <DropdownMenu items={productsDropdownItems} isOpen={dropdownOpen} onClose={closeMenus} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
