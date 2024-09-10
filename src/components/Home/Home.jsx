// src/Description.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaInstagram } from "react-icons/fa";

const Home = () => {
  const text = [
    "Welcome to My Portfolio!",
    "I'm currently diving into the world of React and blockchain development.",
  ];

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
          setDisplayText(text[textIndex].substring(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % text.length);
        }
      } else {
        if (charIndex < text[textIndex].length) {
          setDisplayText(displayText + text[textIndex].charAt(charIndex));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, charIndex, isDeleting, text, textIndex]);

  // Define animations for the image and text
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="container mx-auto my-10 text-center px-4 bg-transparent">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 bg-transparent">
      
      {/* Text Section for Mobile (below image on mobile) */}
      <div className='w-full sm:w-1/2'>
        <motion.h1
          className="text-3xl md:text-5xl text-[#d3bce9cd] font-bold mb-4 baskervville-sc-regular"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Hi, I'm <br />
          <span className='text-[#7c2cc7] pl-2 '
            style={{ textShadow: '4px 4px 8px #8A2BE2' }}
          > Dhiman Nayak</span>
        </motion.h1>
  
        {/* <motion.p
          className="md:text-lg text-green-200 kanit-regular-italic mt-4 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {displayText}
        </motion.p> */}
        <p>"Welcome to My Portfolio! <br />I'm currently diving into the world of React and blockchain development.",</p>
      </div>
  
      {/* Image and Icons */}
      <div className="flex items-center justify-center md:space-x-4 md:pb-0 pb-10">
        <motion.img
          src="IMG20240828202308-Photoroom.jpg"
          alt="Dhiman Nayak"
          className="w-96 h-2/5 rounded-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />
  
        {/* Social Media Icons */}
        <div className="flex flex-col space-y-4">
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="hover:text-[#1DA1F2] text-gray-600 w-6 h-6 " />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#0077B5] text-gray-600 w-6 h-6" />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[#E1306C] text-gray-600 w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Home;
