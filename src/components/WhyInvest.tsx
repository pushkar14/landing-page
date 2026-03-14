import React from 'react';
import './WhyInvest.css';

const reasons = [
  {
    icon: '📍',
    title: 'Premium Location',
    desc: 'Plots located on a 220ft wide Airport Road with direct connectivity to all major landmarks.',
  },
  {
    icon: '✈️',
    title: 'Near International Airport',
    desc: 'Just 3.6 KM from the upcoming international airport -- a guaranteed value multiplier.',
  },
  {
    icon: '🏥',
    title: 'Essential Services Nearby',
    desc: 'Government hospital, railway station, 6-lane highway, and top schools within 7 KM radius.',
  },
  {
    icon: '🛤',
    title: 'Elevated Road Access',
    desc: 'Connected to the new elevated highway corridor, only 3.5 KM away for seamless travel.',
  },
  {
    icon: '📈',
    title: 'High Appreciation',
    desc: 'Rapid infrastructure development in the area ensures strong long-term value appreciation.',
  },
  {
    icon: '✅',
    title: '100% Legal & Verified',
    desc: 'All plots are dispute-free with clear titles. Complete documentation available for verification.',
  },
];

const WhyInvest: React.FC = () => {
  return (
    <section className="section why-invest" id="invest">
      <div className="container">
        <div className="section-title">
          <h2>Why Invest With Us?</h2>
          <p>Smart reasons to choose our township for your next investment</p>
          <div className="accent-line" />
        </div>
        <div className="why-invest__grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-card__icon">{reason.icon}</div>
              <div className="reason-card__content">
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
