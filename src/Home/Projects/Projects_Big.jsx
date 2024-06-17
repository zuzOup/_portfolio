import PropTypes from "prop-types";

const leftright = (num) => {
  if (num % 2 === 0 || num === 0) return "left";
  return "right";
};

const color = (index) => {
  const colors = ["255, 188, 132", "255, 194, 177", "253, 161, 144", "253, 138, 125"];
  //--yellowPink2, --yellowPink3,--yellowPink4,--pink

  return `rgba(${colors[index % 4]},0.93)`;
};

import { svg_git, svg_web } from "./Projects-data";

function Projects_Big({ index, data }) {
  const side = leftright(index);

  const name = data.name || "";
  const text = data.text || "";
  const stack = data.stack || [];
  const github = data.github || "https://github.com/zuzOup";
  const web = data.web || "https://github.com/zuzOup";
  const img = data.img || "";

  return (
    <div className={`big ${side}`}>
      <div className="content">
        <div className="text" style={{ backgroundColor: color(index) }}>
          <h3>{name}</h3>
          <p>{text}</p>
          <ul>
            {stack.map((x) => {
              return <li key={x}>{x}</li>;
            })}
          </ul>
        </div>
        <div className="links">
          <a href={github} className="github" target="_blank">
            {svg_git()}
          </a>
          <a href={web} className="web" target="_blank">
            {svg_web()}
          </a>
        </div>
      </div>
      <div className="picture">
        <a href={web} className="web" target="_blank">
          <img src={img} alt="project" />
        </a>
      </div>
    </div>
  );
}

export default Projects_Big;

Projects_Big.propTypes = { index: PropTypes.number, data: PropTypes.object };
