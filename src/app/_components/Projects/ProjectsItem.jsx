import Image from "next/image";
// import Link from "next/link";
import React from "react";
import Projects from "./ProjectsData";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

const ProjectsItem = () => {
  const router = useRouter();

  return (
    <>
      {Projects.map((item) => (
        <CardContainer key={item.title} className="inter-var">
          <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-slate-900 border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
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
              className="text-neutral-500 line-clamp-2 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {item.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={item.imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
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
      ))}
    </>
  );
};

export default ProjectsItem;
