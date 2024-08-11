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
import { TextGenerateEffect } from "../ui/textGenerateEffect";

const MainBanner = () => {
  const words = "Nyoman Lanang Kresna Erlangga";

  return (
    <div
      style={{ color: "#ECECF9" }}
      className="bg-gray-900 lg:flex px-12 align-middle md:px-24 2xl:px-72 lg:h-screen"
    >
      <div className="max-w-screen-xl py-20 mx-auto flex flex-col justify-center">
        <TextGenerateEffect
          words={words}
          className="text-5xl md:text-8xl font-extrabold mb-4 text-slate-300"
        />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
        >
          <p className="text-slate-400 text- md:text-lg text-left py-2">
            Experienced Software Web Developer
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
          <div className="flex gap-5 md:flex-row md:gap-5">
            <Link
              href="#scroll"
              className="font-semibold border-2 border-orange-400 bg-gradient-to-br from-orange-300 to-orange-600 w-max text-black px-5 mt-6 md:mt-6 py-2 text-sm md:text-base rounded-full hover:bg-blue-100 lg:font-normal transition duration-300"
            >
              Learn More
            </Link>

            <Link
              href="mailto:dimasnyoman1@gmail.com"
              className="border-2 border-teal-400 w-max px-5 mt-6 md:mt-6 py-2 text-sm md:text-base font-semibold lg:font-normal rounded-full bg-gradient-to-br from-teal-300 to-teal-600 text-black transition duration-300"
            >
              Email Me
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 2,
        }}
        className="m-auto"
      >
        <Image
          src="/images/my-icon.png"
          width={350}
          height={350}
          alt="Dimas Nyoman Profile Pict"
          className="m-auto pb-16 max-w-6xl md:px-3 md:w-auto"
          priority="true"
        />
      </motion.div>
    </div>
  );
};

export default MainBanner;
