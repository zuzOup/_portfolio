import { useEffect, useReducer } from "react";

import { useLocation, useHistory } from "react-router-dom";

import HomeLinkSVG from "./HomeLinkSVG";

import "./Nav.css";
import "./ResumeButton.css";

const links = [
  { id: "aboutMe", text: "About me" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

const initialState = {
  scrollPosition: "top",
  scrollID: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_SCROLL":
      return { ...state, scrollPosition: action.payload };
    case "SET_SCROLL_ID":
      return { ...state, scrollID: action.payload };
    // case "RESET":
    //   return initialState;
    default:
      return state;
  }
}

function Nav() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [scrollPosition, setscrollPosition] = useState("top");
  // const [scrollID, setScrollID] = useState("");

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    function scroll() {
      if (this.scrollY > 50) {
        dispatch({ type: "SET_SCROLL", payload: "hidden" });
        // setscrollPosition("hidden");
      } else if (this.scrollY <= 50) {
        dispatch({ type: "SET_SCROLL", payload: "top" });
        // setscrollPosition("top");
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

        <ul>
          {links.map((item, i) => {
            return (
              <li key={i}>
                <div className={`nav_dots nav_dots${i}`}></div>
                <button
                  onClick={() => {
                    scroll(item.id);
                  }}
                >
                  {item.text}
                </button>
                <div className={`nav_dots nav_dots${i}`}></div>
              </li>
            );
          })}
          <li>
            <a href="/Resume.pdf" target="_blank" id="nav_resume">
              <div>
                <span>Résumé</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
