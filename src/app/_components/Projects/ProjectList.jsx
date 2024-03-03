import { motion } from "framer-motion";
import ProjectsItem from "./ProjectsItem";
// import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Project | dimnyan",
    description:
      "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in NextJS / ReactJS",
    image: "/images/my-icon.png",
  };
}

function ProjectList() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-950 text-black py-10 md:flex md:pb-40 md:pt-22 pt-20 pb-12 px-12 md:py-12 md:px-24 md:justify-center">
      {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"> */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl flex flex-col"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="py-10 text-4xl md:text-5xl lg:text-6xl font-extrabold md:mb-10 tracking-wider text-slate-200 xl:text-center">
          Projects
        </h1>
        <div className="grid grid-cols-1 flex-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 lg:gap-9">
          <ProjectsItem />
        </div>
        {/* <p className="text-center text-xl">See More on My Github...</p>
        <Link
          href="https://www.github.com/dimnyan"
          target="_blank"
          className="bg-gradient-to-br from-gray-500 to-gray-700 m-auto w-max text-white tracking-wider p-3 mt-6 md:px-6 md:mt-6 md:py-3 text-sm md:text-md font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Visit My Github
        </Link> */}
      </motion.div>
    </div>
  );
}

export default ProjectList;
