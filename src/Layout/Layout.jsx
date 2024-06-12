import { PropTypes } from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "../Nav/Nav";
import Aside from "../Aside/Aside";
import Home from "../Home/Home";
import Accomplishments from "../Accomplishments/Accomplishments";
import Footer from "../Footer/Footer";

import "./Layout.css";

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Aside left={true} />
        <article>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/accomplishments">
                <Accomplishments />
              </Route>
              <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
          </BrowserRouter>
        </article>
        <Aside left={false} />
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  acc: PropTypes.bool,
};

export default Layout;
