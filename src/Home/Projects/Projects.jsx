import SectionHeader from "../../Components/SectionHeader";
import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

import Project_withImg from "./Project_withImg";
import Projects_Squares from "./Projects_Squares";

import { project_withImg, projects_square } from "./Projects-data";

import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <SectionHeader title={"Projects"} />
      <div>
        {project_withImg.map((x, i) => {
          return <Project_withImg key={i} i={i} />;
        })}
      </div>
      <div className="squares">
        {projects_square.map((x, i) => {
          return <Projects_Squares key={i} i={i} />;
        })}
      </div>

      <Butt className="projects">
        <a className="butt-btn projects" target="_blank" href="./project_list">
          <Butt_inside className="projects" text="Open Project List" />
        </a>
      </Butt>
    </section>
  );
}
export default Projects;
