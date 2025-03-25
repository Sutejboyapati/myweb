import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        
        {/* Left Section: Company Info & Follow Us */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">My Company</h3>
          <p className="mb-4">
            We provide innovative solutions and world-class services to help you grow your business.
          </p>
          <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        {/* Right Section: Quick Links */}
        <div className="md:w-1/4">
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/cloud" className="hover:underline">Cloud</Link>
            </li>
            <li>
              <Link to="/web" className="hover:underline">Web Services</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
