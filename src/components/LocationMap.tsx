import React from 'react';
import './LocationMap.css';

const distances = [
  { place: 'International Airport', distance: '3.5 Km' },
  { place: 'Railway Station', distance: '6 Km' },
  { place: 'Ring Road Bypass', distance: '4 Km' },
  { place: 'Bus Terminal', distance: '4.5 Km' },
  { place: 'Government Hospital', distance: '7 Km' },
  { place: 'Engineering College', distance: '10 Km' },
  { place: 'Elevated Highway', distance: '3.5 Km' },
  { place: 'City Center', distance: '18 Km' },
];

const LocationMap: React.FC = () => {
  return (
    <section className="section location-map" id="location">
      <div className="container">
        <div className="section-title">
          <h2>Prime Location</h2>
          <p>Strategically situated with excellent connectivity to key landmarks</p>
          <div className="accent-line" />
        </div>
        <div className="location-map__content">
          <div className="location-map__embed">
            <div className="location-map__placeholder">
              <div className="location-map__pin">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p>Interactive Map</p>
              <span>Click to view on Google Maps</span>
            </div>
          </div>
          <div className="location-map__distances">
            <h3>Key Distances</h3>
            <div className="location-map__list">
              {distances.map((item, index) => (
                <div className="distance-item" key={index}>
                  <span className="distance-item__place">{item.place}</span>
                  <span className="distance-item__dots" />
                  <span className="distance-item__value">{item.distance}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ marginTop: '24px', width: '100%' }}>
              Download Location Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
