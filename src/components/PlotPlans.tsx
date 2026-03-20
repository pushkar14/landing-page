import React, { useState } from 'react';
import './PlotPlans.css';

const PlotPlans: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = '/landing-page/images/DwarikaCityPlottingPlan.png';

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className="section plot-plans" id="plots">
      <div className="container">
        <div className="section-title">
          <h2>Plot Plans</h2>
          <p>Choose from a range of plot sizes tailored to suit every need and budget</p>
          <div className="accent-line" />
        </div>
        <div className="plot-plans__content">
          <img 
            src={imageSrc} 
            alt="Dwarika City Plotting Plan" 
            className="clickable-image"
            onClick={handleOpenModal}
          />
        </div>
        <div className="plot-plans__cta">
          <button className="btn-primary">Download Full Layout Plan</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="image-modal-overlay" onClick={handleCloseModal}>
          <button className="image-modal-close" onClick={handleCloseModal} aria-label="Close modal">
            &times;
          </button>
          <img 
            src={imageSrc} 
            alt="Dwarika City Plotting Plan Zoomed" 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PlotPlans;
