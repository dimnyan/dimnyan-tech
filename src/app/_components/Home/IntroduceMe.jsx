import { motion } from "framer-motion";
// import Link from "next/link";

function IntroduceMe() {
  const techStack = [
    "ReactJS",
    "NextJS",
    "MongoDB",
    "MySQL",
    "NodeJS",
    "ExpressJS",
  ];
  const experiences = [
    {
      companyName: "PT. LSP Gatensi Karya Konstruksi",
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
      className="bg-gray-800 text-white pt-24 pb-10 px-12 md:px-24 md:py-20 w-full"
      // className="py-10 lg:w-1/3 lg:py-36"
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="my-auto"
      >
        <div>
          <p className="text-sm text-slate-400 mb-2">
            Indonesian ReactJS Engineer
          </p>
          <p className="text-lg font-bold lg:text-2xl pb-3 text-slate-300 tracking-wider">
            Hi, There! I&apos;m Nyoman Lanang A.K.A Dimas.
            <br />
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-3 px-6 py-10 text-black tracking-tight">
            Empowering the Web with 1 Year of React JS Mastery and a Strong
            Portfolio to Prove It
          </h2> */}
        </div>
        <div
          // initial={{ opacity: 0, x: -30 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{
          //   duration: 0.8,
          // }}
          className="lg:flex lg:gap-12"
        >
          <div className="flex-1">
            <p className="text-3xl text-center md:text-4xl font-bold mt-10 mb-8 text-slate-200 tracking-wider">
              Tech Stack
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {techStack.map((item, index) => (
                <li
                  className="bg-slate-700 text-center rounded-md py-2"
                  key={index}
                >
                  <span className="text-lg md:text-xl text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-2">
            <p className="text-center text-3xl md:text-4xl font-bold mt-10 mb-8 text-slate-200 tracking-wider">
              Experiences
            </p>
            <li className="flex flex-col xl:flex-row justify-between gap-5 text-center">
              {experiences.map((item, index) => (
                <ul
                  className="bg-slate-700 rounded-md p-2 flex flex-col gap-2 flex-1"
                  key={index}
                >
                  <h2 className="text-lg md:text-xl font-bold text-slate-300">
                    {/* {item.companyName} */}
                    {item.jobTitle}
                  </h2>
                  {/* <p className=" text-sm mb-2 text-slate-400 ">
                    at {item.companyName}
                  </p> */}
                  <p className="text-xs text-slate-500">{item.period}</p>
                </ul>
              ))}
            </li>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroduceMe;
