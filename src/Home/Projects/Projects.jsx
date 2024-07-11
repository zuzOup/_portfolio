import { useState } from "react";
import { PropTypes } from "prop-types";

import SectionHeader from "../../Components/SectionHeader";

import Projects_Big from "./Projects_Big";
import Projects_Squares from "./Projects_Squares";

import Project_List from "../../Project_List/Project_list";

import { projects_big, projects_square } from "./Projects-data";

import "./Projects.css";

function Projects({ setRender }) {
  const [show, setShow] = useState(4);

  const showMore = () => {
    setShow(projects_square.length);
  };

  const openList = () => {
    scrollTo(0, 0);
    setRender(<Project_List setRender={setRender} />);
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

Projects.propTypes = {
  setRender: PropTypes.func,
};
