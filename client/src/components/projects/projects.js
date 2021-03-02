import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

function Projects() {
  const [tabs, setTabs] = useState({ activeTab: 0 });

  function toggleCategories() {
    if (tabs === 0) {
      return (
        <div className="projects-grid">
          {/* Project #1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i1.wp.com/eric.blog/wp-content/uploads/2015/02/react_logo.png?resize=300%2C300&strip=all&ssl=1) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Some text on the card</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu sytle={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i1.wp.com/eric.blog/wp-content/uploads/2015/02/react_logo.png?resize=300%2C300&strip=all&ssl=1) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>Some text on the card</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu sytle={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (tabs === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (tabs === 2) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (tabs === 3) {
      return (
        <div>
          <h1>This is HTML/CSS</h1>
        </div>
      );
    }
  }

  return (
    <div className="category-tabs">
      <Tabs
        activeTab={tabs}
        onChange={(tabId) => setTabs({ activeTab: tabId })}
        ripple
      >
        <Tab>React</Tab>
        <Tab>JavaScript</Tab>
        <Tab>MongoDB</Tab>
        <Tab>HTML/CSS</Tab>
      </Tabs>

      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories}</div>
          <div className="projects-grid">
            {/* Project #1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://i1.wp.com/eric.blog/wp-content/uploads/2015/02/react_logo.png?resize=300%2C300&strip=all&ssl=1) center / cover",
                }}
              >
                React Project #1
              </CardTitle>
              <CardText>Some text on the card</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu sytle={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project #2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://i1.wp.com/eric.blog/wp-content/uploads/2015/02/react_logo.png?resize=300%2C300&strip=all&ssl=1) center / cover",
                }}
              >
                React Project #2
              </CardTitle>
              <CardText>Some text on the card</CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu sytle={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
