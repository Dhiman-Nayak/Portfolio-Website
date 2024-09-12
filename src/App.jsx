import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Line from './components/Line.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import ProjectComponent from './pages/Project/Project.jsx';
import Contact from './pages/Contact/Contact.jsx';
import About from './components/About/AboutPage.jsx';
import Test from './components/Test.jsx';
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <Line/>
        <Navbar />
        <hr className='opacity-10' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectComponent />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gg" element={<Test/>} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
