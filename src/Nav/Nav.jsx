import { PropTypes } from "prop-types";

import { useEffect, useReducer } from "react";

import { useLocation, useHistory } from "react-router-dom";

import HomeLinkSVG from "./HomeLinkSVG";

import ResumeButton from "./ResumeButton";
import NavItem from "./NavItem";

import "./Nav.css";
import { delay_nav } from "../delays";

import DarkModeToggle from "./DarkModeToggle";

const links = [
  { id: "aboutMe", text: "About me" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

const initialState = {
  scrollPosition: "top",
  scrollID: "",
  isLoaded: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_SCROLL":
      return { ...state, scrollPosition: action.payload };
    case "SET_SCROLL_ID":
      return { ...state, scrollID: action.payload };
    default:
      return state;
  }
}

function Nav({ isLoaded }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    function scroll() {
      if (this.scrollY > 150) {
        dispatch({ type: "SET_SCROLL", payload: "hidden" });
      } else if (this.scrollY > 50 && this.scrollY <= 150) {
        dispatch({ type: "SET_SCROLL", payload: "hidden home-top" });
      } else if (this.scrollY <= 50) {
        dispatch({ type: "SET_SCROLL", payload: "top" });
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
    scrollTo(0, 0);
    history.push("/");
  };

  /*buttons */
  const scroll = (id) => {
    if (location.pathname !== "/") {
      history.push("/");
      dispatch({ type: "SET_SCROLL_ID", payload: id });
    } else {
      const el = document.getElementById(id);
      el.scrollIntoView();
    }
  };

  useEffect(() => {
    const el = document.getElementById(state.scrollID);
    if (el) {
      el.scrollIntoView();
    }
  }, [location]); //eslint-disable-line

  return (
    <header id="header">
      <nav className={state.scrollPosition}>
        {location.pathname === "/" && (
          <HomeLinkSVG click={link_scroll} scrollPosition={state.scrollPosition} />
        )}
        {location.pathname !== "/" && <HomeLinkSVG click={link_archive} />}

        <ul className={isLoaded}>
          <li style={{ animationDelay: `${delay_nav}ms` }}>
            <DarkModeToggle />
          </li>
          {links.map((item, i) => {
            return (
              <li key={i} style={{ animationDelay: `${(i + 1) * 100 + delay_nav}ms` }}>
                <NavItem
                  id={item.id}
                  text={item.text}
                  i={i}
                  scroll={() => scroll(item.id)}
                />
              </li>
            );
          })}
          <li style={{ animationDelay: `${(links.length + 1) * 100 + delay_nav}ms` }}>
            <ResumeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

Nav.propTypes = {
  isLoaded: PropTypes.string,
};
