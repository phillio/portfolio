import React from 'react'

import './Projects.css'

function Projects (props) {
    return (
        <div className="project-container" id={`project-${props.indexNum}`}>
            <h3>{props.project.name}</h3>
            <h5 className="project-link"><a className="project-link" href={props.project.link} rel="noopener noreferrer" target="_blank">Link: {props.project.link}</a></h5>
            <img alt={props.project.name} src={props.project.pic} ></img>
            <h5 className="project-link"><a className="project-link" href={props.project.repo} rel="noopener noreferrer" target="_blank">Github: {props.project.repo}</a></h5>
        </div>
    )
}

export default Projects