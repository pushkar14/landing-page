import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section contact-form" id="contact">
      <div className="container">
        <div className="contact-form__content">
          <div className="contact-form__info">
            <div className="section-title" style={{ textAlign: 'left' }}>
              <h2>Get in Touch</h2>
              <div className="accent-line" style={{ margin: '16px 0 0' }} />
            </div>
            <p className="contact-form__desc">
              Fill in your details and we'll send you all the project information
              on WhatsApp and follow up with a call.
            </p>
            <div className="contact-form__details">
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-detail__label">Call Us</span>
                  <span className="contact-detail__value">+91-9241399171</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-detail__label">Email</span>
                  <span className="contact-detail__value">hello@dwarikacity.in</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <span className="contact-detail__label">Office Address</span>
                  <span className="contact-detail__value">Dwarika City, Bihta, Bihar</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form__form-wrapper">
            <form className="contact-form__form" onSubmit={handleSubmit}>
              <h3>Request Project Details</h3>
              <div className="form-group">
                <label htmlFor="name">Your Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
              </div>
              <button
                type="submit"
                className={`btn-accent contact-form__submit ${submitted ? 'submitted' : ''}`}
              >
                {submitted ? 'Details Sent!' : 'Get Details on WhatsApp'}
              </button>
              <p className="contact-form__privacy">100% Privacy Guaranteed</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
