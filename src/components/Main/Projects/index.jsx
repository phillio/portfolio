import React from 'react'

import './Projects.css'

function Projects (props) {
    return (
        <div className="project-container">
            <h3>{props.project.name}</h3>
            <h5>Link: {props.project.link}</h5>
            <img alt={props.project.name} src={props.project.pic} ></img>
            <p>Github: {props.project.repo}</p>
        </div>
    )
}

export default Projects