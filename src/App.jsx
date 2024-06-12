import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout acc={false} />
        </Route>
        <Route exact path="/accomplishments">
          <Layout acc={true} />
        </Route>
        {/* <Route path="*" component={<NotFound />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
