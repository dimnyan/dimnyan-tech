import Link from "next/link";
import { motion } from "framer-motion";

function ToProjects() {
  return (
    <div className="  text-white md:flex py-20 md:px-24 md:py-60 px-12 bg-img-to-project bg-center lg:bg-fixed bg-cover">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl mx-auto flex flex-col lg:items-center md:justify-center"
      >
        <h1 className="text-slate-100 text-5xl md:text-6xl font-extrabold mb-4 ">
          Where Art Meets Technology
        </h1>
        <p className="text-slate-300 md:text-lg py-2">
          Discover the Artistry in My Work
        </p>

        <Link
          href="./projects"
          className="bg-gradient-to-br from-orange-300 to-orange-600 w-max text-black px-6 mt-6 py-3 text-md font-bold rounded-full hover:bg-blue-100 transition duration-300"
        >
          See My Projects
        </Link>
      </motion.div>
    </div>
  );
}

export default ToProjects;
