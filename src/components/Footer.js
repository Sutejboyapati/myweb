import React from "react";
import { Link } from "react-router-dom";
import TacoLogo from "../images/Taco1.png"; // Import company logo

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section: Company Info & Address */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Logo and Company Name */}
          <div className="flex items-center mb-4">
            <img src={TacoLogo} alt="Taco Cloud Services" className="h-10 w-10 rounded-md mr-3" />
            <h3 className="text-2xl font-bold">Taco Cloud Services</h3>
          </div>

          <p className="mb-6">
            Empowering businesses with cutting-edge cloud solutions and AI-driven innovations. 
            We provide innovative solutions and world-class services to help you grow your business.
          </p>

          {/* Address Section */}
          <h4 className="text-xl font-semibold">Address</h4>
          <p className="text-sm mt-1">
            Plot 163, Road 10, Venkatrao Nagar Colony, <br />
            Kukatpally, Hyderabad 500072
          </p>
        </div>
        
        {/* Right Section: Quick Links */}
        <div className="md:w-1/4">
          <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/cloud" className="hover:underline">Cloud Services</Link></li>
            <li><Link to="/dataservices" className="hover:underline">Data Services</Link></li>
            <li><Link to="/aiservices" className="hover:underline">AI Services</Link></li>
            <li><Link to="/insights" className="hover:underline">Insights</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Taco Cloud Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
