import { PropTypes } from "prop-types";

import HomeLinkSVG from "./HomeLinkSVG";

import "./Nav.css";
import { useEffect, useState } from "react";

const links = [
  { href: "../#article_aboutMe", text: "About me", target: "_self" },
  { href: "../#article_projects", text: "Projects", target: "_self" },
  { href: "../#article_contact", text: "Contact", target: "_self" },
];

function link(item, i) {
  return (
    <li key={i}>
      <span className={`smallDot nav_dots nav_dots${i}`}></span>
      <a href={item.href} target={item.target} className="nav_links">
        {item.text}
      </a>
      <span className={`smallDot nav_dots nav_dots${i}`}></span>
    </li>
  );
}

function Nav({ acc }) {
  const [isScroll, setIsScroll] = useState("headerTop");

  useEffect(() => {
    function scroll() {
      const scrollDown = this.oldScroll < this.scrollY;
      this.oldScroll = this.scrollY;

      if (scrollDown && this.scrollY > 100) {
        setIsScroll("headerHidden");
      } else if (this.scrollY === 0) {
        setIsScroll("headerTop");
      } else {
        setIsScroll("headerActive");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <header id="header" className={isScroll}>
      <nav>
        {acc ? <HomeLinkSVG /> : <span></span>}

        <ul id="nav_ul">
          {links.map((item, i) => {
            return link(item, i);
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

Nav.propTypes = {
  acc: PropTypes.bool,
};

export default Nav;
