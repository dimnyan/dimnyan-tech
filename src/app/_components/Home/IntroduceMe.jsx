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
      className="bg-gradient-to-br from-slate-700 to-slate-950 text-black pt-10 md:py-20"
    >
      <div

      // className="md:flex"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-screen-lg mx-auto md:w-max"
        >
          <p className="text-lg lg:text-2xl px-6 pt-6 pb-3 text-white tracking-wider">
            Hi, There! I&apos;m Nyoman Lanang A.K.A Dimas.
            <br />
          </p>
          <p className="text-sm px-6 text-slate-200">
            Indonesian ReactJS Engineer
          </p>
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-3 px-6 py-10 text-black tracking-tight">
            Empowering the Web with 1 Year of React JS Mastery and a Strong
            Portfolio to Prove It
          </h2> */}
        </motion.div>
        <div className="md:w-max mt-10 md:mx-auto p-10 bg-gradient-to-br from-gray-800 to-gray-900 md:rounded-xl ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="text-center text-2xl md:text-3xl md:pb-10 font-bold px-6 text-white tracking-wider"
          >
            Experiences
          </motion.p>
          {experiences.map((item, index) => (
            <motion.ul
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 1, opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="pt-6 pb-3"
              key={index}
            >
              <li className="text-white">
                <h2 className="text-lg md:text-xl font-bold mb-2 px-6 w-fit text-white">
                  {/* {item.companyName} */}
                  {item.jobTitle}
                </h2>
                <p className=" text-sm px-6 mb-2 text-white ">
                  at {item.companyName}
                  {/* as {item.jobTitle} */}
                </p>
                <p className=" text-xs px-6 text-gray-300">{item.period}</p>
              </li>
            </motion.ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroduceMe;
