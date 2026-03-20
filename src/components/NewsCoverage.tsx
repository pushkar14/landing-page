import React, { useState } from 'react';
import './NewsCoverage.css';

const NewsCoverage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleOpenModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const images = [
    { src: '/landing-page/images/paper1.png', alt: 'Bihta news coverage 1' },
    { src: '/landing-page/images/paper2.png', alt: 'Bihta news coverage 2' },
    { src: '/landing-page/images/paper3.png', alt: 'Bihta news coverage 3' },
    { src: '/landing-page/images/paper4.png', alt: 'Bihta news coverage 4' },
  ];

  return (
    <section className="section news-coverage" id="news">
      <div className="container">
        <div className="section-title">
          <h2>Bihta में Property में  - INVESTMENT क्यों करें?</h2>
          <div className="accent-line" />
        </div>
        
        <div className="news-grid">
          {images.map((image, index) => (
            <div className="news-card" key={index} onClick={() => handleOpenModal(image.src)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="image-modal-overlay" onClick={handleCloseModal}>
          <button className="image-modal-close" onClick={handleCloseModal} aria-label="Close modal">
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="News coverage zoomed" 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default NewsCoverage;
