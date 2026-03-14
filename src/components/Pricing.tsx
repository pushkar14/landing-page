import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Transparent Pricing</h2>
          <p>Clear and straightforward pricing with no hidden charges</p>
          <div className="accent-line" />
        </div>
        <div className="pricing__cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__type">Main Road Plots</span>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">Rs</span>
                <span className="pricing-card__amount">2,450</span>
                <span className="pricing-card__per">/ sq.ft</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Front-facing main road access</li>
              <li>20 ft wide road connectivity</li>
              <li>Higher visibility and commercial potential</li>
              <li>Available in 900-2400+ sq.ft</li>
              <li>Immediate registry and possession</li>
            </ul>
            <button className="btn-primary" style={{ width: '100%' }}>Get Detailed Quote</button>
          </div>

          <div className="pricing-card pricing-card--featured">
            <div className="pricing-card__badge">Most Popular</div>
            <div className="pricing-card__header">
              <span className="pricing-card__type">Branch Road Plots</span>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">Rs</span>
                <span className="pricing-card__amount">2,250</span>
                <span className="pricing-card__per">/ sq.ft</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Internal branch road access</li>
              <li>16 ft wide road connectivity</li>
              <li>Peaceful and quiet location</li>
              <li>Available in 900-2400+ sq.ft</li>
              <li>Immediate registry and possession</li>
              <li>Easy EMI options available</li>
            </ul>
            <button className="btn-accent" style={{ width: '100%' }}>Get Detailed Quote</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__type">Corner Plots</span>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">Rs</span>
                <span className="pricing-card__amount">2,600</span>
                <span className="pricing-card__per">/ sq.ft</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Premium corner locations</li>
              <li>Two-side open plots</li>
              <li>Maximum sunlight and ventilation</li>
              <li>Available in select sizes</li>
              <li>Immediate registry and possession</li>
            </ul>
            <button className="btn-primary" style={{ width: '100%' }}>Get Detailed Quote</button>
          </div>
        </div>

        <div className="pricing__note">
          <p>Plot sizes available: 900 / 1200 / 1500 / 1800 / 2400+ sq.ft</p>
        </div>

        <div className="pricing__download">
          <button className="btn-outline">Download Full Payment Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
