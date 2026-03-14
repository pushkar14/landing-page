import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content container">
        <div className="hero__badge">Premium Residential Plots</div>
        <h1 className="hero__title">
          Your Dream Home <br />
          Starts With the <span>Perfect Plot</span>
        </h1>
        <p className="hero__subtitle">
          Invest in prime residential plots at GreenVista Township -- strategically
          located near the upcoming international airport, with world-class amenities
          and guaranteed appreciation.
        </p>

        <div className="hero__media-row">
          <div className="hero__video">
            <iframe
              src="https://www.youtube.com/embed/fUIbGIh9DzM"
              title="GreenVista Township - Project Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="hero__info-card">
            <div className="hero__info-section">
              <h3 className="hero__info-heading">Rate</h3>
              <ul className="hero__info-list">
                <li>
                  <strong>Rs 2450/-</strong> per sq.ft
                  <span>(On Main Road)</span>
                </li>
                <li>
                  <strong>Rs 2250/-</strong> per sq.ft
                  <span>(On Branch Road)</span>
                </li>
              </ul>
            </div>
            <div className="hero__info-divider" />
            <div className="hero__info-section">
              <h3 className="hero__info-heading">Size</h3>
              <ul className="hero__info-list">
                <li>900 / 1200 / 1500 / 1800 / 2400+ sq.ft</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero__highlights">
          <div className="hero__highlight">
            <span className="hero__highlight-value">Ready to Move</span>
            <span className="hero__highlight-label">Immediate Registry</span>
          </div>
          <div className="hero__highlight-divider" />
          <div className="hero__highlight">
            <span className="hero__highlight-value">100% Genuine</span>
            <span className="hero__highlight-label">Verified Plots</span>
          </div>
          <div className="hero__highlight-divider" />
          <div className="hero__highlight">
            <span className="hero__highlight-value">Easy EMI</span>
            <span className="hero__highlight-label">Up to 12 Months</span>
          </div>
        </div>
        <div className="hero__actions">
          <a href="#contact" className="btn-accent">
            Get Details on WhatsApp
          </a>
          <a href="#pricing" className="btn-outline hero__btn-outline">
            View Pricing
          </a>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
