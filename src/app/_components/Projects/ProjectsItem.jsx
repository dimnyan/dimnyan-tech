import Image from "next/image";
// import Link from "next/link";
import React from "react";
import Projects from "./ProjectsData";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

const ProjectsItem = () => {
  const router = useRouter();

  return (
    <>
      {Projects.map((item) => (
        // <div key={item.title}>
        <CardContainer key={item.title} className="inter-var">
          <CardBody className="relative group/card hover:shadow-2xlhover:shadow-emerald-500/[0.1] bg-slate-900 border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white line-clamp-1 cursor-pointer"
              onClick={() => router.push(`/projects/${item.title}`)}
            >
              {item.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-1 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                onClick={() => router.push(`/projects/${item.title}`)}
              >
                See More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        // </div>
      ))}
      {/* {Projects.map((item, index) => (
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
            href={`/projects/${item.title}`}
            className="text-xl font-bold line-clamp-2 hover:text-orange-500"
          >
            {item.title}
          </Link>
          <p className="text-slate-400 line-clamp-4">{item.description}</p>
          <Link
            href={`/projects/${item.title}`}
            className="font-bold text-slate-200 hover:text-orange-500 border-b border-b-orange-500 pb-1 w-fit"
          >
            See More
          </Link>
        </li>
      ))} */}
      {/* {Projects.map((item) => (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="md:flex py-10"
          key={item.title}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={200}
            className="shadow-lg mb-6 aspect-video object-cover "
          />
          <div className="md:px-6 md:w-2/3 ">
            <p className=" text-lg md:text-xl text-justify font-bold pb-2">
              {item.title}
            </p>

            <p className="text-slate-400 text-sm md:text-justify line-clamp-3 ">
              {item.description}
            </p>
            {item.sourceCodeLink ? (
              <button className=" bg-gradient-to-br from-blue-100 to-blue-300 w-max mr-5 text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link href={item.sourceCodeLink} target="_blank">
                  View Source Code
                </Link>
              </button>
            ) : (
              <button
                disabled
                className=" bg-gradient-to-br from-slate-100 to-slate-300 w-max mr-5 text-slate-500 px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300"
              >
                Not Available to View
              </button>
            )}
            {item.livePageLink && (
              <button className=" bg-gradient-to-br from-green-300 to-green-600 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link
                  href={item.livePageLink}
                  target="_blank"
                  className="flex items-center"
                >
                  <div className="animate-ping absolute w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></div>
                  <div className=" w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></div>
                  View Page
                </Link>
              </button>
            )}
          </div>
        </motion.div>
      ))} */}
    </>
  );
};

export default ProjectsItem;
