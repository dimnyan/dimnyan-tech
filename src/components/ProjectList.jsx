import Image from "next/image";
import Link from "next/link";

function ProjectList() {
  return (
    <div className="bg-white text-black py-10 md:flex md:py-20 pt-20 pb-12 px-12 md:p-12 ">
      <div className="max-w-screen-xl flex flex-col">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 ">Projects</h1>
        <div className="md:flex md:flex-col">
          <div className="md:flex py-10">
            <Image
              src={"/f1-thumbnail.png"}
              alt="f1-project-dimnyan"
              width={300}
              height={200}
              className="shadow-lg mb-6 aspect-video object-cover"
            />
            <div className="md:px-6 md:w-2/3">
              <p className=" text-lg md:text-lg text-justify font-bold pb-2">
                F1 Standings Tracker - ReactJS Web Frontend
              </p>
              <p className=" text-sm md:text-justify text-gray-800 ">
                {`The "F1 Standings Tracker" is a web frontend project built using ReactJS that allows Formula 1 enthusiasts to stay updated with the latest drivers' standings in the F1 racing season. This dynamic and user-friendly application fetches data from an API source to provide real-time information about the current standings of F1 drivers, their points, and their team affiliations.`}
              </p>
              <button className=" bg-cyan-300 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link href="https://f1-dimnyan.netlify.app" target="_blank">
                  View Project
                </Link>
              </button>
            </div>
          </div>
          <div className="md:flex py-10">
            <Image
              src={"/penguin-thumbnail.png"}
              alt="penguin-project-dimnyan"
              width={300}
              height={200}
              className="shadow-lg mb-6 aspect-video object-cover"
            />
            <div className="md:px-6 md:w-2/3">
              <p className=" text-lg md:text-lg text-justify font-bold pb-2">
                Penguin Wave Animation
              </p>
              <p className=" text-sm md:text-justify text-gray-800 ">
                {`The Penguin Wave Animation project is a fun and interactive web animation created using HTML and CSS. It features an adorable penguin character with a waving hand, bringing life to the web page and engaging users with its playful movement.`}
              </p>
              <button className=" bg-cyan-300 w-max text-black px-5 mt-3 py-2 text-sm font-semibold rounded-full hover:bg-blue-100 transition duration-300">
                <Link
                  href="http://dimnyan.000webhostapp.com/Projects/penguinwave.html"
                  target="_blank"
                >
                  View Project
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
