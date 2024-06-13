import { useEffect, useState, useRef } from "react";
import { PropTypes } from "prop-types";

import HomeLinkSVG from "./HomeLinkSVG";

import "./Nav.css";

const links = [
  { href: "../#aboutMe", text: "About me" },
  { href: "../#projects", text: "Projects" },
  { href: "../#contact", text: "Contact" },
];

function Nav() {
  const [isScroll, setIsScroll] = useState("top");

  const timerId = useRef();

  useEffect(() => {
    function scroll() {
      if (timerId.current) clearTimeout(timerId.current);

      const scrollDown = this.oldScroll < this.scrollY;
      this.oldScroll = this.scrollY;

      if (scrollDown && this.scrollY > 100) {
        setIsScroll("hidden");
      } else if (this.scrollY === 0) {
        setIsScroll("top");
      } else {
        setIsScroll("active");
        timerId.current = setTimeout(() => {
          setIsScroll("hidden");
        }, 2000);
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
      clearTimeout(timerId.current);
    };
  }, []);

  return (
    <header id="header">
      <nav className={isScroll}>
        <HomeLinkSVG />
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

Nav.propTypes = { acc: PropTypes.bool };
