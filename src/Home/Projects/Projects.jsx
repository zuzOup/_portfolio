import { useHistory } from "react-router-dom";

import SectionHeader from "../../Components/SectionHeader";

import Project_withImg from "./Project_withImg";
import Projects_Squares from "./Projects_Squares";

import { project_withImg, projects_square } from "./Projects-data";

import "./Projects.css";

function Projects() {
  const history = useHistory();

  const openList = () => {
    scrollTo(0, 0);
    history.push("/project_list");
  };

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

      <button onClick={openList} className="button_project">
        Open Archive
      </button>
    </section>
  );
}
export default Projects;
