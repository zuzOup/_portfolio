import PropTypes from "prop-types";
import Nav from "./Nav";
import { useState } from "react";
import windowSize_hook from "../windowSize_hook";

import "./Header-mobile.css";

function Header({ isLoaded }) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const isMobile = windowSize_hook() <= 768;

  return (
    <header id="header">
      {isMobile && (
        <>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`mobile_header_btn ${isNavOpen ? "itISopen" : "IsIshidden"}`}
          >
            {isNavOpen ? "Close" : "Menu"}
          </button>
          <Nav
            isLoaded={isLoaded}
            className={isNavOpen ? "mobile-open" : "mobile-hidden"}
            setIsNavOpen={setIsNavOpen}
          />
        </>
      )}

      {!isMobile && <Nav isLoaded={isLoaded} />}
    </header>
  );
}

export default Header;

Header.propTypes = { isLoaded: PropTypes.string };
