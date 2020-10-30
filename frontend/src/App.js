import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Service";
import ServiceDetailsPage from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetailsPage from "./pages/TeamDetails";
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
            component={AboutPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/services"}`}
            component={ServicesPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/service/:serviceID"}`}
            component={ServiceDetailsPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/team-member/:teamID"}`}
            component={TeamDetailsPage}
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
