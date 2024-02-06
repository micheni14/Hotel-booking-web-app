import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={
          isNavbarScrolled
            ? "fixed bg-white w-full shadow-md z-20"
            : "bg-white w-full shadow-md"
        }
      >
        <div className="container mx-auto flex px-12 md:px-0  justify-between  items-center h-20">
          <div>
            <Link
              to="/"
              className="text-2xl font-semibold text-slate-500 cursor-pointer"
            >
              ZeroHustle<small className="text-blue-800">.com</small>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <p className="hidden sm:block text-sm text-gray-600 hover:text-blue-600 font-semibold cursor-pointer">
              List your property
            </p>
            <button className="hidden sm:block text-sm text-blue-800 bg-transparent px-4 py-2 rounded-full font-semibold cursor-pointer border-2 border-blue-800">
              Sign up
            </button>
            <button className="hidden sm:block text-sm text-white bg-blue-800 px-4 py-2 rounded-full font-semibold cursor-pointer">
              Login
            </button>
            <div className="sm:hidden">
              {menuOpen ? (
                <IoClose
                  size={36}
                  className="text-gray-600 cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <RxHamburgerMenu
                  size={36}
                  className="text-gray-600 cursor-pointer "
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {menuOpen && (
        <div className="sm:hidden fixed top-20 z-[50] left-6 right-6   w-96 mt-8 rounded-md bg-red-500 py-8 drop-shadow-xl">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <p className=" text-lg md:text-sm text-white hover:text-blue-600 font-semibold cursor-pointer mb-4">
              List your property
            </p>
            <button className="text-sm text-blue-800 md:text-blue-800 bg-white md:bg-transparent px-4 py-2 rounded-full font-semibold cursor-pointer border-2 border-blue-800 mb-2">
              Sign up
            </button>
            <button className="text-sm text-white bg-blue-800 px-4 py-2 rounded-full font-semibold cursor-pointer">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
