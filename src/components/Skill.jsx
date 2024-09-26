import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Blockchain', icon: SiTailwindcss, color: '#FF6B6B' },
  { name: 'Databases', icon: FaDatabase, color: '#4CAF50' },
];

const Skill = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {skillsData.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-5 rounded-lg backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <skill.icon className="text-5xl mb-3" style={{ color: skill.color }} />
          <h3 className="text-center text-lg font-medium text-gray-200">{skill.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default Skill;