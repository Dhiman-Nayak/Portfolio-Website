import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the mobile menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent background scrolling when the mobile menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    };

    // Ensure to re-enable scrolling when component unmounts or menu closes
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, []);

    return (
        <div className=''>
            <nav className="relative z-40 flex items-center justify-between p-5 text-white transition-shadow duration-300 ease-in-out w-screen">
                <div className="text-2xl font-bold">Dhiman<span className='text-[#8A2BE2]'>N.</span></div>

                {/* Mobile Menu */}
                <div
                    className={`flex flex-col items-center gap-5 bg-black md:bg-transparent z-50 md:flex-row md:items-center fixed md:static w-screen md:w-auto right-0 top-16 md:top-0 transition-transform duration-300 ease-in-out transform md:translate-x-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${isOpen ? 'h-screen overflow-y-auto' : ''}`} // Ensuring the menu is scrollable when open
                >
                    <Link to="/" onClick={toggleMenu}>
                        <p className="px-4 py-2 text-white hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105" style={{ textShadow: '4px 4px 8px #8A2BE2' }}>Home</p>
                    </Link>
                    <Link to="/projects" onClick={toggleMenu}>
                        <p className="px-4 py-2 text-white hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Projects</p>
                    </Link>
                    <Link to="/about" onClick={toggleMenu}>
                        <p className="px-4 py-2 text-white hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">About</p>
                    </Link>
                    <Link to="/contact" onClick={toggleMenu}>
                        <p className="px-4 py-2 text-white bg-[#ba86ea81] hover:text-yellow-200 font-semibold rounded-md pl-4 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Contact</p>
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className={`md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer transform ${isOpen ? 'rotate-90' : ''}`} onClick={toggleMenu}>
                    <div className={`bg-white h-0.5 w-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`bg-white h-0.5 w-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`bg-white h-0.5 w-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
