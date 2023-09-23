import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-gray-800 text-white py-10 md:flex pt-20 pb-12 px-12 md:px-24 md:py-40">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 ">
          Experienced ReactJS Developer
        </h1>
        <p className=" text-lg md:text-lg text-left py-2">
          I build awesome web applications with React.
        </p>
        <div className="py-5 flex justify-between w-40">
          <FontAwesomeIcon
            icon={faReact}
            className="w-5 stroke-cyan-500"
            style={{ color: "#06b6d4" }}
          />
          <FontAwesomeIcon
            icon={faJs}
            className="w-5"
            style={{ color: "#F0DB4F" }}
          />
          <FontAwesomeIcon
            icon={faHtml5}
            className="w-5"
            style={{ color: "#f06529" }}
          />
          <FontAwesomeIcon
            icon={faUbuntu}
            className="w-5"
            style={{ color: "#ffa600" }}
          />
        </div>
        <Link
          href="mailto:dimas@dimnyan.tech"
          target="_blank"
          className=" bg-cyan-300 w-max text-black px-6 mt-6 py-3 text-lg font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Contact Me
        </Link>
      </div>
      <div className="max-w-screen-xl mx-auto md:mt-0 md:px-6 py-14">
        <Image
          src="/my-icon.png"
          width={300}
          height={300}
          alt="Your Photo"
          className="mx-auto w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default MainBanner;
