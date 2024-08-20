"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const scope = useMenuAnimation(isOpen);

  const menus = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
  ];
  return (
    <nav className="border-gray-200 sticky top-0 z-50" ref={scope}>
      <div className="absolute -z-10 w-full h-full bg-slate-900/60 filter blur-2xl"></div>
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2 }}
        // style={{ scale: scaler }}
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 z-50 px-5 md:px-24"
      >
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="/images/my-icon.png"
            width={20}
            height={20}
            alt="Dimas Nyoman Profile Pict"
            className="mx-auto w-full md:w-auto"
            priority="true"
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-400 self-center text-xl md:text-2xl font-bold whitespace-nowrap">
            Nyoman Lanang
          </span>
        </Link>
        <div className="flex w-max gap-5">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="z-20 inline-flex items-center align-middle justify-center text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2  
                  
          "
            // aria-expanded={isOpen ? "true" : "false"}
          >
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-300 to-orange-600 text-lg tracking-wider font-extrabold">
              {isOpen ? "CLOSE" : "MENU"}
            </span> */}
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={25}
              color="#f48436"
            />
          </button>
          <Link
            href="mailto:dimasnyoman1@gmail.com"
            className="hidden md:block border-2 border-teal-400 w-max px-5  py-2 text-sm md:text-base font-semibold lg:font-normal rounded-full text-teal-300 transition duration-300 hover:bg-teal-500 hover:text-black"
          >
            Email Me
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 1 }}
        className={`${
          isOpen ? "fixed" : "fixed hidden"
        } top-0 left-0 md:block w-2/3 z-10`}
        id="nav-box"
      >
        <ul className="font-medium h-screen py-16 pl-6 md:pl-10  rounded-lg w-full bg-gray-900 dark:border-gray-900">
          {menus.map((item) => (
            <li key={item.name}>
              <Link
                href={`${item.path}`}
                className={` ${
                  pathname === item.path
                    ? "text-transparent bg-gradient-to-br from-orange-300 to-orange-500 border-b border-orange-400"
                    : "text-transparent bg-gradient-to-br from-white to-slate-200"
                } block text-3xl md:text-6xl text-right w-max mr-auto py-4 md:py-6 md:ml-8 bg-clip-text font-extrabold md:bg-transparent uppercase`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="fixed bg-slate-50/10 h-screen right-0 top-0 w-1/2"></div> */}
      </motion.div>
    </nav>
  );
};

export default Navbar;
