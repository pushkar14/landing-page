import React from 'react';
import './BookingProcess.css';

const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    desc: 'Fill out the form on our website or call us directly to take the first step toward owning your dream plot.',
  },
  {
    number: '02',
    title: 'Visit Our Office',
    desc: 'Come to our office, learn about the project details, and understand every aspect of your investment.',
  },
  {
    number: '03',
    title: 'Site Visit',
    desc: 'Visit the plot location in person to see where your family and future will be rooted.',
  },
  {
    number: '04',
    title: 'Book Your Plot',
    desc: 'Reserve with 10% token amount. Pay 50% at agreement. Complete registry at 100% payment.',
  },
];

const BookingProcess: React.FC = () => {
  return (
    <section className="section booking-process" id="booking">
      <div className="container">
        <div className="section-title">
          <h2>Simple Booking Process</h2>
          <p>Four easy steps to secure your dream plot</p>
          <div className="accent-line" />
        </div>
        <div className="booking-process__steps">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-card__number">{step.number}</div>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.desc}</p>
              {index < steps.length - 1 && <div className="step-card__connector" />}
            </div>
          ))}
        </div>
        <div className="booking-process__payment">
          <div className="payment-info">
            <h3>Payment Milestones</h3>
            <div className="payment-info__items">
              <div className="payment-item">
                <span className="payment-item__label">Token Amount</span>
                <span className="payment-item__value">10%</span>
                <span className="payment-item__note">Reserve your plot</span>
              </div>
              <div className="payment-item">
                <span className="payment-item__label">Agreement</span>
                <span className="payment-item__value">50%</span>
                <span className="payment-item__note">Sign the agreement</span>
              </div>
              <div className="payment-item">
                <span className="payment-item__label">Registry</span>
                <span className="payment-item__value">100%</span>
                <span className="payment-item__note">Complete ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
