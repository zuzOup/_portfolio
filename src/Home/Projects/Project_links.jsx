import PropTypes from "prop-types";

import { svg_git, svg_web } from "./Projects-data";

function Project_links({ className, github, web }) {
  return (
    <div className={className}>
      {github && (
        <a target="_blank" href={github} className="github">
          {svg_git()}
        </a>
      )}
      {web && (
        <a target="_blank" href={web} className="web">
          {svg_web()}
        </a>
      )}
    </div>
  );
}

export default Project_links;

Project_links.propTypes = {
  className: PropTypes.string,
  github: PropTypes.string,
  web: PropTypes.string,
};
