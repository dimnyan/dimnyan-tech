"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "/utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (idx == wordsArray.length - 1) {
            return (
              <motion.span
                key={word + idx}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 text-5xl md:text-8xl font-extrabold mb-4 text-slate-300 opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          } else {
            return (
              <motion.span
                key={word + idx}
                className="text-5xl md:text-8xl font-extrabold mb-4 text-slate-300 opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          }
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
