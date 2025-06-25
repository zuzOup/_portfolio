import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import Nav from "../Nav/Nav";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";

import Title from "../Home/Title/Title";
import AboutMe from "../Home/AboutMe/AboutMe";
import Projects from "../Home/Projects/Projects";
import Contact from "../Home/Contact/Contact";

import Accomplishments from "../Accomplishments/Accomplishments";

import Project_List from "../Project_List/Project_list";

import SVGFilter from "../Components/SVGFilter";

import "./Layout.css";
import { useEffect, useState } from "react";

function Layout() {
  const [isLoaded, setIsLoaded] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded("loaded");
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <BrowserRouter>
        <SVGFilter />
        <Nav isLoaded={isLoaded} />
        <main id="main">
          <Aside left={true} isLoaded={isLoaded} />
          <article>
            <Switch>
              <Route exact path="/">
                <Title isLoaded={isLoaded} />
                <AboutMe />
                <Projects />
                <Contact />
              </Route>
              <Route exact path="/accomplishments">
                <Accomplishments />
              </Route>
              <Route exact path="/project_list">
                <Project_List />
              </Route>
              <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
          </article>
          <Aside left={false} isLoaded={isLoaded} />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Layout;
