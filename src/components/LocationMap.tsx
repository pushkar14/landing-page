import React, { useState } from 'react';
import './LocationMap.css';

const LocationMap: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = '/landing-page/images/DwarikaCityLocationMap.png';

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="section location-map" id="location">
      <div className="container">
        <div className="section-title">
          <h2>Prime Location</h2>
          <p>Strategically situated with excellent connectivity to key landmarks</p>
          <div className="accent-line" />
        </div>
        <div className="location-map__content">
          <img 
            src={imageSrc} 
            alt="Dwarika City Location Map" 
            className="clickable-image"
            onClick={handleOpenModal}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="image-modal-overlay" onClick={handleCloseModal}>
          <button className="image-modal-close" onClick={handleCloseModal} aria-label="Close modal">
            &times;
          </button>
          <img 
            src={imageSrc} 
            alt="Dwarika City Location Map Zoomed" 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default LocationMap;
