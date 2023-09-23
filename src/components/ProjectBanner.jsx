import Link from "next/link";

function ProjectBanner() {
  return (
    <div className=" text-white md:flex py-20 md:py-40 px-12 md:p-12 bg-img bg-fixed md:bg-center bg-cover">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 ">
          Experienced ReactJS Developer
        </h1>
        <p className=" md:text-lg py-2">
          Creating innovative and interactive web applications with React JS
        </p>

        <Link
          href="https://www.github.com/dimnyan"
          target="_blank"
          className=" bg-cyan-300 w-max text-black px-6 mt-6 py-3 text-md font-semibold rounded-full hover:bg-blue-100 transition duration-300"
        >
          Visit My Github
        </Link>
      </div>
    </div>
  );
}

export default ProjectBanner;
