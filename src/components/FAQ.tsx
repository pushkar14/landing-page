import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Where exactly is GreenVista Township located?',
    a: 'GreenVista Township is located near the upcoming international airport, approximately 5 KM from the main town center. It is well-connected via a 220ft wide airport road.',
  },
  {
    q: 'Do you provide immediate registry and possession?',
    a: 'Yes, we provide immediate registry and possession for all plots. Once your payment is complete, registry can be done within a few working days.',
  },
  {
    q: 'What is the distance from major transport hubs?',
    a: 'The township is 6 KM from the railway station, 18 KM from the main city junction, and 3.5 KM from the new elevated highway corridor.',
  },
  {
    q: 'What important facilities are near the township?',
    a: 'Within a 10 KM radius you will find a government hospital, engineering colleges, bus terminal, police camp, factories, and more.',
  },
  {
    q: 'Is there any legal dispute on the land?',
    a: 'No. All plots are completely dispute-free with clear titles. You can verify all documentation at our office before making any purchase. We encourage independent legal verification.',
  },
  {
    q: 'What payment options are available?',
    a: 'We offer flexible payment plans including EMI options for up to 12 months. Token amount is 10%, agreement at 50%, and complete registry at 100% payment.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before investing</p>
          <div className="accent-line" />
        </div>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
              key={index}
            >
              <button
                className="faq-item__question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.q}</span>
                <span className="faq-item__icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-item__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
