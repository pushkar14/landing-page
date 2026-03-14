import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">GV</span>
              <span className="footer__logo-text">GreenVista Township</span>
            </div>
            <p className="footer__tagline">
              Your trusted partner in real estate. Building dreams, one plot at a time.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#plots">Plot Plans</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4>Contact</h4>
            <ul>
              <li>Free Consultation</li>
              <li>+91-XXXXX-XXXXX</li>
              <li>info@greenvista.com</li>
              <li>GreenVista Township</li>
              <li>Main Road, PIN - XXXXXX</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 GreenVista Township. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
