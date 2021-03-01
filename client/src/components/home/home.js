import React from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "../../assets/JeriAvatar.gif";

function Home() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={Avatar} alt="avatar" className="avatar-img" />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>
              ServiceNow | HTML/CSS | Bootstrap | JavaScript | React | NodeJS |
              Express | MongoDB
            </p>
            <div className="social-links">
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
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Home;
