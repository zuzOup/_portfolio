import { PropTypes } from "prop-types";

import { useEffect, useReducer } from "react";

import { useLocation, useHistory } from "react-router-dom";

import HomeLinkSVG from "./HomeLinkSVG";

import ResumeButton from "./ResumeButton";
import NavItem from "./NavItem";

import "./Nav.css";
import { delay_nav, delay_nav_changed } from "../delays";

import DarkModeToggle from "./DarkModeToggle";
import changeDelayOnMount_hook from "../changeDelayOnMount_hook";

const links = [
  { id: "aboutMe", text: "About me" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

const initialState = {
  scrollPosition: "top",
  scrollPosition_home: "top",
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

function Nav({ isLoaded, className = "", setIsNavOpen }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const delayNav = changeDelayOnMount_hook(delay_nav, 0, delay_nav_changed);

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    function scroll() {
      if (this.scrollY > 150) {
        dispatch({ type: "SET_SCROLL", payload: "hidden" });
      } else if (this.scrollY > 50 && this.scrollY <= 150) {
        setIsNavOpen((x) => {
          if (x === true) {
            return !x;
          } else return x;
        });
        console.log("nav isnt open");
        dispatch({ type: "SET_SCROLL", payload: "active" });
      } else if (this.scrollY <= 50) {
        dispatch({ type: "SET_SCROLL", payload: "top" });
        console.log("nav is open");
        setIsNavOpen((x) => {
          if (x === false) {
            return !x;
          } else return x;
        });
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  /*homebutton*/
  const locationPathway = location.pathname === "/";

  const homeButton_path = () => {
    const scroll = () => {
      scrollTo(0, 0);
    };

    const scroll_push = () => {
      scrollTo(0, 0);
      history.push("/");
    };

    return locationPathway ? scroll : scroll_push;
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

    setIsNavOpen(false);
  };

  useEffect(() => {
    const el = document.getElementById(state.scrollID);
    if (el) {
      el.scrollIntoView();
    }
  }, [location]); //eslint-disable-line

  return (
    <nav className={`${className} ${state.scrollPosition}`}>
      <HomeLinkSVG
        click={homeButton_path()}
        scrollPosition={locationPathway ? state.scrollPosition : "path"}
        delay={`${(links.length + 2) * 100 + delayNav}ms`}
        isLoaded={isLoaded}
      />
      <ul className={isLoaded}>
        <li style={{ animationDelay: `${delayNav}ms` }}>
          <DarkModeToggle />
        </li>
        {links.map((item, i) => {
          return (
            <li key={i} style={{ animationDelay: `${(i + 1) * 100 + delayNav}ms` }}>
              <NavItem
                id={item.id}
                text={item.text}
                i={i}
                scroll={() => scroll(item.id)}
              />
            </li>
          );
        })}
        <li style={{ animationDelay: `${(links.length + 1) * 100 + delayNav}ms` }}>
          <ResumeButton />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  isLoaded: PropTypes.string,
  className: PropTypes.string,
};
