import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4  ">
      <div className="w-full flex justify-center">
        <img className="w-[150px] mx-auto" src="/images/logo.png" alt="logo" />
      </div>

      <div className="w-full flex items-center justify-center">
        <Link
          to="/about"
          className=" p-2 text-green-500 text-lg text-center hover:text-green-600 active:text-green-700"
        >
          About
        </Link>
        <Link
          to="/contact"
          className=" p-2 text-green-500 text-lg text-center hover:text-green-600 active:text-green-700"
        >
          Contact
        </Link>
        <Link
          to="/policy"
          className=" p-2 text-green-500 text-lg text-center hover:text-green-600 active:text-green-700"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
