import PropTypes from "prop-types";

import "./Project-withImg.css";

const leftright = (num) => {
  if (num % 2 === 0 || num === 0) return "left";
  return "right";
};

import { project_withImg, svg_git, svg_web } from "./Projects-data";

function Project_withImg({ i }) {
  const side = leftright(i);

  const name = project_withImg[i].name || "";
  const text = project_withImg[i].text || "";
  const stack = project_withImg[i].stack || [];
  const github = project_withImg[i].github || "https://github.com/zuzOup";
  const web = project_withImg[i].web || "https://github.com/zuzOup";
  const img = project_withImg[i].img || "";

  return (
    <div className={`project-withImg ${side}`}>
      <div className="text">
        <h3>{name}</h3>
        <p>{text}</p>
        <div className="stack-links">
          <ul>
            {stack.map((x) => {
              return <li key={x}>{x}</li>;
            })}
          </ul>
          <div className="links">
            <a href={github} className="github" target="_blank">
              {svg_git()}
            </a>
            <a href={web} className="web" target="_blank">
              {svg_web()}
            </a>
          </div>
        </div>
      </div>
      <div className="picture">
        <a href={web} className="web" target="_blank">
          <img src={img} alt={`Webpage Preview - ${name}`} />
        </a>
      </div>
    </div>
  );
}

export default Project_withImg;

Project_withImg.propTypes = { i: PropTypes.number };
