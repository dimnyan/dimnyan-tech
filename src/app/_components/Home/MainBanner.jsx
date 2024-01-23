"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faUbuntu,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MainBanner = () => {
  return (
    <div
      style={{ color: "#ECECF9" }}
      className="bg-gradient-to-br from-gray-900 to-gray-900 h-screen flex px-12 align-middle md:px-24"
    >
      <div
        // initial={{ y: 30, opacity: 0 }}
        // whileInView={{ y: 1, opacity: 1 }}
        // transition={{
        //   duration: 0.8,
        // }}
        className="max-w-screen-xl mx-auto flex flex-col justify-center"
      >
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-8xl font-extrabold mb-4 text-slate-300"
        >
          Bringing Ideas to Life on the
          <font className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            {" "}
            Web
          </font>
        </motion.h1>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >
          <p className="text-slate-400 text- md:text-lg text-left py-2">
            Creating stunning web solutions
          </p>
          <div className="py-5 flex gap-6">
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#06b6d4" }}
              size="xl"
            />
            <Image
              src={"/images/tailwind-css.png"}
              alt="tailwind"
              width={30}
              height={15}
              className="my-1"
            />
            <Image
              src={"/images/nextjs.png"}
              alt="nextjs"
              width={24}
              height={15}
            />
            {/* <FontAwesomeIcon
              icon={faJs}
              size="xl"
              style={{ color: "#F0DB4F" }}
            /> */}
            <FontAwesomeIcon
              icon={faUbuntu}
              size="xl"
              style={{ color: "#ffa600" }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#efefef" }}
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-5">
            {/* <Link
            href="#scroll"
            className=" bg-gradient-to-br from-green-300 to-green-600 w-max text-black px-5 mt-3 md:mt-6 py-2 text-sm md:text-base font-semibold rounded-full hover:bg-blue-100 transition duration-300"
          >
            See More
          </Link> */}
            <Link
              href="#scroll"
              // scroll={false}
              className="bg-gradient-to-br from-orange-300 to-orange-600 w-max text-black px-5 mt-6 md:mt-6 py-2 text-sm md:text-base font-semibold rounded-full hover:bg-blue-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
      {/* <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="max-w-screen-xl mx-auto md:mt-0 md:px-6 py-14"
      >
        <Image
          src="/images/my-icon.png"
          width={300}
          height={300}
          alt="Dimas Nyoman Profile Pict"
          className="mx-auto w-full md:w-auto"
          priority="true"
        />
      </motion.div> */}
    </div>
  );
};

export default MainBanner;
