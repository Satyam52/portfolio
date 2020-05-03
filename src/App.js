import React, { Fragment } from "react";
import Resume from "./components/Resume/resume";
import "./App.css";
import NavBar from "./components/Navigation/index";
import Projects from "./components/Projects/projects";
import Profile from "./components/Profile/profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing/landing";
function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/resume" component={Resume} />
      </Fragment>
    </Router>
  );
}

export default App;
