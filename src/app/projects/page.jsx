"use client";
// import ContactMe from "@/app/_components/Projects/ContactMe";
// import Footer from "@/app/_components/Misc/Footer";
// import Navbar from "@/app/_components/Misc/Navbar";
// import ProjectBanner from "@/app/_components/Projects/ProjectBanner";
import ProjectList from "@/app/_components/Projects/ProjectList";

// export const metadata = {
//   title: "Projects | dimnyan",
//   description:
//     "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in ReactJS",
// };

function Projects() {
  return (
    <>
      <div className="bg-black" style={{ color: "#ECECF9" }}>
        {/* <ProjectBanner /> */}
        <ProjectList />
        {/* <ContactMe /> */}
      </div>
    </>
  );
}

export default Projects;
