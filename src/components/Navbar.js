import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu
import TacoLogo from "../images/Taco.jpg"; // Import the logo

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  // Close dropdown when clicking anywhere outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Function to close all menus
  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={TacoLogo} alt="Taco Cloud Services" className="h-12 w-auto rounded-lg" /> 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-xl"> {/* Increased text size */}
          <li><Link to="/" className="hover:underline" onClick={closeMenus}>Home</Link></li>
          <li><Link to="/about" className="hover:underline" onClick={closeMenus}>About</Link></li>

          {/* Services Dropdown - Click to Open */}
          <li className="relative dropdown-container">
            <button 
              className="hover:underline focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-md rounded w-40 text-lg z-50">
                <li><Link to="/cloud" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenus}>Cloud</Link></li>
                <li><Link to="/aiservices" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenus}>AI Services</Link></li>
                <li><Link to="/dataservices" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMenus}>Data Services</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/careers" className="hover:underline" onClick={closeMenus}>Careers</Link></li>
          <li><Link to="/insights" className="hover:underline" onClick={closeMenus}>Insights</Link></li>
          <li><Link to="/contact" className="hover:underline" onClick={closeMenus}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-3 text-lg">
          <li><Link to="/" onClick={closeMenus}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenus}>About</Link></li>

          {/* Mobile Services Dropdown - Click to Open */}
          <li className="dropdown-container">
            <button className="w-full text-left" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Services
            </button>
            {isDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link to="/cloud" onClick={closeMenus}>Cloud Services</Link></li>
                <li><Link to="/aiservices" onClick={closeMenus}>AI Services</Link></li>
                <li><Link to="/dataservices" onClick={closeMenus}>Data Services</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/careers" onClick={closeMenus}>Careers</Link></li>
          <li><Link to="/insights" onClick={closeMenus}>Insights</Link></li>
          <li><Link to="/contactpage" onClick={closeMenus}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
