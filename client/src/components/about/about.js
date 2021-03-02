import React from "react";
import { Grid, Cell } from "react-mdl";
import Mterebus from "../../assets/images/MtErebus.jpg";

function About() {
  return (
    <div>
      <Grid className="about-text">
        <Cell col={6}>
          <h3>About Me</h3>
          <p>
            Hi! I’m Jeri Fey and I’m an IT Help Desk manager for a German
            plumbing manufacturing company. Most of my days are filled with
            figuring out how to fix things, processes, and sometimes people. ;-)
            I love trying to figure out a problem. I especially enjoy learning
            new languages or applications and then applying that knowledge to
            resolve an issue or improve a process.
          </p>
          <p>
            I’ve worked in IT since 1998 and taken a couple of weird paths along
            the way. I have worked in Iraq as a civilian contractor from
            ’04-’06. Mostly making sure Call of Duty was working on the MWR
            computers and cleaning the dust out. For 2 seasons I was the
            Southernmost PC tech in the world while working at South Pole
            station in Antarctica. Really great people and a lifetime of
            experiences.
          </p>
          <p>
            In 2014 I graduated from CU Boulder with a degree in Geology and
            helped melt ice cores from Antarctica to collect temperature data of
            the Earth dating back to 60,000 years ago. After that I wanted to
            learn more about process control systems, so I became a SCADA
            administrator for the City of Golden water treatment plant. There I
            was introduced to ServiceNow as a ticket tracking platform, the ITIL
            v3 framework, and got to work more in application systems
            administration and project management.
          </p>
          <p>
            I’ve been a manager of one help desk or another for a couple of
            years now and I keep running into situations where I need some sort
            of business solution or way to streamline/automate processes. I’m
            interested in learning development/programming to help me create
            solutions for myself, my team, and the business. Wish me luck!
          </p>
        </Cell>
        <Cell col={6}>
          <img 
          src={Mterebus}
          alt="South Pole"
          />
        </Cell>
      </Grid>
    </div>
  );
}

export default About;
