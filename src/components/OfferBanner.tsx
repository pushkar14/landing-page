import React from 'react';
import './OfferBanner.css';

const OfferBanner: React.FC = () => {
  return (
    <section className="offer-banner">
      <div className="container">
        <div className="offer-banner__content">
          <div className="offer-banner__text">
            <span className="offer-banner__label">Limited Time Offer</span>
            <h3>Special Launch Pricing Available</h3>
            <p>
              Get exclusive discounted rates on select plots. Offer valid for a
              limited period only.
            </p>
          </div>
          <div className="offer-banner__cta">
            <a href="#contact" className="btn-accent">
              Claim Offer Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
