import React from 'react';
import './PlotPlans.css';

const plots = [
  { size: '900', label: 'Compact', dimensions: '30 x 30 ft', ideal: 'Perfect starter plot' },
  { size: '1200', label: 'Standard', dimensions: '30 x 40 ft', ideal: 'Most popular choice' },
  { size: '1500', label: 'Premium', dimensions: '30 x 50 ft', ideal: 'Spacious family living' },
  { size: '1800', label: 'Luxury', dimensions: '36 x 50 ft', ideal: 'Premium lifestyle' },
  { size: '2400+', label: 'Estate', dimensions: '40 x 60 ft', ideal: 'Grand living space' },
];

const PlotPlans: React.FC = () => {
  return (
    <section className="section plot-plans" id="plots">
      <div className="container">
        <div className="section-title">
          <h2>Plot Plans</h2>
          <p>Choose from a range of plot sizes tailored to suit every need and budget</p>
          <div className="accent-line" />
        </div>
        <div className="plot-plans__grid">
          {plots.map((plot, index) => (
            <div className="plot-card" key={index}>
              <div className="plot-card__size">{plot.size}</div>
              <div className="plot-card__unit">sq.ft</div>
              <div className="plot-card__label">{plot.label}</div>
              <div className="plot-card__dimensions">{plot.dimensions}</div>
              <div className="plot-card__ideal">{plot.ideal}</div>
            </div>
          ))}
        </div>
        <div className="plot-plans__cta">
          <button className="btn-primary">Download Full Layout Plan</button>
        </div>
      </div>
    </section>
  );
};

export default PlotPlans;
