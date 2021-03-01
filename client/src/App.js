import React from "react";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList,
} from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "fontsource-roboto";

function App() {
  return (
    <Router>
      <div className="demo-big-content">
        <Layout className="nav-list">
          <Header className="header-color" title={" "} scroll>
            <Navigation>
              <Link className="header-title" to="/">
                Jeri Fey Portfolio
              </Link>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<a href="/">Jeri Fey Portfolio</a>}>
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
          <Footer className="footer-color" size="mini">
            <FooterSection type="Middle">
              <FooterLinkList className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jerifey/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/jericfey/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
