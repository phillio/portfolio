import React from "react";

import Projects from "./Projects";
import projectData from "../data";

import "./Main.css";

const projects = projectData;

function Main(props) {
  return (
    <body className="main-body">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I am a software engineer, with a skillset in full-stack coding for web
          development. <br />
          With an ever-growing technology industry, my professional focus will
          be on writing code <br />
          for computer programs and software. <br />
          My strengths in the workplace include resourcefulness, a willingness
          to be a team player, <br />
          and a strong determination to solve any problems Iencounter.
        </p>
      </div>
      <div className="projects-container">
        <h2 className="projects-header" >List of Projects</h2>
        <div className="projects-wrapper">
          {projects.map(project => {
            return <Projects key={project.index} project={project} />;
          })}
        </div>
      </div>
    </body>
  );
}

export default Main;
