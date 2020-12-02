import React from 'react'
import './index.css'

export default function ProjectCard(props) {
    // destructure project info from props 
    const { name, image, alt_text, site_url, github_repo_url, description } = props.projectInfo

    return (
        <div className='project-container'>
            <div className='project-img-container'>
                <img className='img-fluid project-img' src={image} alt={alt_text} />
            </div>
            <div className='project-brief-container'>
                <h3 className='project-title white-text'>{name}</h3>
                <p className='project-desc gray-text'>{description}</p>
                <div className='project-btns'>
                    <a className='project-btn-link' href='#'><div className='project-btn red-bg white-text'>Button</div></a>
                </div>
            </div>
        </div>
    )
}
