import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Avatar from "../../assets/JeriAvatar.gif";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Jeri Fey</h2>
          <img src={Avatar} alt="avatar" style={{ height: "250px" }} />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Feel free to connect with me on LinkedIn.
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Roboto" }}
                >
                  <i className="fa fa-phone" aria-hidden="true" />
                  303-406-1063
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "25px", fontFamily: "Roboto" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <a href="mailto:jericfey@gmail.com">
                  jericfey@gmail.com
                  </a>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "25px", fontFamily: "Roboto" }}
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/in/jerifey/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    linkedin.com/in/jerifey/
                    
                  </a>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
