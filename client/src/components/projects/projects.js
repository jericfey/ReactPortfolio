import React, { useState } from "react";
import { Tab, Tabs } from "react-mdl";

function Projects(props) {
  const [tabs, setTabs] = useState({ activeTab: 0 });

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
    </div>
  );
}

export default Projects;
