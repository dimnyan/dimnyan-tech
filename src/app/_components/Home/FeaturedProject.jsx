import Image from "next/image";
import Projects from "../Projects/ProjectsData";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedProject = () => {
  const firstProject = Projects[0];
  const secondProject = Projects[1];
  const thirdProject = Projects[2];

  return (
    <div
      id="scroll"
      // className=" bg-gradient-to-br from-green-100 to-green-300 text-black pt-10 md:py-44"
      className="lg:w-2/3 text-black pt-10 lg:py-32"
    >
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl flex flex-col"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="my-5 text-4xl md:text-5xl font-extrabold md:mb-10 text-slate-200">
          Featured Projects
        </h1>
        <div className="py-10 text-slate-300 flex flex-col gap-8">
          <motion.div
            // initial={{ x: -30, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.5 }}
            className="md:flex align-center gap-5 my-5"
          >
            <Image
              src={firstProject.imageUrl}
              alt={firstProject.title}
              width={300}
              height={200}
              className="shadow-lg mb-8 relative align-center"
            />
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-5 line-clamp-2">
                {firstProject.title}
              </h3>
              <p className="text-slate-400 line-clamp-4">
                {firstProject.description}
              </p>
            </div>
          </motion.div>
          <motion.div
            // initial={{ x: -30, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.5, delay: 0.5 }}
            className="md:flex align-center gap-5 my-5"
          >
            <Image
              src={secondProject.imageUrl}
              alt={secondProject.title}
              width={300}
              height={200}
              className="shadow-lg mb-8 relative align-center"
            />
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-5 line-clamp-2">
                {secondProject.title}
              </h3>
              <p className="text-slate-400 line-clamp-4">
                {secondProject.description}
              </p>
            </div>
          </motion.div>
          <motion.div
            // initial={{ x: -30, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.5, delay: 1.0 }}
            className="md:flex align-center gap-5 my-5"
          >
            <Image
              src={thirdProject.imageUrl}
              alt={thirdProject.title}
              width={300}
              height={200}
              className="shadow-lg mb-8 relative align-center"
            />
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-5 line-clamp-2">
                {thirdProject.title}
              </h3>
              <p className="text-slate-400 line-clamp-4">
                {thirdProject.description}
              </p>
            </div>
          </motion.div>

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
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
