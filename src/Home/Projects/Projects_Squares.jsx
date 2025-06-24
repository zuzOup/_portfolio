import PropTypes from "prop-types";
import parse from "html-react-parser";

import "./Project-Squares.css";

import { projects_square, splitText, svg_git, svg_web } from "./Projects-data";
import Project_links from "./Project_links";

function Projects_Squares({ i }) {
  const data = projects_square[i];

  const name = data.name;
  const text = splitText(data.text, data.innerLink || "");
  const github = data.github || "";
  const web = data.web || "";

  return (
    <div className="project-square">
      <h3>{name}</h3>
      <p>{parse(text)}</p>
      <Project_links className={"project-square_links"} github={github} web={web} />
    </div>
  );
}

export default Projects_Squares;

Projects_Squares.propTypes = { i: PropTypes.number };
