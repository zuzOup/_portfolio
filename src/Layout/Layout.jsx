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

import "./Layout.css";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main id="main">
          <Aside left={true} />
          <article>
            <Switch>
              <Route exact path="/">
                <Title />
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
          <Aside left={false} />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Layout;
