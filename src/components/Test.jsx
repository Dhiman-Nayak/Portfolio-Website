import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaBootstrap } from 'react-icons/fa';
// import { SiJavascript, SiCplusplus, SiSolidity, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiWebsocket, SiAppwrite } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

const Test = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
        <p className="text-lg leading-relaxed">
          My name is Dhiman. I'm currently pursuing my B.Tech in CSE from Heritage Institute. As a fullstack developer, I'm passionate about creating robust and innovative web solutions. My current focus is on expanding my knowledge in blockchain technology, which I believe will play a significant role in shaping the future of digital interactions and transactions.
        </p>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl font-bold text-blue-600">Education</h2>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Heritage Institute of Technology</h3>
            <p>B.Tech in Computer Science and Engineering</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Aranbagh High School</h3>
            <p>High School Education</p>
          </li>
        </ul>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-3xl font-bold text-blue-600">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Languages" itemVariants={itemVariants} icons={[
            { Icon: FaReact, name: 'JavaScript' },
            { Icon: FaPython, name: 'Python' },
            { Icon: TbBrandCpp, name: 'C' },
            { Icon: FaReact, name: 'C++' },
            { Icon: FaReact, name: 'Solidity' }
          ]} />
          <SkillCategory title="Frontend" itemVariants={itemVariants} icons={[
            { Icon: FaReact, name: 'React' },
            { Icon: FaBootstrap, name: 'Bootstrap' },
            { Icon: FaReact, name: 'Tailwind CSS' }
          ]} />
          <SkillCategory title="Backend" itemVariants={itemVariants} icons={[
            { Icon: FaNodeJs, name: 'Node.js' },
            { Icon: FaReact, name: 'Express.js' },
            { Icon: FaReact, name: 'WebSockets' },
            { Icon: FaReact, name: 'Appwrite' }
          ]} />
          <SkillCategory title="Databases" itemVariants={itemVariants} icons={[
            { Icon: FaReact, name: 'MongoDB' },
            { Icon: FaReact, name: 'MySQL' }
          ]} />
          <SkillCategory title="Tools" itemVariants={itemVariants} icons={[
            { Icon: FaReact, name: 'Foundry' },
            { Icon: FaReact, name: 'Hardhat' },
            { Icon: FaReact, name: 'Postman' }
          ]} />
        </div>
      </motion.section>
    </motion.div>
  );
};

const SkillCategory = ({ title, icons,itemVariants }) => (
  <motion.div variants={itemVariants} className="space-y-2">
    <h3 className="text-xl font-semibold text-blue-500">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {icons.map(({ Icon, name }) => (
        <div key={name} className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1 text-sm">
          <Icon className="text-blue-500" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Test;