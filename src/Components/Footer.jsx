import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url('../../images/bg1.png')` }}>
            <div className="w-full h-full bg-opacity-50 py-16 backdrop-blur-sm">
                <div className='container mx-auto text-center md:text-left text-white'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Footer Content */}
                        <div>
                            <h1 className='text-3xl font-bold mb-4'>Spark Tech Agency</h1>
                            <p className='text-lg'>
                                We specialize in turning your innovative ideas into powerful and scalable software
                                solutions. Let’s make something great together!
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
                            <ul className='space-y-2'>
                                <li><a href="#" className='text-white hover:text-yellow-400 transition'>About Us</a></li>
                                <li><a href="#" className='text-white hover:text-yellow-400 transition'>Services</a></li>
                                <li><a href="#" className='text-white hover:text-yellow-400 transition'>Products</a></li>
                                <li><a href="#" className='text-white hover:text-yellow-400 transition'>Contact Us</a></li>
                                <li><a href="#" className='text-white hover:text-yellow-400 transition'>FAQ</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
                            <div className='flex justify-center md:justify-start space-x-6'>
                                <a href="#" className='text-white hover:text-yellow-400 transition'>
                                    <FaFacebookF size={24} />
                                </a>
                                <a href="#" className='text-white hover:text-yellow-400 transition'>
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className='text-white hover:text-yellow-400 transition'>
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className='text-white hover:text-yellow-400 transition'>
                                    <FaLinkedinIn size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className='border-t border-gray-500 mt-8 pt-4'>
                        <p className='text-white text-center'>© 2023 CompanyName. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
