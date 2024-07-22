import PropTypes from "prop-types";
import parse from "html-react-parser";

import { svg_git, svg_web } from "./Projects-data";

function Projects_Squares({ data }) {
  const name = data.name;
  const text = data.text;
  const github = data.github;
  const web = data.web;
  // const stack = data.stack || [];
  
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{parse(text)}</p>
        <span>
          {github && (
            <a target="_blank" href={github}>
              {svg_git()}
            </a>
          )}
          {web && (
            <a target="_blank" href={web}>
              {svg_web()}
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

export default Projects_Squares;

Projects_Squares.propTypes = { data: PropTypes.object };
