import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  };
  return (
    <div>
      <header className="p-4 bg-gray-900 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to="/"
            className="flex items-center p-2 dark:text-violet-400 text-3xl"
          >
            <img className="w-[230px]" src="/images/bblogo.png" alt="" />
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/about"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-700"
              >
                About
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-700"
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/category"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-700"
              >
                Category
              </NavLink>
            </li>
          </ul>
          {!auth.user ? (
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <NavLink
                to="/login"
                className="self-center px-8 py-3 rounded hover:text-violet-400 active:text-violet-700"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="self-center px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900 hover:text-violet-800 active:text-violet-900"
              >
                Sign up
              </NavLink>
            </div>
          ) : (
            <div className="h-full flex items-center">
              <NavLink
                onClick={handleLogout}
                to="/login"
                className="self-center px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900 hover:text-violet-800 active:text-violet-900"
              >
                LogOut
              </NavLink>
            </div>
          )}
          <div className="pr-10  h-full flex items-center">
            <NavLink
              to="/cart"
              className="self-center px-8 py-3 rounded text-2xl relative"
            >
              🛍️ <span className="text-sm  absolute left-14 top-1">(0)</span>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
