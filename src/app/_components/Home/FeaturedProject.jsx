import Image from "next/image";
import Projects from "./ProjectsData";

const FeaturedProject = () => {
  const recentProject = Projects[0];
  console.log(recentProject);
  return (
    <div>
      <h2>Featured Project</h2>
      <Image src="d.png" alt="title" width={300} height={150} />
      <p></p>
    </div>
  );
};

export default FeaturedProject;
