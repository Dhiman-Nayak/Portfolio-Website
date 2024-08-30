// src/Description.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

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
    <div className="container mx-auto my-20 text-center px-4 bg-transparent">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 bg-transparent">
        {/* Animated image */}
        <motion.img
          src="212.png"
          alt="Dhiman Nayak"
          className="w-96 h-96 rounded-full bg-red"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />

        {/* Animated heading */}
        <div className='w-3/4 sm:w-1/2'>
          <motion.h1
            className="text-3xl md:text-5xl text-[#d3bce9cd] font-bold mb-4 baskervville-sc-regular"
            initial="hidden"
            animate="visible"
            variants={textVariants}

          >
            Hi, I'm <br />
            <span className='text-[#7c2cc7] pl-2'
              style={{ textShadow: '4px 4px 8px #8A2BE2' }}
            > Dhiman Nayak</span>,
          </motion.h1>

          <motion.p
            className=" md:text-lg text-green-200 kanit-regular-italic mt-4 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {displayText}
          </motion.p>
        </div>
      </div>

      {/* Typing effect text */}
    </div>
  );
};

export default Home;
