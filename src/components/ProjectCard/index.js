import React from 'react'
import Measure from 'react-measure'
import './index.css'

// export default function ProjectCard(props) {
//     // destructure project info from props 
//     const { name, image, alt_text, site_url, github_repo_url, description } = props.projectInfo

//     console.log(props.id)

//     return (
//         <div className='project-container' style={console.log(this)}>
//             <div className='project-img-container'>
//                 <img className='img-fluid project-img' src={image} alt={alt_text} />
//             </div>
//             <div className='project-brief-container'>
//                 <h3 className='project-title white-text'>{name}</h3>
//                 <p className='project-desc gray-text'>{description}</p>
//                 <div className='project-btns'>
//                     <a className='project-btn-link' href='#'><div className='project-btn red-bg white-text'>Button</div></a>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        const { image, name, description, alt_text, site_url, github_repo_url } = props.projectInfo
        this.image = image
        this.name = name
        this.description = description
        this.alt_text = alt_text
        this.site_url = site_url
        this.github_repo_url = github_repo_url
        // index of project in json data file
        this.projectIndex = props.index
        // space in pixels in between each project card
        this.extraSpace = 70
    }

    state = {
        projectCardHeight: -1,
        projectImageHeight: -1
    }

    render() {
        return (
            <div className='project-container' style={{ height: window.innerWidth > 1213 ?
                // depending on width of viewport, adjust height of whole project section for a fluid responsive site
                `${this.state.projectCardHeight + this.state.projectImageHeight - 200 + window.innerWidth * .02 + this.extraSpace}px`:
                window.innerWidth > 727 ?
                `${this.state.projectCardHeight + this.state.projectImageHeight - (((486 - (1213 - window.innerWidth)) / 486 * 200)) + window.innerWidth * .02 + this.extraSpace}px`:
                `${this.state.projectImageHeight + this.state.projectCardHeight + window.innerWidth * .02 + this.extraSpace}px`}}>
                <Measure
                    onResize={(contentRect) => {
                        // when img changes size, update height in state
                        if (contentRect.entry) {
                            this.setState({ projectImageHeight: contentRect.entry.height })
                        }
                    }}
                >
                    {({ measureRef }) => {
                        return (
                            <div className='project-img-container' ref={measureRef}>
                                <img className='img-fluid project-img' src={this.image} alt={this.alt_text} />
                            </div>
                        )
                    }}
                </Measure>
                <Measure
                    onResize={(contentRect) => {
                        // when project description box changes size, update box height in state
                        if (contentRect.entry) {
                            this.setState({ projectCardHeight: contentRect.entry.height + window.innerWidth * .02 })
                        }
                    }}
                >
                    {({ measureRef }) => {
                        return (
                            <div className='project-brief-container' ref={measureRef}>
                                <h3 className='project-title white-text'>{this.name}</h3>
                                <p className='project-desc gray-text'>{this.description}</p>
                                <div className='project-btns'>
                                    <a className='project-btn-link' href={`/project/${this.projectIndex}`}><div className='project-btn red-bg white-text'>More Info</div></a>
                                </div>
                            </div>
                        )
                    }}
                </Measure>
            </div>
        )
    }
}