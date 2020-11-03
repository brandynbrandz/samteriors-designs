import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";

import "./assets/styles/animated-on3step.css";
import BlogHomePage from "./pages/BlogSidebar";
import BlogPage from "./pages/BlogDetails";
import ServicesPage from "./pages/Service";
import ServiceDetailsPage from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetailsPage from "./pages/TeamDetails";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ComingSoon from "./pages/ComingSoon";
import UnderMaintenance from "./pages/UnderMaintenance";
import ScrollToTop from "./helpers/ScrollToTop";
import Preloader from "./helpers/Preloader";
// import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <>
      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <>
            {/* <ScrollToTop> */}
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
                path={`${process.env.PUBLIC_URL + "/blog"}`}
                component={BlogHomePage}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/blog/trending"}`}
                component={UnderMaintenance}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`}
                component={BlogPage}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/consultation"}`}
                component={ComingSoon}
              />
              <Route component={Error404} />
            </Switch>
            {/* </ScrollToTop> */}
            {/* <ScrollToTopBtn /> */}
          </>
        )}
      </Router>
    </>
  );
}

export default App;
