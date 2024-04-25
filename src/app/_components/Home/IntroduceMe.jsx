import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
// import Link from "next/link";

function IntroduceMe() {
  const techStack = [
    { languageName: "ReactJS", icon: "/images/reactjs.png" },
    { languageName: "NextJS", icon: "/images/nextjs.png" },
    {
      languageName: "MongoDB",
      icon: "/images/mongodb.png",
    },
    {
      languageName: "ExpressJS",
      icon: "/images/expressjs.png",
    },
    {
      languageName: "MySQL",
      icon: "/images/mysql.png",
    },
    {
      languageName: "NodeJS",
      icon: "/images/nodejs.png",
    },
  ];
  const experiences = [
    {
      companyName: "LSP Gatensi Karya Konstruksi",
      jobTitle: "Front-End Web Engineer",
      period: "Jan 2023 - Present",
    },
    {
      companyName: "PT. Equnix Business Solution",
      jobTitle: "Software Dev Intern",
      period: "Apr 2021 - Jul 2021",
    },
    {
      companyName: "Lab Universitas Gunadarma",
      jobTitle: "Lab Asisstant",
      period: "Mar 2021 - Sept 2022",
    },
  ];

  return (
    <div
      id="scroll"
      className="bg-gray-800 text-white py-24 px-12 md:px-24 md:py-20 xl:pb-40 w-full"
      // className="py-10 lg:w-1/3 lg:py-36"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
        }}
        className="my-auto"
      >
        <div className="">
          <div className="">
            <p className="text-4xl text-center font-bold mt-10 mb-8 md:text-6xl md:my-20 xl:my-32 text-slate-200 tracking-wider">
              My Tech Stack
            </p>
            <ul className="md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 xl:grid-cols-3">
              {techStack.map((item, index) => (
                <li
                  key={index}
                  className="flex pl-8 py-8 pr-5 mx-auto md:mx-0 xl:mx-auto"
                >
                  <Image
                    src={item.icon}
                    alt={item.languageName}
                    width={60}
                    height={60}
                    className="mr-8"
                  />
                  <p className="m-auto md:mx-0 text-3xl">{item.languageName}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="text-center text-4xl font-bold mt-10 mb-8 md:text-6xl md:my-20 xl:my-32 text-slate-200 tracking-wider">
              Experiences
            </p>
            <ul className="flex flex-col justify-between gap-5 text-center xl:grid xl:grid-cols-3">
              {experiences.map((item, index) => (
                <div key={index} className="xl:flex">
                  <li className="rounded-md p-2 flex flex-col gap-2 flex-1">
                    <h2 className="text-lg font-bold text-slate-300 md:text-2xl">
                      {item.jobTitle}
                    </h2>
                    <p className="text-slate-400 md:text-xl">{item.period}</p>
                  </li>

                  {index == experiences.length - 1 ? (
                    ""
                  ) : (
                    <>
                      <Separator className="mt-5 xl:hidden w-48 mx-auto bg-slate-400" />
                      <Separator
                        orientation="vertical"
                        className="hidden xl:block"
                      />
                    </>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroduceMe;
