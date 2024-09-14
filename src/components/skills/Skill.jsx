import React from 'react'
import cpp from "../../assets/C++-Logo.svg"
import js from "../../assets/javascript-1.svg"
import python from "../../assets/python-5.svg"
import solidity from "../../assets/solidity.svg"
import html from "../../assets/html-icon.svg"
import css from "../../assets/css.svg"

import reactLogo from '../../assets/react.svg'
import nodejs from "../../assets/Node.js-Logo.wine.svg"
import tailwind from "../../assets/tailwindcss.svg"

import mongodb from "../../assets/MongoDB-Logo.wine.svg"
import mysql from "../../assets/MySQL-Logo.wine.svg"

import git from "../../assets/git-icon.svg"
import postman from "../../assets/postman.svg"
import { img } from 'framer-motion/client'


function Skill() {
    const lang = {
        "JS": js,
        "python": python,
        "C++": cpp,
        "Solidity": solidity,
        "HTML":html,
        "CSS" : css
    }
    const framework = {
        "React JS": reactLogo,
        "Node Js": nodejs,
        "Tailwind CSS": tailwind
    }
    const database = {
        "MongoDB": mongodb,
        "MYSQL": mysql
    }
    const tool = {
        "git": git,
        "Postman": postman
    }
    return (
        <div>
            {/* <img src={reactLogo} alt="react" className='filter grayscale hover:filter-none transition ease-in-out duration-300' /> */}
            <div className=" py-10">
                <div className="container mx-auto px-4">

                    {/* Languages */}
                    {/* <h3 className="text-2xl text-purple-400 mb-4">Languages</h3> */}
                    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 justify-around gap-8 mb-14">
                        {Object.entries(lang).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center">
                                <img
                                    src={value}
                                    alt={key}
                                    className={`w-16 h-10 opacity-70 hover:opacity-100 transition ease-in-out duration-300 ${key==="Solidity"?`bg-white`:`bg-transparent`}`}
                                />
                                <p className="text-white mt-1 text-sm">{key}</p>
                            </div>
                        ))}
                    </div>

                    {/* Frameworks */}
                    {/* <h3 className="text-2xl text-purple-400 mt-10 mb-4">Frameworks</h3> */}
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-8 mb-14">
                        {Object.entries(framework).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center">
                                <img
                                    src={value}
                                    alt={key}
                                    className={`w-16 h-10 opacity-70 hover:opacity-100 transition ease-in-out duration-300 ${key==="Node Js"?`bg-white`:`bg-transparent`}`}
                                />
                                <p className="text-white mt-2 text-sm">{key}</p>
                            </div>
                        ))}
                    </div>

                    {/* Databases */}
                    {/* <h3 className="text-2xl text-purple-400 mt-10 mb-4">Databases</h3> */}
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-8 mb-14">
                        {Object.entries(database).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center">
                                <img
                                    src={value}
                                    alt={key}
                                    className="bg-white w-16 h-10 opacity-70 hover:opacity-100 transition ease-in-out duration-300"
                                />
                                <p className="text-white text-sm">{key}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tools */}
                    {/* <h3 className="text-2xl text-purple-400 mt-10 mb-4">Tools</h3> */}
                    <div className="grid grid-cols-4 sm:grid-cols-4 gap-8 mb-14">
                        {Object.entries(tool).map(([key, value]) => (
                            <div key={key} className="flex flex-col items-center ">
                                <img
                                    src={value}
                                    alt={key}
                                    className=" w-16 h-10 opacity-70 hover:opacity-100 transition ease-in-out duration-300"
                                />
                                <p className="text-white mt-2 text-sm">{key}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skill