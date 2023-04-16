import React from 'react';

export const ContactForm = () => {
  return (
    <section id="contact" className="contact-form">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};
