import Image from "next/image";
import Projects from "../Projects/ProjectsData";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedProject = () => {
  const topProjects = Projects.slice(0, 3);

  return (
    <div
      className="bg-slate-900 text-black px-12 pt-10 pb-20 min-h-screen md:px-24 flex align-middle"
      // className="lg:w-2/3 text-black pt-10 lg:py-32"
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="m-auto"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="py-10 text-4xl md:text-5xl font-extrabold md:mb-10 tracking-wider text-slate-200 xl:text-center">
          Featured Projects
        </h1>
        <ul className="grid grid-cols-1 flex-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {topProjects.map((item, index) => (
            <li
              className="bg-slate-800 p-3 rounded-md flex flex-col justify-between gap-5 lg:max-w-sm mx-auto"
              key={index}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={400}
                className="shadow-lg relative align-center hidden md:block"
              />
              <Link
                href={"/projects"}
                className="text-xl font-bold line-clamp-2 hover:text-orange-500"
              >
                {item.title}
              </Link>
              <p className="text-slate-400 line-clamp-4">{item.description}</p>
              <Link
                href="/projects"
                className="font-bold text-slate-200 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit"
              >
                See Projects
              </Link>
            </li>
          ))}
        </ul>

        {/*           
            {recentProject.sourceCodeLink ? (
              <button className=" bg-gradient-to-br from-blue-100 to-blue-300 w-max mr-5 text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link href={recentProject.sourceCodeLink} target="_blank">
                  View Source Code
                </Link>
              </button>
            ) : (
              <button
                disabled
                className=" bg-gradient-to-br from-slate-100 to-slate-300 w-max mr-5 text-slate-500 px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300"
              >
                Source Code Not Available to View
              </button>
            )}
            {recentProject.livePageLink && (
              <button className=" bg-gradient-to-br from-green-300 to-green-600 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link
                  href={recentProject.livePageLink}
                  target="_blank"
                  className="flex items-center"
                >
                  <div className="animate-ping absolute w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></div>
                  <div className=" w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></div>
                  View Page
                </Link>
              </button>
            )} */}
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
