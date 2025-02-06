import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/images/nav.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Podcast", path: "/podcast" },
    { name: "Resources", path: "/resources" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#1A1A1A] sticky top-0 z-50">
      <div className="w-11/12 mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-8" src={logo} alt="FutureTech Logo" />
            <h1 className="font-semibold text-white text-2xl">FutureTech</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-lg font-medium hover:text-gray-400 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-[#FFD11A] px-5 py-3.5 rounded-lg cursor-pointer">
              Login
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden relative">
            {isMenuOpen ? (
              <HiX className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
            ) : (
              <HiMenuAlt3 className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
            )}

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-[#2A2A2A] rounded-lg shadow-lg py-3">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-5 py-3 text-white text-lg font-medium hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
