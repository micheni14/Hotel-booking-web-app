import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center h-20 ">
        <div>
          <Link
            to="/"
            className="text-2xl sm:text-2xl font-semibold text-slate-500 cursor-pointer"
          >
            ZeroHustle
            <small className="font-medium hidden md:inline text-blue-800">
              .com
            </small>
          </Link>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          {menuOpen ? (
            <IoClose
              onClick={toggleMenu}
              className="text-gray-800 cursor-pointer"
              size={24}
            />
          ) : (
            <RxHamburgerMenu
              onClick={toggleMenu}
              className="text-gray-600 cursor-pointer"
              size={24}
            />
          )}
        </div>

        {/* Navigation links for medium and larger screens */}
        <ul
          className={`${
            menuOpen ? "sm:bg-white  fixed z-20 p-4" : "hidden"
          } md:flex md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center  top-0 right-0, w-[80%] md:w-auto py-4 md:py-0 md:relative`}
        >
          <div className="md:hidden flex justify-end ">
            {" "}
            <IoClose
              onClick={toggleMenu}
              className="text-gray-700 cursor-pointer bg-white rounded-full w-10 h-10"
              size={24}
            />
          </div>
          <li className="text-sm text-gray-600 hover:text-blue-600 font-semibold cursor-pointer">
            List your property
          </li>
        </ul>

        <div className="space-x-8 flex items-center">
          <button className="hidden sm:block text-sm text-blue-800 bg-transparent px-4 py-2 rounded-full font-semibold cursor-pointer border-2 border-blue-800">
            Sign up
          </button>
          <button className=" text-sm text-white bg-blue-800 px-4 py-2 rounded-full font-semibold cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
