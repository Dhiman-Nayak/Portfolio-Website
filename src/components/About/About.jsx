import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaToolbox } from 'react-icons/fa'; // React Icons for tools and skills
import './About.css'; // Import custom CSS

const About = () => {
  return (
    <div className="about-container">
      {/* About Myself Section */}
      <motion.div
        className="section about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Myself</h2>
        <p>
          My name is Dhiman. I am currently pursuing my B.Tech in Computer Science and Engineering from Heritage Institute of Technology.
          I'm a full-stack developer, passionate about technology, and currently learning blockchain technology.
          I aim to build scalable and efficient applications, leveraging modern tools and frameworks.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Education</h2>

        <div className="roadmap">
          {/* College */}
          <motion.div
            className="milestone"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="dot"></div>
            <div className="milestone-content">
              <h3>College</h3>
              <p><strong>Heritage Institute of Technology (CSE)</strong></p>
            </div>
          </motion.div>

          {/* School */}
          <motion.div
            className="milestone"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="dot"></div>
            <div className="milestone-content">
              <h3>School</h3>
              <p><strong>Arambagh High School</strong></p>
            </div>
          </motion.div>
        </div>
      </motion.div>


      {/* Skills Section */}
      <motion.div
        className="section skills-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-category">
            <h3>Languages</h3>
            <p>JavaScript, Python, C, C++, Solidity</p>
          </div>
          {/* Frontend */}
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-icons">
              <FaReact /> <p>React JS, Bootstrap, Tailwind CSS, DaisyUI, Shadcn UI</p>
            </div>
          </div>
          {/* Backend */}
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-icons">
              <FaNodeJs /> <p>NodeJS, ExpressJS, WebSockets, AppWrite</p>
            </div>
          </div>
          {/* Databases */}
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skills-icons">
              <FaDatabase /> <p>MongoDB, MySQL</p>
            </div>
          </div>
          {/* Tools */}
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-icons">
              <FaToolbox /> <p>Foundry, Hardhat, Postman</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
