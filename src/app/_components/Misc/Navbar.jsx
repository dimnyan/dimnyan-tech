"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { stagger, useAnimate } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const useMenuAnimation = (isOpen) => {
  const [scope, animate] = useAnimate();
  // const mobileNavBox = document.getElementById("nav-box");
  useEffect(() => {
    animate(
      "#nav-box",
      // mobileNavBox,
      isOpen
        ? { transform: "translateX(0%)" }
        : { transform: "translateX(-100%)" },
      {
        duration: 0.3,
      }
    );
    animate(
      "li",
      isOpen
        ? { opacity: 1, transform: "translateX(0%)", filter: "blur(0px)" }
        : { opacity: 0, transform: "translateX(-100%)", filter: "blur(20px)" },
      {
        duration: 0.4,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const scope = useMenuAnimation(isOpen);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900" ref={scope}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-10">
        <Link className="flex items-center" href="/">
          <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-200">
            dimnyan
          </span>
        </Link>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="z-20 inline-flex items-center align-middle justify-center text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2  
                  
          "
          // aria-expanded={isOpen ? "true" : "false"}
        >
          <p className="bg-clip-text text-transparent text-lg tracking-wider bg-gradient-to-br from-green-500 to-blue-500 font-extrabold">
            MENU
          </p>
          {/* <span className="sr-only">Open main menu</span>
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
          </svg> */}
        </button>
        <div
          className={`${
            isOpen ? "fixed" : "fixed hidden"
          } top-0 left-0 md:block w-2/3 z-10`}
          id="nav-box"
        >
          <ul className="font-medium h-screen py-16 pl-6 md:pl-10 border-r border-yellow-600 rounded-lg w-full bg-gray-900 dark:border-gray-900">
            <li>
              <Link
                href="/"
                className={` ${
                  pathname === "/"
                    ? "text-transparent bg-gradient-to-br from-green-500 to-blue-500 "
                    : "text-transparent bg-gradient-to-br from-white to-slate-200"
                } block text-3xl md:text-6xl text-right w-max mr-auto py-6 md:pl-8 pr-4 bg-clip-text font-extrabold md:bg-transparent `}
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={` ${
                  pathname === "/projects"
                    ? "text-transparent bg-gradient-to-br from-green-500 to-blue-500"
                    : "text-transparent bg-gradient-to-br from-white to-slate-200"
                } block text-3xl md:text-6xl text-right w-max mr-auto py-6 md:pl-8 pr-4 bg-clip-text font-extrabold md:bg-transparent`}
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
          </ul>
          {/* <div className="fixed bg-slate-50/10 h-screen right-0 top-0 w-1/2"></div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
