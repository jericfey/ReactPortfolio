import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "fontsource-roboto";


function App() {
  return (
    <Router>
      <div className="demo-big-content">
        <Layout>
          <Header title="Jeri Fey Portfolio" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
