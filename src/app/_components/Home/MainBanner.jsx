"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "../ui/textGenerateEffect";
import { useRef } from "react";

const MainBanner = () => {
  const words = "Your Vision, My Expertise";
  const mainRef = useRef();
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={mainRef}
      style={{ color: "#ECECF9" }}
      className="bg-gray-900 pt-10 px-12 align-middle md:px-24 w-full lg:min-h-screen"
    >
      <div className="relative lg:flex xl:pt-24 gap-3 max-w-screen-xl mx-auto z-10">
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
            <p className="text-slate-200 text-xl text-left py-6">
              Hello, I&apos;m Nyoman. Experienced Software Web Developer
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
          <motion.img
            src="/assets/pyramid.png"
            width={200}
            height={200}
            alt="Dimas Nyoman Profile Pict"
            // className="hidden lg:block absolute -top-64 -left-32"
            className="block absolute -top-64 -right-12 w-40 md:w-52 md:-left-32"
            style={{
              translateY: translateY,
            }}
          />
          <Image
            src="/images/my-icon.png"
            width={350}
            height={350}
            alt="Dimas Nyoman Profile Pict"
            className="m-auto pb-16 max-w-6xl md:px-3 md:w-auto"
            priority="true"
          />
          <motion.img
            src="/assets/prizm.png"
            width={250}
            height={250}
            alt="Dimas Nyoman Profile Pict"
            className="absolute -right-20 w-56"
            // className="hidden lg:block absolute -right-10"
            style={{
              translateY: translateY,
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
        className="absolute top-32 filter blur-3xl"
      >
        <Image
          src={"/assets/shapedimnyan.png"}
          alt="shape"
          height={1080}
          width={1080}
          className="left-10 opacity-40 md:opacity-20"
        />
      </motion.div>
    </div>
  );
};

export default MainBanner;
