import { useEffect, useState } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "../Nav/Nav";
import Aside from "../Aside/Aside";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import "./Layout.css";

function Layout() {
  const [render, setRender] = useState(<div></div>);

  useEffect(() => {
    setRender(<Home setRender={setRender} />);
  }, []);

  return (
    <>
      <Nav render={render} setRender={setRender} />
      <main id="main">
        <Aside left={true} />
        <article>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                {render}
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

export default Layout;
