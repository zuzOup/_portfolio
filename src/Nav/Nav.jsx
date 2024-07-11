import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import HomeLinkSVG from "./HomeLinkSVG";
import Home from "../Home/Home";

import "./Nav.css";

const links = [
  { href: "../#aboutMe", text: "About me" },
  { href: "../#projects", text: "Projects" },
  { href: "../#contact", text: "Contact" },
];

function Nav({ render, setRender }) {
  const [isScroll, setIsScroll] = useState("top");

  useEffect(() => {
    function scroll() {
      if (this.scrollY > 100) {
        setIsScroll("hidden");
      } else if (this.scrollY <= 100) {
        setIsScroll("top");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const HomeLinkSVG_return = () => {
    setRender(<Home setRender={setRender} />);
  };

  const HomeLinkSVG_scroll = () => {
    scrollTo(0, 0);
  };

  return (
    <header id="header">
      <nav className={isScroll}>
        {isScroll === "top" &&
          !(
            render.type.name === "Accomplishments" || render.type.name === "Project_List"
          ) && <div></div>}
        {isScroll === "hidden" && <HomeLinkSVG click={HomeLinkSVG_scroll} />}
        {(render.type.name === "Accomplishments" ||
          render.type.name === "Project_List") && (
          <HomeLinkSVG click={HomeLinkSVG_return} />
        )}

        <ul>
          {links.map((item, i) => {
            return (
              <li key={i}>
                <div className={`smallDot nav_dots${i}`}></div>
                <a href={item.href} target="_self">
                  {item.text}
                </a>
                <div className={`smallDot nav_dots${i}`}></div>
              </li>
            );
          })}
          <li>
            <a href="/CV_ZuzanaOupicka.pdf" target="_blank" id="nav_resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

Nav.propTypes = { render: PropTypes.object, setRender: PropTypes.func };
