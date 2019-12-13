import React from "react";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-me-text">
        <h2 className="about-me-text-header">About Me</h2>
        <p className="about-me-text-text">
          I am a software engineer, with a skillset in full-stack coding for web
          development. With an ever-growing technology industry, my professional
          focus will be on writing code for computer programs and software. My
          strengths in the workplace include resourcefulness, a willingness to
          be a team player, and a strong determination to solve any problems
          Iencounter.
        </p>
      </div>
      <div className="about-me-stacks">
        <h2 className="about-me-stacks-header">Tech Stacks</h2>
        <div className="about-me-stacks-text-container">
          <div className="about-me-stacks-text-wrapper">
            <p className="about-me-stacks-text">HTML5</p>
            <p className="about-me-stacks-text">CSS3</p>
            <p className="about-me-stacks-text">Javascript (ES6)</p>
            <p className="about-me-stacks-text">React</p>
            <p className="about-me-stacks-text">Node.JS</p>
            <p className="about-me-stacks-text">Express</p>
            <p className="about-me-stacks-text">SQL</p>
            <p className="about-me-stacks-text">PostgreSQl</p>
            <p className="about-me-stacks-text">Ruby</p>
            <p className="about-me-stacks-text">Rails</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
