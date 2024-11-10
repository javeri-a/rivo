"use client"

import React from 'react';
import './contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-info-section">
        <h1 className="brand-title">Rivo Clothing</h1>
        <p className="brand-description">
          Connecting fashion with comfort. Reach out to us for any inquiries, collaborations, or feedback. We’re here to help!
        </p>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>📍 123 Fashion St, Karachi, Pakistan</p>
          <p>📧 support@rivoclothing.com</p>
          <p>📞 +92 123 4567890</p>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows={Number("5")} placeholder="Your message"></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
