import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Plot Plans', href: '#plots' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#home" className="navbar__logo">
          <img src="/landing-page/images/DwarikaCityLogo.png" alt="Dwarika City" className="navbar__logo-img" />
          <span className="navbar__logo-text">Dwarika City</span>
        </a>
        <button
          className={`navbar__toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta">
            <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
