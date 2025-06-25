const links = [
  { id: "github", href: "https://github.com/zuzOup" },
  { id: "linkedin", href: "https://www.linkedin.com/in/zuzana-oupicka" },
  { id: "codepen", href: "https://codepen.io/zuzOup" },
];

import PropTypes from "prop-types";

import { svg } from "./AsideLeft_svg";

function AsideLeft({ delayAside }) {
  return (
    <div id="aside_left" style={{ transitionDelay: `${delayAside}ms` }}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id} className={link.id}>
              <div className="aside_left-icon-bck"></div>
              <a href={link.href} target="_blank">
                {svg(link.id)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

AsideLeft.propTypes = {
  delayAside: PropTypes.number,
};

export default AsideLeft;
