import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import GitHub and URL icons

const projects = [
  {
    title: 'Twitter Clone',
    description:
      'A full-stack social media application that mimics the core functionalities of Twitter. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and provides features such as user authentication, real-time posting, liking, commenting, and following other users. The application demonstrates my ability to implement RESTful APIs, manage state effectively in a React application, and handle asynchronous operations seamlessly.',
    link: 'https://github.com/yourusername/twitter-clone', // Replace with your actual GitHub repo link
  },
  {
    title: 'PicX - Decentralized Image Storage',
    description:
      'PicX is an innovative decentralized application (dApp) designed to store and manage images securely on the blockchain. Utilizing smart contracts and IPFS (InterPlanetary File System), this project ensures that images are stored in a decentralized manner, providing enhanced security and privacy compared to traditional storage methods. Built with Solidity, Web3.js, and React, PicX showcases my skills in blockchain development, smart contract integration, and building intuitive, user-friendly dApps.',
    link: 'https://github.com/yourusername/picx', // Replace with your actual GitHub repo link
  },
];

const ProjectComponent = () => {
  console.log("2-");
  
  return (
    <div className="container mx-auto my-12 px-4 flex flex-col items-center">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-transparent border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-8 w-11/12 md:w-3/4 lg:w-2/3 hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-shadow-lg">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex space-x-4">
            <a
              href={project.link}
              className="text-blue-500 hover:text-blue-600  flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
            {/* Assuming there could be a live URL link */}
            {/* Uncomment below if there's a live project URL */}
            <a
              href="https://your-live-project-link.com"
              className="text-blue-400 hover:text-blue-600  flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
