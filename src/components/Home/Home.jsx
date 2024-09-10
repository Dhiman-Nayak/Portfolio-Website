// src/Description.js
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaInstagram } from "react-icons/fa";
import Alert from "../Others/Alert"
const Home = () => {
  

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1, ease: "easeOut" } }
  };


  return (
    <div className="container mx-auto my-8 px-4 bg-transparent rounded-xl shadow-2xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:py-8">
        
        {/* Text Section */}
        <motion.div 
          className='w-full md:w-1/2 text-center md:text-left md:pl-40'
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className=" text-white  mb-6 font-serif text-2xl md:text-3xl">
            Hi, I'm<br />
            <span className='text-purple-400  inline-block mt-2 font-medium  text-4xl md:text-5xl'
              style={{ textShadow: '2px 2px 4px rgba(138, 43, 226, 0.6)' }}
            >Dhiman Nayak
            </span>
          </h1>
          
          <div className="text-xl text-gray-300 mb-8 leading-relaxed">
            I'm Full Stack Developer
          </div>
          <Link to="/contact">
          <motion.button
            className="border-2 border-purple-700 hover:bg-purple-700 hover:opacity-80 text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out transform  "
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
          >
            Contact me
          </motion.button>
          </Link>
        </motion.div>
  
        {/* Image and Icons */}
        <div className="flex items-start justify-center md:space-x-8 mb-12 md:mb-0">
          <motion.img
            src="IMG20240828202308-Photoroom.png"
            alt="Dhiman Nayak"
            className="w-56 h-96 md:w-80 md:h-1/2 rounded-full border-4 border-purple-400 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
  
          {/* Social Media Icons with Vertical Line */}
          <div className="md:flex flex-col items-center space-y-4 ml-6 hidden ">
            <div className="w-px h-16 bg-purple-400 "></div>
            <motion.div 
              className="flex flex-col space-y-6"
              initial="hidden"
              animate="visible"
              variants={iconVariants}
            >
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="transform transition duration-500 hover:scale-125">
                <FaSquareXTwitter className="text-gray-500 hover:text-[#1DA1F2] w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="transform transition duration-500 hover:scale-125">
                <FaLinkedin className="text-gray-500 hover:text-[#0077B5] w-6 h-6" />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="transform transition duration-500 hover:scale-125">
                <FaInstagram className="text-gray-500 hover:text-white hover:rounded-lg instagram-icon w-6 h-6" />
              </a>
            </motion.div>
            {/* <div className="w-px h-16 bg-purple-400"></div> */}
          </div>
        </div>
      </div>
      <Alert message={"ok"} type={"success"} onClose={() => setShowAlert(false)} />
    </div>
  );
};

export default Home;
