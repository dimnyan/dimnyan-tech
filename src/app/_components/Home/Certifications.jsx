"use client";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Certifications = () => {
  const certifications = [
    {
      title: "Front End Development Libraries",
      description:
        "This certificate is awarded in recognition of successful completion of the Front End Development Libraries Certification offered by freeCodeCamp.org. The program provided a comprehensive lessons and tasks in the ReactJS, Redux and Bootstrap development. Through a mix of lessons and projects.",
      imageUrl: "/images/front-end-cert.png",
    },
    {
      title: "Responsive Web Design",
      description:
        "This certificate is awarded in recognition of successful completion of the Responsive Web Design Certification offered by freeCodeCamp.org. The program provided a comprehensive foundation in the fundamental building blocks of HTML and CSS web development. Through a mix of lessons and projects.",
      imageUrl: "/images/responsive-web-cert.png",
    },
  ];
  return (
    <div
      id="scroll"
      className="relative bg-dot-white/[0.2] bg-slate-800 text-black px-12 pt-10 pb-20 min-h-screen md:px-24 flex align-middle"
      // className="lg:w-2/3 text-black pt-10 lg:py-32"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="m-auto"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="sticky py-10 text-4xl md:text-6xl font-extrabold md:mb-10 tracking-wider text-white text-center">
          Certifications
        </h1>
        <ul className="grid grid-cols-1  flex-1 gap-5 2xl:grid-cols-2 lg:gap-9 xl:gap-12">
          {certifications.map((item) => (
            <li key={item.title}>
              <CardContainer className="inter-var">
                <CardBody className="relative group/card hover:shadow-2xlhover:shadow-emerald-500/[0.1] bg-slate-900 border-black/[0.1] w-auto sm:w-[35rem] md:w-[40rem] h-auto rounded-xl p-6 border  ">
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
                    className="text-sm mt-2 text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.imageUrl}
                      height="1000"
                      width="1000"
                      className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={item.description}
                    />
                  </CardItem>
                  <Link
                    href={
                      "https://www.freecodecamp.org/certification/dimnyan/responsive-web-design"
                    }
                    target="_blank"
                    className="flex justify-between items-center mt-10"
                  >
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                    >
                      See More
                    </CardItem>
                  </Link>
                </CardBody>
              </CardContainer>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Certifications;
