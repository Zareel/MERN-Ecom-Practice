import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4  ">
      <div className="w-full flex justify-center">
        <img
          className="w-[200px] mx-auto"
          src="/images/bblogo.png"
          alt="logo"
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <Link
          to="/about"
          className=" p-2  text-violet-500 text-lg text-center hover:text-violet-600 active:text-violet-700"
        >
          About
        </Link>
        <Link
          to="/contact"
          className=" p-2 text-violet-500 text-lg text-center hover:text-violet-600 active:text-violet-700"
        >
          Contact
        </Link>
        <Link
          to="/policy"
          className=" p-2 text-violet-500 text-lg text-center hover:text-violet-600 active:text-violet-700"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
