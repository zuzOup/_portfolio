import { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import ResumeButton from "./ResumeButton";
import DarkModeToggle from "./DarkModeToggle";

import { links } from "./links";

import "./mobileHeader.css";

import useDelayedUnmount from "../hooks/useDelayedUnmount";

const DotWrapper = ({ children }) => {
  return (
    <>
      <div className={`nav_dots nav_dots_mobile`}></div>
      {children}
      <div className={`nav_dots nav_dots_mobile`}></div>
    </>
  );
};

DotWrapper.propTypes = { children: PropTypes.node };

function MobileHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const history = useHistory();

  const shouldRenderNav = useDelayedUnmount(isMobileNavOpen, 450);

  const isOpen = () => {
    return isMobileNavOpen ? "open" : "close";
  };

  const clickHandle = (id) => {
    if (location.pathname !== "/") {
      history.push("/");
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(id);
      el.scrollIntoView();
    }

    setIsMobileNavOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={`mobile-btn ${isOpen()}`}
        id="mobile-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <header className={`mobile ${isOpen()}`}></header>
      {shouldRenderNav && (
        <nav className={`mobile ${isOpen()}`}>
          <ul className="mobile">
            <li className={`mobile ${isOpen()}`}>
              <DotWrapper>
                <button
                  onClick={() => {
                    clickHandle("title");
                  }}
                >
                  Home
                </button>
              </DotWrapper>
            </li>
            {links.map((item, i) => {
              return (
                <li key={i} className={`mobile ${isOpen()}`}>
                  <DotWrapper>
                    <button
                      onClick={() => {
                        clickHandle(item.id);
                      }}
                    >
                      {item.text}
                    </button>
                  </DotWrapper>
                </li>
              );
            })}

            <li className={`mobile-dark mobile ${isOpen()}`}>
              <DarkModeToggle />
            </li>

            <li className={`mobile-resume mobile ${isOpen()}`}>
              <ResumeButton mobile="mobile" />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default MobileHeader;
