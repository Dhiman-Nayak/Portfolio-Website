// import React from 'react';
// import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

// const ContactComponent = () => {
//   const socialLinks = [
//     { name: 'Email', icon: <FaEnvelope />, url: 'mailto:dhimannayak003@gmail.com', color: 'bg-red-500' },
//     { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/yourusername', color: 'bg-gray-800' },
//     { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', color: 'bg-blue-600' },
//     { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/yourusername', color: 'bg-blue-400' },
//     { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/yourusername', color: 'bg-pink-600' },
//   ];

//   return (
//     <div className=" min-h-screen flex items-center justify-center p-4">
//       <div className="bg-gray-200 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg w-full">
//         <h2 className="text-4xl font-extrabold text-center mb-6 text-white">Get in Touch</h2>
//         <p className="text-center text-gray-100 mb-8">
//           Let's connect! Reach out through any of these platforms.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {socialLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center justify-center p-4 rounded-lg ${link.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
//             >
//               <span className="mr-3 text-white text-2xl">{link.icon}</span>
//               <span className="font-medium text-white">{link.name}</span>
//             </a>
//           ))}
//         </div>
//         <div className="mt-12 text-center">
//           <p className="text-gray-200 mb-4">or send me a message directly</p>
//           <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300">
//             Contact Me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactComponent;

import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const socialLinks = [
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:your.email@gmail.com', color: 'bg-red-500' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/yourusername', color: 'bg-gray-800' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', color: 'bg-blue-600' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/yourusername', color: 'bg-blue-400' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/yourusername', color: 'bg-pink-600' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '', message: '' });
    setIsModalOpen(false);
  };

  return (
    <div className=" min-h-screen flex items-center justify-center p-4">
      <div className="contact-container backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        <h2 className="text-4xl font-medium text-center mb-6 text-white">Get in Touch</h2>
        <p className="text-center text-gray-100 mb-8">
          Let's connect! Reach out through any of these platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-4 rounded-lg hover:${link.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
            >
              <span className="mr-3 text-white text-2xl">{link.icon}</span>
              <span className="font-medium text-white">{link.name}</span>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-200 mb-4">or send me a message directly</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactComponent;