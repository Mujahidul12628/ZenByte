
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="py-12 text-white bg-gray-800">
            <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
                <div>
                    <h3 className="mb-4 text-2xl font-bold text-blue-500">Parking Share</h3>
                    <hr className="mb-4 border-t-2 border-blue-500" />
                    <p className="text-sm">Discover innovation and excellence with our dedicated team.Explore the parking sharing platform with ease</p>
                    <div className="mt-5 text-sm">
                        <div className="flex items-center mb-4">
                            <input type="email" name="email" placeholder="Your Email" className="p-2 mr-2 text-gray-300 bg-gray-700 border border-gray-600" />
                            <button type="submit" className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600">Subscribe</button>
                        </div>
                        <p className="text-xs text-gray-400">Stay tuned for updates and exclusive offers!</p>
                    </div>

                    <div className="flex mt-4 space-x-4">
                        <Link to="https://twitter.com/" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="https://www.youtube.com/" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="https://www.facebook.com/" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="https://www.linkedin.com/" className="text-gray-400 hover:text-blue-500">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 text-2xl font-bold text-blue-500">Explore</h3>
                    <hr className="mb-4 border-t-2 border-blue-500" />
                    <div className="text-sm">
                        <Link to="/" className="block mb-2 hover:text-blue-500">Home</Link>
                        <Link to="/services" className="block mb-2 hover:text-blue-500">Services</Link>
                        <Link to="/portfolio" className="block mb-2 hover:text-blue-500">Portfolio</Link>
                        <Link to="/contact" className="block mb-2 hover:text-blue-500">Contact</Link>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 text-2xl font-bold text-blue-500">Contact Us</h3>
                    <hr className="mb-4 border-t-2 border-blue-500" />
                    <address className="text-sm">
                        <div className="flex items-center mb-2">
                            <i className="mr-2 fas fa-map-marker-alt"></i>
                            <span>123 Street, Cityville</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <i className="mr-2 fas fa-envelope"></i>
                            <span>info@company.com</span>
                        </div>
                        <div className="flex items-center">
                            <i className="mr-2 fas fa-phone"></i>
                            <span>+123 4567 890</span>
                        </div>
                    </address>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;

