"use client";
import Image from "next/image";
import Projects from "../Projects/ProjectsData";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { useRouter } from "next/navigation";
import { Button } from "../ui/movingBorder";
import Link from "next/link";

const FeaturedProject = () => {
  const topProjects = Projects.slice(0, 4);
  const router = useRouter();

  return (
    <div
      id="projects"
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
          Top Projects
        </h1>

        {/* <p className="sticky z-10 top-20">Featured</p> */}

        <ul className="grid grid-cols-1 flex-1 gap-5 xl:grid-cols-2 lg:gap-9">
          {topProjects.map((item) => (
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
                    className="line-clamp-2 text-sm  mt-2 text-neutral-300"
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
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                      onClick={() => router.push(`/projects/${item.title}`)}
                    >
                      See More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </li>
          ))}
        </ul>
        <Link href="/projects">
          <div className="w-full flex justify-center">
            <Button className="bg-slate-900 text-white border-slate-800 text-base">
              See More Projects
            </Button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
