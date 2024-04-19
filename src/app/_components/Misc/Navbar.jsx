"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";

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
  // const [scaler, setScaler] = useState(1);

  // const { scrollYProgress } = useScroll();

  // useEffect(() => {
  //   if (scrollYProgress.current > 0.27) {
  //     setScaler(0.7);
  //   } else if (scrollYProgress.current < 0.27) {
  //     setScaler(scrollYProgress.current * 0.038571);
  //   } else if (scrollYProgress.current == 0) {
  //     setScaler(1);
  //   }
  // }, [scrollYProgress.current]);

  //0 - 0.027
  //scale 1 - 0.7

  return (
    <nav
      className="border-gray-200 bg-gray-900 sticky top-0 z-10 px-5 md:px-24"
      ref={scope}
    >
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2 }}
        // style={{ scale: scaler }}
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4"
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
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-300 to-orange-600 text-lg tracking-wider font-extrabold">
            {isOpen ? "CLOSE" : "MENU"}
          </span>
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
        <ul className="font-medium h-screen py-16 pl-6 md:pl-10 border-r border-yellow-600 rounded-lg w-full bg-gray-900 dark:border-gray-900">
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
