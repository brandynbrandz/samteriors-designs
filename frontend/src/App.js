import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ComingSoon from "./pages/ComingSoon";
import UnderMaintenance from "./pages/UnderMaintenance";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/services"}`}
            component={Services}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/consultation"}`}
            component={ComingSoon}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/blog/trending"}`}
            component={UnderMaintenance}
          />
          <Route component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
