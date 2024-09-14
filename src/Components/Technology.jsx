import React, { useEffect, useState } from 'react';
import { DiDart } from 'react-icons/di';
import { FaAws, FaGit, FaLaravel, FaNode, FaPhp, FaPython, FaReact } from 'react-icons/fa'; // Import relevant icons
import { IoLogoJavascript } from 'react-icons/io';
import { RiFlutterFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Technology = () => {
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
        <section id="service-section" className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tools & Technologies</h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
                    We specialize in turning innovative ideas into powerful and scalable software solutions.
                </p>
            </div>

            <div className={`container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Mobile App Development */}
                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <IoLogoJavascript size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">JavaScript</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <FaPhp size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">PHP</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center max-w-xs">
                    <DiDart size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Dart</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <RiFlutterFill size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Flutter</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <FaReact size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">React.Js</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <TbBrandReactNative size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">React Native</h3>
                </div>


                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <FaNode size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Node.JS</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <SiExpress size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Express.JS</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <FaLaravel size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Laravel</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <FaPython size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Python</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <FaGit size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">Git</h3>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out text-center w-auto">
                    <FaAws size={60} className="text-primary-text mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-primary-text">AWS</h3>
                </div>
            </div>
        </section>
    );
};

export default Technology;
