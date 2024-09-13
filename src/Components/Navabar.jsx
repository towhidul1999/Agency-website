import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='h-20 w-screen backdrop-blur-lg bg-primary-text/60 bg-opacity-30  backdrop-brightness-50 border-b-4 border-primary-text shadow-lg shadow-primary-text'>
                {/* Navbar content inside a container */}
                <div className="container mx-auto h-full flex items-center justify-between">
                    {/* Navbar logo */}
                    <div className='cursor-pointer'>
                        <img src="../../images/mainlogo.webp" alt="Logo" className="h-12 " />
                    </div>

                    {/* Hamburger Icon for small screens */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary-text focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className={`space-x-11 text-primary-color font-bold hidden md:flex`}>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                        <a href="#">Product</a>

                        <a href="#">Testimonial</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col items-center space-y-4 text-primary-color font-bold">
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Product</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>Testimonial</a>
                        <a href="#" onClick={() => setIsMenuOpen(false)}>FAQ</a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
