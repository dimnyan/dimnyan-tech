import Link from "next/link";
import { motion } from "framer-motion";

function ToProjects() {
  return (
    <div className="  text-white md:flex py-20 md:px-24 md:py-60 px-12 bg-fixed bg-img-to-project bg-center bg-cover">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl mx-auto flex flex-col md:items-center md:justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 ">
          Where Art Meets Technology
        </h1>
        <p className=" md:text-lg py-2">Discover the Artistry in My Work</p>

        <Link
          href="./projects"
          className=" bg-green-300 w-max text-black px-6 mt-6 py-3 text-md font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          View Projects
        </Link>
      </motion.div>
    </div>
  );
}

export default ToProjects;
