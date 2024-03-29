// import Link from "next/link";
import { motion } from "framer-motion";

function ProjectBanner() {
  return (
    <div className="md:flex py-20 md:px-24 md:py-60 px-12 bg-img-project-banner lg:bg-fixed bg-cover">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl mx-auto flex flex-col items-center"
      >
        <h1 className="tracking-wider text-4xl md:text-5xl font-extrabold mb-4 text-center ">
          Crafting Digital Experiences
        </h1>
        <p className=" md:text-lg py-2 text-center">
          Here are my Projects Showcase.
        </p>

        {/* <Link
          href="https://www.github.com/dimnyan"
          target="_blank"
          className="bg-gradient-to-br from-cyan-300 to-cyan-500 w-max text-black p-3 mt-6 md:px-6 md:mt-6 md:py-3 text-sm md:text-md font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Visit My Github
        </Link> */}
      </motion.div>
    </div>
  );
}

export default ProjectBanner;
