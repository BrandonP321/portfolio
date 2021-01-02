import React, { useState, useEffect } from 'react'
import Measure from 'react-measure'
import './index.css'

export default function ProjectCard(props) {
    console.log(props.isLast)
    return (
        <div className={props.isLast ? 'project-container last-project' : 'project-container'}>
            <div className='project-img-container'>
                <img className='img-fluid project-img' src={props.projectInfo.image} alt={props.projectInfo.alt_text} />
            </div>
            <div className={props.isLast ? 'project-brief-container last-project' : 'project-brief-container'}>
                <h3 className='project-title white-text'>{props.projectInfo.name}</h3>
                <p className='project-desc gray-text'>{props.projectInfo.description}</p>
                <div className='project-btns'>
                    <a className='project-btn-link' href={`/project/${props.projectInfo.projectIndex}`}><div className='project-btn red-bg white-text'>More Info</div></a>
                </div>
            </div>
        </div>
    )
}