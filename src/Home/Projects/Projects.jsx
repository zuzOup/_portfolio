import SectionHeader from "../../Components/SectionHeader";

// import BigProjects from "./BigProjects-old";

import Projects_Big from "./Projects_Big";

import { projects_big, project_squares } from "./Projects-data";

import "./Projects.css";
import Projects_Squares from "./Projects_Squares";

function Projects() {
  return (
    <section id="projects">
      <SectionHeader title={"Projects"} />
      {projects_big.map((x, i) => {
        return <Projects_Big key={i} index={i} data={x} />;
      })}
      <div className="squares">
        {project_squares.map((x, i) => {
          return <Projects_Squares key={i} index={i} data={x} />;
        })}
      </div>
    </section>
  );
}
export default Projects;

// if (i % 2 === 0 || i === 0) {
