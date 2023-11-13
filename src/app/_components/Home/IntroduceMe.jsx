import { motion } from "framer-motion";

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
      // className=" bg-gradient-to-br from-green-100 to-green-300 text-white pt-10 md:py-20"
      className="py-10 lg:w-1/3 lg:py-36"
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
        }}
        className=""
      >
        <div className="">
          {" "}
          <p className="text-2xl md:text-3xl font-bold mt-10 mb-8 text-slate-200 tracking-wider">
            Tech Stack
          </p>
          <li className="flex flex-col gap-5">
            {techStack.map((item, index) => (
              <ul className="" key={index}>
                <h2 className="text-lg md:text-xl mb-1 w-fit text-slate-300">
                  {/* {item.companyName} */}
                  {item}
                </h2>
              </ul>
            ))}
          </li>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold mt-10 mb-8 text-slate-200 tracking-wider">
            Experiences
          </p>
          <li className="flex flex-col gap-5">
            {experiences.map((item, index) => (
              <ul className="" key={index}>
                <h2 className="text-lg md:text-xl font-bold mb-2 w-fit text-slate-300">
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
      </motion.div>
    </div>
  );
}

export default IntroduceMe;
