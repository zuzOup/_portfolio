import { useEffect, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

import HomeLinkSVG from "./HomeLinkSVG";

import "./Nav.css";

const links = [
  { id: "aboutMe", text: "About me" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

function Nav() {
  const [isScroll, setIsScroll] = useState("top");
  const [scrollID, setScrollID] = useState("");

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    function scroll() {
      if (this.scrollY > 50) {
        setIsScroll("hidden");
      } else if (this.scrollY <= 50) {
        setIsScroll("top");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  /*homebutton*/

  const link_scroll = () => {
    scrollTo(0, 0);
  };

  const link_archive = () => {
    history.push("/");
  };

  /*buttons */
  const scroll = (id) => {
    if (location.pathname !== "/") {
      history.push("/");
      setScrollID(id);
    } else {
      const el = document.getElementById(id);
      el.scrollIntoView();
    }
  };

  useEffect(() => {
    const el = document.getElementById(scrollID);
    if (el) {
      el.scrollIntoView();
    }
  }, [location]); //eslint-disable-line

  return (
    <header id="header">
      <nav className={isScroll}>
        {location.pathname === "/" && (
          <HomeLinkSVG click={link_scroll} isScroll={isScroll} />
        )}
        {location.pathname !== "/" && <HomeLinkSVG click={link_archive} />}

        <ul>
          {links.map((item, i) => {
            return (
              <li key={i}>
                <div className={`smallDot nav_dots${i}`}></div>
                <button
                  onClick={() => {
                    scroll(item.id);
                  }}
                >
                  {item.text}
                </button>
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
