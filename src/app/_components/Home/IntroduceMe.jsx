import { motion } from "framer-motion";

function IntroduceMe() {
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
      className="bg-slate-950 text-black pt-10 md:w-1/3 md:py-20 overflow-hidden"
    >
      <div
        // className="md:flex"
        className="my-10"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-sm px-6 text-slate-400 mb-2">
            Indonesian ReactJS Engineer
          </p>
          <p className="text-lg font-bold lg:text-2xl px-6 pb-3 text-slate-300 tracking-wider">
            Hi, There! I&apos;m Nyoman Lanang A.K.A Dimas.
            <br />
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-3 px-6 py-10 text-black tracking-tight">
            Empowering the Web with 1 Year of React JS Mastery and a Strong
            Portfolio to Prove It
          </h2> */}
        </motion.div>
        <div className="">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="text-2xl md:text-3xl font-bold px-6 my-10 text-slate-200 tracking-wider"
          >
            Experiences
          </motion.p>
          <li className="flex flex-col gap-12">
            {experiences.map((item, index) => (
              <motion.ul
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className=""
                key={index}
              >
                <li>
                  <h2 className="text-lg md:text-xl font-bold mb-2 px-6 w-fit text-slate-300">
                    {/* {item.companyName} */}
                    {item.jobTitle}
                  </h2>
                  <p className=" text-sm px-6 mb-2 text-slate-400 ">
                    at {item.companyName}
                    {/* as {item.jobTitle} */}
                  </p>
                  <p className=" text-xs px-6 text-slate-500">{item.period}</p>
                </li>
              </motion.ul>
            ))}
          </li>
        </div>
      </div>
    </div>
  );
}

export default IntroduceMe;
