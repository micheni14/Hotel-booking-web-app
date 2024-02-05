import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div className="bg-white w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center h-20 ">
        <div>
          <h1 className="text-2xl sm:text-2xl font-semibold text-slate-500 cursor-pointer">
            ZeroHustle
          </h1>
        </div>

        <ul className="hidden sm:flex space-x-4">
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
