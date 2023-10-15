import Image from "next/image";
import Link from "next/link";
import React from "react";
import Projects from "./ProjectsData";

const ProjectsItem = () => {
  return (
    <div>
      {Projects.map((item) => (
        <div className="md:flex py-10" key={item.title}>
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={200}
            className="shadow-lg mb-6 aspect-video object-cover"
          />
          <div className="md:px-6 md:w-2/3">
            <p className=" text-lg md:text-lg text-justify font-bold pb-2">
              {item.title}
            </p>
            <p className=" text-sm md:text-justify  ">{item.description}</p>
            <button className=" bg-gradient-to-br from-green-300 to-green-500 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
              <Link href={item.buttonLink} target="_blank">
                {item.buttonTitle}
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsItem;
