import React, { useEffect, useState } from 'react';
import './Service.css';

import { FaCogs, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'; // Import relevant icons
import { FcDeployment } from 'react-icons/fc';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdOutlineDesignServices } from 'react-icons/md';

const Service = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        const section = document.querySelector('#service-section');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="service-section" className="bg-primary-text py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quality Services</h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
                    We specialize in turning innovative ideas into powerful and scalable software solutions.
                </p>
            </div>

            <div className={`container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Mobile App Development */}
                <div className="glass-card bg-white shadow-lg text-primary-text rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <MdOutlineDesignServices size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-gray-600">
                        We design innovative user interface for seamless user experiences.
                    </p>
                </div>

                {/* Mobile App Development */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <FaMobileAlt size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Mobile App Development</h3>
                    <p className="text-gray-600">
                        We create innovative mobile apps with seamless user experiences.
                    </p>
                </div>

                {/* Web Development */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <FaLaptopCode size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Web Development</h3>
                    <p className="text-gray-600">
                        We build modern, responsive websites to boost your online presence.
                    </p>
                </div>

                {/* Custom Software Development */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <FaCogs size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Custom Software Development</h3>
                    <p className="text-gray-600">
                        Tailored software solutions built specifically for your business needs.
                    </p>
                </div>

                {/* DevOps Soluton */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <FcDeployment size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">DevOps Solution</h3>
                    <p className="text-gray-600">
                        We ensure continuous integration, delivery, and automation, enabling your teams to work efficiently.
                    </p>
                </div>

                {/* AI Soluton */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <GiArtificialIntelligence size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Artificial Inteligence</h3>
                    <p className="text-gray-600">
                        We ensure continuous integration, delivery, and automation, enabling your teams to work efficiently.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Service;
