import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectBanner from "@/components/ProjectBanner";
import ProjectList from "@/components/ProjectList";

function Projects() {
  return (
    <div className="bg-black">
      <Navbar />
      <ProjectBanner />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default Projects;
