"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-10">
        <Link className="flex items-center" href="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-200">
            dimnyan
          </span>
        </Link>
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col py-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-900">
            <li>
              <Link
                href="/"
                className={` ${
                  pathname === "/"
                    ? "text-transparent bg-gradient-to-br from-green-500 to-blue-500 "
                    : "text-transparent bg-gradient-to-br from-white to-slate-200"
                } block text-right py-2 pl-3 pr-4 bg-clip-text  font-extrabold md:bg-transparent  md:p-0 `}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={` ${
                  pathname === "/projects"
                    ? "text-transparent bg-gradient-to-br from-green-500 to-blue-500 "
                    : "text-transparent bg-gradient-to-br from-white to-slate-200"
                } block text-right py-2 pl-3 pr-4 bg-clip-text  font-extrabold md:bg-transparent  md:p-0  md:mr-2 `}
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
