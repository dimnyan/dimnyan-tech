import { motion } from "framer-motion";
import ProjectsItem from "./ProjectsItem";

function ProjectList() {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-950 text-black py-10 md:flex md:py-40 pt-20 pb-12 px-12 md:p-12 ">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-screen-xl flex flex-col"
        style={{ color: "#ECECF9" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 ">Projects</h1>
        <div className="md:flex md:flex-col">
          <ProjectsItem />
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectList;
