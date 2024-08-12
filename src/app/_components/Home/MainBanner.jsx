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
      className="bg-gray-900 px-12 align-middle md:px-24 lg:min-h-screen"
    >
      <div className="lg:flex xl:pt-24 gap-3 max-w-screen-xl mx-auto">
        <div className="py-20 mx-auto flex flex-col justify-center">
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

            <div className="flex gap-5 md:flex-row md:gap-5">
              <Link
                href="#scroll"
                className="font-semibold border-2 border-orange-500 bg-orange-500 w-max text-white px-5 mt-6 md:mt-6 py-2 text-sm md:text-base rounded-full hover:bg-transparent lg:font-normal transition duration-300"
              >
                Learn More
              </Link>

              <Link
                href="mailto:dimasnyoman1@gmail.com"
                className="border-2 border-teal-400 w-max px-5 mt-6 md:mt-6 py-2 text-sm md:text-base font-semibold lg:font-normal rounded-full text-teal-300 transition duration-300 hover:bg-teal-500 hover:text-black"
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
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 2,
        }}
        className="mx-auto flex gap-6 justify-center py-20 xl:pt-16"
      >
        <FontAwesomeIcon
          icon={faReact}
          style={{ color: "#06b6d4" }}
          size="2xl"
          className="md:w-16 md:h-32"
        />

        <Image
          src={"/images/tailwind-css.png"}
          alt="tailwind"
          width={45}
          height={15}
          className="my-1 md:w-16 md:h-32 md:py-10"
        />
        <Image
          src={"/images/nextjs.png"}
          alt="nextjs"
          width={35}
          height={15}
          className="md:w-16 md:h-32 md:py-7"
        />
        <FontAwesomeIcon
          icon={faUbuntu}
          size="2xl"
          style={{ color: "#ffa600" }}
          className="md:w-16 md:h-32"
        />
        <FontAwesomeIcon
          icon={faGithub}
          size="2xl"
          style={{ color: "#efefef" }}
          className="md:w-16 md:h-32"
        />
      </motion.div>
    </div>
  );
};

export default MainBanner;
