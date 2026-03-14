import React from 'react';
import './Amenities.css';

const amenities = [
  {
    icon: '🏛',
    title: 'Grand Entrance Gate',
    desc: 'Architecturally designed main gate with modern security infrastructure.',
  },
  {
    icon: '🧱',
    title: 'Boundary Wall',
    desc: 'Complete perimeter fencing for safety and privacy of all residents.',
  },
  {
    icon: '🏞',
    title: 'Landscaped Parks',
    desc: 'Lush green open spaces for families to relax and children to play.',
  },
  {
    icon: '👮',
    title: '24/7 Security',
    desc: 'Round-the-clock security guards with surveillance monitoring.',
  },
  {
    icon: '💡',
    title: 'Street Lighting',
    desc: 'Well-lit roads and pathways ensuring safety and visibility at night.',
  },
  {
    icon: '📹',
    title: 'CCTV Surveillance',
    desc: '24x7 CCTV cameras at all strategic points throughout the township.',
  },
  {
    icon: '🚰',
    title: 'Drainage System',
    desc: 'Modern underground drainage for efficient water management.',
  },
  {
    icon: '🛣',
    title: 'Wide Roads',
    desc: '20 ft main roads and 16 ft branch roads for smooth connectivity.',
  },
  {
    icon: '🕌',
    title: 'Community Space',
    desc: 'Dedicated area for community gatherings and cultural activities.',
  },
];

const Amenities: React.FC = () => {
  return (
    <section className="section amenities" id="amenities">
      <div className="container">
        <div className="section-title">
          <h2>World-Class Amenities</h2>
          <p>Every detail thoughtfully designed for comfortable and secure living</p>
          <div className="accent-line" />
        </div>
        <div className="amenities__grid">
          {amenities.map((item, index) => (
            <div className="amenity-card" key={index}>
              <div className="amenity-card__icon">{item.icon}</div>
              <h3 className="amenity-card__title">{item.title}</h3>
              <p className="amenity-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
