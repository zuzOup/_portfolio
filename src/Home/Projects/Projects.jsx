import { useState } from "react";

import { useHistory } from "react-router-dom";

import SectionHeader from "../../Components/SectionHeader";

import Projects_Big from "./Projects_Big";
import Projects_Squares from "./Projects_Squares";

import { projects_big, projects_square } from "./Projects-data";

import "./Projects.css";

function Projects() {
  const [show, setShow] = useState(4);

  const history = useHistory();

  const showMore = () => {
    setShow(projects_square.length);
  };

  const openList = () => {
    console.log(1);
    scrollTo(0, 55);
    history.push("/project_list");
  };

  return (
    <section id="projects">
      <SectionHeader title={"Projects"} />
      {projects_big.map((x, i) => {
        return <Projects_Big key={i} index={i} data={x} />;
      })}
      <div className="squares">
        {projects_square.slice(0, show).map((x, i) => {
          return <Projects_Squares key={i} index={i} data={x} />;
        })}
      </div>
      {show === 4 && (
        <button onClick={showMore} className="button_project">
          Show More
        </button>
      )}
      {show > 4 && (
        <button onClick={openList} className="button_project">
          Open Archive
        </button>
      )}
    </section>
  );
}
export default Projects;
