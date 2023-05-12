import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-4  ">
      <h1 className="p-2 dark:text-violet-400 text-3xl text-center hover:text-violet-500 active:text-violet-700 ">
        Click to Cart
      </h1>
      <div className="w-full flex items-center justify-center">
        <Link
          to="/about"
          className=" p-2 dark:text-violet-400 text-lg text-center hover:text-violet-500 active:text-violet-700"
        >
          About
        </Link>
        <Link
          to="/contact"
          className=" p-2 dark:text-violet-400 text-lg text-center hover:text-violet-500 active:text-violet-700"
        >
          Contact
        </Link>
        <Link
          to="/policy"
          className=" p-2 dark:text-violet-400 text-lg text-center hover:text-violet-500 active:text-violet-700"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
