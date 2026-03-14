import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <div className="section-title" style={{ textAlign: 'left' }}>
              <h2>About Us</h2>
              <div className="accent-line" style={{ margin: '16px 0 0' }} />
            </div>
            <p className="about__intro">
              Welcome to your dream destination -- where the foundation for your
              family home and a smart investment opportunity come together.
            </p>
            <p>
              Our residential plots are strategically situated in upcoming prime
              locations, providing a secure and peaceful foundation for your
              family's future, along with strong long-term profitability and
              assured value appreciation.
            </p>
            <p>
              Our vision is to give every family the opportunity to build their own
              home and every investor an asset that strengthens and secures their
              future. Here you'll find transparency, trust, and reliability.
            </p>
            <div className="about__tagline">Your Trusted Partner in Real Estate</div>
          </div>
          <div className="about__stats">
            <div className="stat-card">
              <span className="stat-card__value">500+</span>
              <span className="stat-card__label">Plots Available</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">200+</span>
              <span className="stat-card__label">Happy Families</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">100%</span>
              <span className="stat-card__label">Legal Compliance</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">5+</span>
              <span className="stat-card__label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
