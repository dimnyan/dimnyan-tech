import { motion } from "framer-motion";
import ProjectsItem from "./ProjectsItem";
import Link from "next/link";

function ProjectList() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-950 text-black py-10 md:flex md:pb-40 md:pt-32 pt-20 pb-12 px-12 md:p-12 ">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl flex flex-col"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">Projects</h1>
        <div className="md:flex md:flex-col">
          <ProjectsItem />
        </div>
        <p className="text-center text-xl">See More on My Github...</p>
        <Link
          href="https://www.github.com/dimnyan"
          target="_blank"
          className="bg-gradient-to-br from-gray-500 to-gray-700 m-auto w-max text-white tracking-wider p-3 mt-6 md:px-6 md:mt-6 md:py-3 text-sm md:text-md font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Visit My Github
        </Link>
      </motion.div>
    </div>
  );
}

export default ProjectList;
