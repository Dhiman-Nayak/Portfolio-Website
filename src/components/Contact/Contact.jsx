import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  //   // Handle form submission (e.g., send data to backend or use an API like EmailJS)
  //   setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xnnarbzz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({ name: '', email: '', message: '' });
          console.log('Message sent successfully');
        } else {
          console.log('Form submission failed');
        }
      })
      .catch((error) => console.error('Error:', error));
  };
  return (
    <div className=''>
      <div>
        <div className="contact-container w-80 md:w-5/12 mt-4 -z-10">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

        </div>
        <div className="social-icons ">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon github-icon" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon linkedin-icon" />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram-icon" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="icon twitter-icon" />
          </a>

        </div>
      </div>

    </div>
  );


};

export default Contact;
