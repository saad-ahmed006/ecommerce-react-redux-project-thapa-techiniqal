import { useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "../assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md z-10	">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
           <NavLink to={'/'}><img src={Logo} alt="logo" className="h-10" /></NavLink> 
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 italic">
            <NavLink to={"/"}>
              <p className="text-sm text-black uppercase hover:text-helper transition-colors duration-300 cursor-pointer ">
                Home
              </p>
            </NavLink>
            <NavLink to={"/about"}>
              <p className="text-sm text-black uppercase hover:text-helper transition-colors duration-300 cursor-pointer">
                About
              </p>
            </NavLink>
            <p className="text-sm text-black uppercase hover:text-helper transition-colors duration-300 cursor-pointer">
              Products
            </p>
            <NavLink to={"/contact"}>
              <p className="text-sm text-black uppercase hover:text-helper transition-colors duration-300 cursor-pointer">
                Contact
              </p>
            </NavLink>
          </div>

          {/* Cart Icon */}
          <div className="text-black  relative hidden md:flex md:flex-row space-x-6">
            <div className="relative">
              <FiHeart className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                2
              </span>
            </div>
            <div className="relative">
              <NavLink to={'/cart'}>
                <FiShoppingCart className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                10
              </span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="text-black relative mr-4">
              <FiShoppingCart className="w-6 h-6 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                10
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-black "
            >
              <CgMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#5271FF] text-white rounded-sm absolute top-0 right-0 h-full w-64 p-4 transform translate-x-0 transition-transform ease-in-out duration-300">
          <div className="flex justify-end items-center mb-4 ">
            <button onClick={() => setIsMobileMenuOpen(false)} className="">
              <CgClose className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-12">
            <NavLink to={'/'}><p className=" uppercase hover:text-helper transition-colors duration-300 cursor-pointer ">
              Home
            </p></NavLink>
            <NavLink to={'/about'}><p className=" uppercase hover:text-helper transition-colors duration-300 cursor-pointer">
              About
            </p></NavLink>
           <p className=" uppercase hover:text-helper transition-colors duration-300 cursor-pointer">
              Products
            </p>
            <NavLink to={'/contact'}><p className=" uppercase hover:text-helper transition-colors duration-300 cursor-pointer">
              Contact
            </p></NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
