import Link from "next/link";
import { motion } from "framer-motion";

function ContactMe() {
  return (
    <div className=" text-white md:flex py-20 md:px-24 md:py-60 px-12 bg-img-contact-banner lg:bg-fixed bg-center bg-cover">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl mx-auto flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Your business needs a Website? <br /> Feel free to contact me!
        </h2>

        <Link
          href="mailto:dimas@dimnyan.tech"
          target="_blank"
          className=" bg-cyan-300 w-max text-black px-6 mt-6 py-3 text-md font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Email Me
        </Link>
      </motion.div>
    </div>
  );
}

export default ContactMe;
