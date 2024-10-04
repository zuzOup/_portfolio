import { useHistory } from "react-router-dom";

import SectionHeader from "../../Components/SectionHeader";

import Projects_Big from "./Projects_Big";
import Projects_Squares from "./Projects_Squares";

import { projects_big, projects_square } from "./Projects-data";

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
      {projects_big.map((x, i) => {
        return <Projects_Big key={i} index={i} data={x} />;
      })}
      <div className="squares">
        {projects_square.map((x, i) => {
          return <Projects_Squares key={i} index={i} data={x} />;
        })}
      </div>

      <button onClick={openList} className="button_project">
        Open Archive
      </button>
    </section>
  );
}
export default Projects;
