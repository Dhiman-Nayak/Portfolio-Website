// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='sticky top-0 '>
            <nav className="z-40 flex items-center justify-between p-5  text-white relative transition-shadow duration-300 ease-in-out w-screen ">
            <div className="text-2xl font-bold ">Dhiman<span className='text-[#8A2BE2]'>N</span></div>
            <div
                className={`flex flex-col gap-5 bg-transparent md:flex-row md:items-center fixed md:static  w-screen md:w-auto right-0 top-16 md:top-0 transition-transform duration-300 ease-in-out transform md:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full '
                    }`}
            >
                <Link to="/">
                    <p
                        className=" px-4 py-2 text-white hover:text-yellow-200  font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform  hover:-translate-y-0.5 hover:scale-155"
                        style={{ textShadow: '4px 4px 8px #8A2BE2' }}
                        >

                        Home
                    </p>
                </Link>
                <Link to="/projects">
                    <p
                        className=" px-4 py-2 text-white hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform  hover:-translate-y-0.5 hover:scale-105">

                        Projects
                    </p>
                </Link>
                <Link to="/about">
                    <p
                        className=" px-4 py-2 text-white hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform  hover:-translate-y-0.5 hover:scale-105">

                        About
                    </p>
                </Link>
                <Link to="/contact">
                    <p
                        className=" px-4 py-2 text-white bg-[#ba86ea81] hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform  hover:-translate-y-0.5 hover:scale-105">

                        Contact
                    </p>
                </Link>
            </div>
            <div
                className={`md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer transform ${isOpen ? 'rotate-90' : ''
                    }`}
                onClick={toggleMenu}
            >
                <div
                    className={`bg-white h-0.5 w-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                ></div>
                <div
                    className={`bg-white h-0.5 w-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                        }`}
                ></div>
                <div
                    className={`bg-white h-0.5 w-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                ></div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
