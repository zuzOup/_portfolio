import PropTypes from "prop-types";

import { svg_git, svg_web } from "../Home/Projects/Projects-data";

function SectionBody({ data }) {
  return data.map((project) => {
    return (
      <ul key={project.name} className="project-list_row">
        <li>
          <p className="project-list_name">{project.name}</p>
        </li>
        <li>
          <p className="project-list_desc">{project.description}</p>
        </li>
        <li className="project-list_links">
          {project.url && (
            <a href={project.url} target="_blank">
              {svg_web()}
            </a>
          )}
          <a href={project.repo} target="_blank">
            {svg_git()}
          </a>
        </li>
      </ul>
    );
  });
}

export default SectionBody;

SectionBody.propTypes = { data: PropTypes.array };
