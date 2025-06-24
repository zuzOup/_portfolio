import PropTypes from "prop-types";

import Project_links from "./Project_links";

import { project_withImg } from "./Projects-data";

import "./Project-withImg.css";

const leftright = (num) => {
  if (num % 2 === 0 || num === 0) return "left";
  return "right";
};

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
        <div className="project-withImg_title">
          <div className="smallDot"></div>
          <h3>{name}</h3>
          <div className="smallDot"></div>
        </div>
        <p>{text}</p>
        <div className="stack-links">
          <ul>
            {stack.map((x) => {
              return <li key={x}>{x}</li>;
            })}
          </ul>
          <Project_links className={"links"} github={github} web={web} />
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
