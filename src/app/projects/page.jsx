// "use client";

import ProjectList from "@/app/_components/Projects/ProjectList";

export const metadata = {
  title: "Projects | dimnyan",
  description:
    "Nyoman Lanang Kresna | Indonesian Front-End IT Web Developer specialized in NextJS / ReactJS",
  image: "/images/my-icon.png",
};

function Projects() {
  return (
    <>
      <div>
        {/* <ProjectBanner /> */}
        <ProjectList />
        {/* <ContactMe /> */}
      </div>
    </>
  );
}

export default Projects;
