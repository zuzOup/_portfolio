import PropTypes from "prop-types";
import parse from "html-react-parser";

import "./Project-Squares.css";

import { projects_square, splitText, svg_git, svg_web } from "./Projects-data";
import Project_links from "./Project_links";
import FadeInDiv from "../../Components/FadeInDiv";

function Projects_Squares({ i, isVisible }) {
  const data = projects_square[i];

  const name = data.name;
  const text = splitText(data.text, data.innerLink || "");
  const github = data.github || "";
  const web = data.web || "";

  return (
    <FadeInDiv className="project-square" isVisible={isVisible} delay={i * 0.05}>
      <h3>{name}</h3>
      <p>{parse(text)}</p>
      <Project_links className={"project-square_links"} github={github} web={web} />
    </FadeInDiv>
  );
}

export default Projects_Squares;

Projects_Squares.propTypes = { i: PropTypes.number, isVisible: PropTypes.bool };
