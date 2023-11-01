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
      className=" bg-gradient-to-br from-green-100 to-green-300 text-black pt-10 md:py-20"

      // className="bg-gradient-to-br from-slate-700 to-slate-950 text-black py-10 md:flex md:py-20 pt-20 pb-12 px-12 md:p-12"
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl flex flex-col mx-auto px-10"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold md:mb-10 md:text-center text-black">
          Featured Project
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-10 py-10 md:justify-around text-black">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            // className="flex items-center bg-white"
          >
            <Image
              src={firstProject.imageUrl}
              alt={firstProject.title}
              width={500}
              height={300}
              className="shadow-lg m-auto mb-8"
            />
            <p className="text-lg lg:text-xl text-center font-bold pb-5">
              {firstProject.title}
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            // className="flex items-center bg-white"
          >
            <Image
              src={secondProject.imageUrl}
              alt={secondProject.title}
              width={500}
              height={300}
              className="shadow-lg m-auto mb-8"
            />
            <p className="text-lg lg:text-xl text-center font-bold pb-5">
              {secondProject.title}
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            // className="flex items-center bg-white"
          >
            <motion.div whileHover={{ scale: 1.05, borderRadius: "20%" }}>
              <Image
                src={thirdProject.imageUrl}
                alt={thirdProject.title}
                width={500}
                height={300}
                className="shadow-lg m-auto mb-8"
              />
            </motion.div>
            <p className="text-lg lg:text-xl text-center font-bold pb-5">
              {thirdProject.title}
            </p>
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
