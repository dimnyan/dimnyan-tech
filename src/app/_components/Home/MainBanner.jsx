import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faUbuntu,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/textGenerateEffect";

// export async function generateMetadata() {
//   return {
//     title: "Home | dimnyan",
//     description:
//       "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in NextJS / ReactJS",
//     image: "/images/my-icon.png",
//   };
// }

export const metadata = {
  title: "Home | dimnyan",
  description:
    "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in NextJS / ReactJS",
  image: "/images/my-icon.png",
};

const MainBanner = () => {
  const words = "Nyoman Lanang Kresna Erlangga";
  // const words = "Bringing Ideas to Life on the Web";

  return (
    <div
      style={{ color: "#ECECF9" }}
      className="bg-gray-900 h-screen flex px-12 align-middle md:px-24"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center">
        <TextGenerateEffect
          words={words}
          className="text-5xl md:text-8xl font-extrabold mb-4 text-slate-300"
        />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
        >
          <p className="text-slate-400 text- md:text-lg text-left py-2">
            Experienced Software Web Developer
          </p>
          <div className="py-5 flex gap-6">
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#06b6d4" }}
              size="xl"
            />
            <Image
              src={"/images/tailwind-css.png"}
              alt="tailwind"
              width={30}
              height={15}
              className="my-1"
            />
            <Image
              src={"/images/nextjs.png"}
              alt="nextjs"
              width={24}
              height={15}
            />
            {/* <FontAwesomeIcon
              icon={faJs}
              size="xl"
              style={{ color: "#F0DB4F" }}
            /> */}
            <FontAwesomeIcon
              icon={faUbuntu}
              size="xl"
              style={{ color: "#ffa600" }}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#efefef" }}
            />
          </div>
          <div className="flex gap-5 md:flex-row md:gap-5">
            <Link
              href="#scroll"
              className="font-semibold border-2 border-orange-400 bg-gradient-to-br from-orange-300 to-orange-600 w-max text-black px-5 mt-6 md:mt-6 py-2 text-sm md:text-base rounded-full hover:bg-blue-100 transition duration-300"
            >
              Learn More
            </Link>

            <Link
              href="#projects"
              className="border-2 border-teal-400 w-max px-5 mt-6 md:mt-6 py-2 text-sm md:text-base font-semibold rounded-full bg-gradient-to-br from-teal-300 to-teal-600 text-black transition duration-300"
            >
              See My Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainBanner;
