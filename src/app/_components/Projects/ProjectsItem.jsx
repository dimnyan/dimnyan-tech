import Image from "next/image";
import Link from "next/link";
import React from "react";
import Projects from "./ProjectsData";
import { motion } from "framer-motion";

const ProjectsItem = () => {
  return (
    <>
      {Projects.map((item) => (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="md:flex py-10"
          key={item.title}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={200}
            className="shadow-lg mb-6 aspect-video object-cover "
          />
          <div className="md:px-6 md:w-2/3 ">
            <p className=" text-lg md:text-xl text-justify font-bold pb-2">
              {item.title}
            </p>

            <p className="text-slate-400 text-sm md:text-justify line-clamp-3 ">
              {item.description}
            </p>
            {item.sourceCodeLink ? (
              <button className=" bg-gradient-to-br from-blue-100 to-blue-300 w-max mr-5 text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link href={item.sourceCodeLink} target="_blank">
                  View Source Code
                </Link>
              </button>
            ) : (
              <button
                disabled
                className=" bg-gradient-to-br from-slate-100 to-slate-300 w-max mr-5 text-slate-500 px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300"
              >
                Not Available to View
              </button>
            )}
            {item.livePageLink && (
              <button className=" bg-gradient-to-br from-green-300 to-green-600 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link
                  href={item.livePageLink}
                  target="_blank"
                  className="flex items-center"
                >
                  <div className="animate-ping absolute w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></div>
                  <div className=" w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></div>
                  View Page
                </Link>
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectsItem;
