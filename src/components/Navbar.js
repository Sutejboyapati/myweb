import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">My Website</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-xl"> {/* Increased text size */}
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>

          {/* Services Dropdown */}
          <li
  className="relative group"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  <button className="hover:underline">Services</button>
  {isDropdownOpen && (
    <ul
      className="absolute left-0 mt-2 bg-white text-black shadow-md rounded w-40 text-lg z-50"
      onMouseEnter={() => setIsDropdownOpen(true)}  
      onMouseLeave={() => setIsDropdownOpen(false)} 
    >
      <li><Link to="/cloud" className="block px-4 py-2 hover:bg-gray-200">Cloud</Link></li>
      <li><Link to="/web" className="block px-4 py-2 hover:bg-gray-200">Web</Link></li>
      <li><Link to="/design" className="block px-4 py-2 hover:bg-gray-200">Design</Link></li>
    </ul>
  )}
</li>


          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-3 text-lg"> {/* Increased text size */}
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>

          {/* Mobile Dropdown */}
          <li>
            <button
              className="w-full text-left"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services ▼
            </button>
            {isDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li><Link to="/cloud" onClick={() => setIsMenuOpen(false)}>Cloud</Link></li>
                <li><Link to="/web" onClick={() => setIsMenuOpen(false)}>Web</Link></li>
                <li><Link to="/design" onClick={() => setIsMenuOpen(false)}>Design</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
