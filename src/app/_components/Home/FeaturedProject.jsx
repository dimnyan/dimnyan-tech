import Image from "next/image";
import Projects from "../Projects/ProjectsData";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedProject = () => {
  const recentProject = Projects[0];
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-950 text-black py-10 md:flex md:py-20 pt-20 pb-12 px-12 md:p-12 ">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl flex flex-col"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold md:mb-10 md:text-center">
          Recent Project
        </h1>
        <div
          className="md:grid md:grid-cols-2 py-10 md:justify-around"
          key={recentProject.title}
        >
          <Image
            src={recentProject.imageUrl}
            alt={recentProject.title}
            width={500}
            height={300}
            className="shadow-lg mb-6 aspect-video object-cover"
          />
          <div className="md:px-6">
            <p className="text-lg md:text-2xl text-justify font-bold pb-5">
              {recentProject.title}
            </p>
            <p className="text-slate-300 text-base pb-5 md:pb-2 md:text-justify">
              {recentProject.description}
            </p>
            <button className="bg-gradient-to-br from-green-300 to-green-500 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
              <Link href={recentProject.buttonLink} target="_blank">
                {recentProject.buttonTitle}
              </Link>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
