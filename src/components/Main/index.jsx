import React from "react";

import Projects from "./Projects";
import projectData from "../data";
import About from "./About";

import "./Main.css";

const projects = projectData;

function Main() {
  return (
    <body className="main-body">
      <div className="main-bg">
      <About />
      <div className="projects-container">
        <h2 className="projects-header">List of Projects</h2>
        <div className="projects-wrapper">
          {projects.map((project, index) => {
            return <Projects key={index} indexNum={index} project={project} />;
          })}
        </div>
      </div>
      </div>
    </body>
  );
}

export default Main;
