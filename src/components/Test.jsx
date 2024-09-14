import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {
  const educationData = [
    {
      institution: "Heritage Institute of Technology",
      years: "2022-2026",
      type: "College",
      details: "Computer Science and Enginering (Internet of Things and Cyber Security including Blockchain Technology)"
    },
    {
      institution: "Arambagh High School",
      years: "2013-2022",
      type: "School",
      details: "Completed secondary education"
    }
  ];

  return (
    <div className="min-h-screen text-white p-8">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-purple-500 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education 
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-1 transform -translate-x-1/2 w-1 h-full bg-purple-500"></div>

        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            className={` flex flex-col-reverse sm:flex-row items-center mb-16 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {/* Timeline dot */}
            <div className="absolute flex justify-center items-center shadow-purple-400/95 sm:left-1/2 left-1 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full">
            <div className='w-2 h-2 bg-white rounded-full bg-opacity-70 '></div>
            </div>

            {/* Content */}
            <div className={`w-11/12 sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:text-right sm:pl-8'}`}>
              <motion.div 
                className="bg-[#ffffffa1] text-black bg-opacity-90 p-2 pl-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-purple-700">{edu.type}</h3>
                <p className="text-lg mb-2">{edu.institution}</p>
                <p className="text-sm">{edu.details}</p>
                <p className="text-sm text-gray-600 mb-2">{edu.years}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Test;
