"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MainBanner = () => {
  return (
    <div
      style={{ color: "#ECECF9" }}
      className="bg-gradient-to-br from-gray-800 to-gray-900  py-10 md:flex pt-20 pb-12 px-12 md:px-24 md:py-40"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl mx-auto flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 ">
          Bringing Ideas to Life on the
          <font className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            {" "}
            Web
          </font>
        </h1>
        <p className=" text-lg md:text-lg text-left py-2">
          Creating stunning web solutions using the power of React.
        </p>
        <div className="py-5 flex justify-between w-40">
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#06b6d4" }}
            size="xl"
          />
          <FontAwesomeIcon icon={faJs} size="xl" style={{ color: "#F0DB4F" }} />
          <FontAwesomeIcon
            icon={faHtml5}
            size="xl"
            style={{ color: "#f06529" }}
          />
          <FontAwesomeIcon
            icon={faUbuntu}
            size="xl"
            style={{ color: "#ffa600" }}
          />
        </div>
        <Link
          href="mailto:dimas@dimnyan.tech"
          target="_blank"
          className=" bg-gradient-to-br from-green-300 to-green-600 w-max text-black px-6 mt-6 py-3 text-lg font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl mx-auto md:mt-0 md:px-6 py-14"
      >
        <Image
          src="/my-icon.png"
          width={300}
          height={300}
          alt="Dimas Nyoman Profile Pict"
          className="mx-auto w-full md:w-auto"
          priority="true"
        />
      </motion.div>
    </div>
  );
};

export default MainBanner;
