"use client";
import { motion } from "framer-motion";

const LogosSection = () => {
  const logos = ["mysql", "github", "nodejs", "react", "next", "mongo"];
  return (
    <div className="bg-slate-200 py-5 md:py-12 overflow-hidden">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
        <motion.div
          className="flex gap-10 md:gap-28 lg:gap-44 lg:pr-44"
          animate={{
            translateX: "-120%",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {logos.map((logo) => (
            <motion.img
              key={logo}
              src={`/logos/${logo}.png`}
              alt=""
              width={200}
              height={45}
              className="my-auto w-[100px] md:w-[200px]"
            />
          ))}
          {logos.map((logo) => (
            <motion.img
              key={logo}
              src={`/logos/${logo}.png`}
              alt=""
              width={200}
              height={45}
              className="my-auto w-[100px] md:w-[200px]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogosSection;
