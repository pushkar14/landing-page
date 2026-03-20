import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/landing-page/images/DwarikaCityLogo.png" alt="Dwarika City Logo" style={{ height: '40px' }} />
              <span className="footer__logo-text">Dwarika City</span>
            </div>
            <p className="footer__tagline">
              Your trusted partner in real estate. Building dreams, one plot at a time.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/dwarikacitybihta" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/dwarikacitybihta/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@dwarikacitybihta" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/acresinfrahomespvtltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
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
              <li>+91-9241399171</li>
              <li>hello@dwarikacity.in</li>
              <li>Dwarika City</li>
              <li>Bihta, Bihar</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 Dwarika City. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
