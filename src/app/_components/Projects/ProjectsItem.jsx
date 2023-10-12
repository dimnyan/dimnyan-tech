import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = [
  {
    title: "Expenses App - ReactJS",
    description:
      "This project is apart of my Udemy Course. It includes React components, Props, states, dynamic styling to update expenses. It also includes Filtering by Year and also Animated Graph Chart with the power of react ",
    buttonLink: "https://github.com/dimnyan/expense-app",
    buttonTitle: "View Source Code",
    imageUrl: "/images/expense-thumbnail.png",
  },
  {
    title: "Landing Page - NextJS & TailwindCSS / Vercel",
    description:
      "Making a memorable first impression on the digital stage. Welcome to my Personal Landing Page! Build with Next.js & Tailwind CSS. This project is a showcase of modern web development excellence, powered by Next.js and styled with the elegance of Tailwind CSS. Hosted on Vercel, it's a dynamic, lightning-fast, and visually stunning personal landing page",
    buttonLink: "https://github.com/dimnyan/dimnyan-tech",
    buttonTitle: "View Source Code",
    imageUrl: "/images/landing-thumbnail.png",
  },
  {
    title: "F1 Standings Tracker - ReactJS API",
    description:
      'The "F1 Standings Tracker" is a web frontend project built using ReactJS that allows Formula 1 enthusiasts to stay updated with the latest drivers standings in the F1 racing season. This dynamic and user-friendly application fetches data from an API source to provide real-time information about the current standings of F1 drivers, their points, and their team affiliations.',
    buttonLink: "https://f1.dimnyan.tech/",
    buttonTitle: "Visit Project",
    imageUrl: "/images/f1-thumbnail.png",
  },
  {
    title: "Penguin Wave Animation - HTML & CSS",
    description:
      "The Penguin Wave Animation project is a fun web animation created using HTML and CSS. It features an adorable penguin character with a waving hand, bringing life to the web page users with its playful movement.",
    buttonLink: "http://dimnyan.000webhostapp.com/Projects/penguinwave.html",
    buttonTitle: "Visit Project",
    imageUrl: "/images/penguin-thumbnail.png",
  },
];

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
