import React from "react";
import Home from "./home/home";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
