"use client";

import { motion } from "framer-motion";
import ProjectsItem from "./ProjectsItem";

function ProjectList() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-950 text-black py-10 md:flex md:pb-40 md:pt-22 pt-20 pb-12 px-12 md:py-12 md:px-24 md:justify-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl flex flex-col xl:max-w-screen-2xl"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="py-10 text-4xl md:text-5xl lg:text-6xl font-extrabold md:mb-10 tracking-wider text-slate-200 xl:text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 flex-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 lg:gap-9 2xl:grid-cols-3">
          <ProjectsItem />
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectList;
