import { motion } from "framer-motion";

function IntroduceMe() {
  return (
    <div className=" bg-gradient-to-br from-cyan-100 to-cyan-300 text-white py-10  md:py-20">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="md:flex"
      >
        <div className="max-w-screen-xl mx-auto md:w-1/2 ">
          <p className=" text-lg md:text-xl px-6 pt-6 pb-3 text-black tracking-wider">
            Hi, There! I&apos;m Nyoman Lanang A.K.A Dimas.
            <br />
          </p>
          <p className="text-sm px-6 text-cyan-950">
            Indonesian Web Developer and Designer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 px-6 py-10 text-black tracking-tight">
            Empowering the Web with 1 Year of React JS Mastery and a Strong
            Portfolio to Prove It
          </h2>
        </div>
        <div className="max-w-screen-xl mx-auto ">
          <p className=" text-xl font-bold px-6 pt-5 text-black tracking-wider">
            Experiences
          </p>
          <div className="pt-6 pb-3">
            <h2 className="text-lg md:text-xl font-bold mb-2 pl-6 text-black">
              PT. LSP Gatensi Karya Konstruksi
            </h2>
            <p className=" text-sm px-6 mb-2 text-black ">
              as Front-End Web Engineer
            </p>
            <p className=" text-xs px-6 text-gray-800">Jan 2023 - Present</p>
          </div>
          <div className="pt-6 pb-3">
            <h2 className="text-lg md:text-xl  font-bold mb-2 px-6 text-black">
              PT. Equnix Business Solution
            </h2>
            <p className=" text-sm px-6 mb-2 text-black ">
              as Software Dev Intern
            </p>
            <p className=" text-xs px-6 text-gray-800">Apr 2021 - Jul 2021</p>
          </div>
          <div className="pt-6 pb-4">
            <h2 className="text-lg md:text-xl  font-bold mb-1 px-6 text-black">
              Lab Universitas Gunadarma
            </h2>
            <p className=" text-sm px-6 mb-2 text-black ">as Lab Asisstant</p>
            <p className=" text-xs px-6  text-gray-800">Mar 2021 - Sept 2022</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IntroduceMe;
