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
        const { image, name, description } = props.projectInfo
        this.image = image
        this.name = name
        this.description = description
        this.extraSpace = 50
        // reference to container containing description of project
        this.projectDesc = React.createRef()
        this.imageNode = React.createRef()
    }

    state = {
        projectCardHeight: -1,
        projectImageHeight: -1
    }

    render() {
        return (
            <div className='project-container' style={{ height: window.innerWidth > 1213 ? `${this.state.projectCardHeight + this.state.projectImageHeight - 200 + window.innerWidth * .02 + this.extraSpace}px`: window.innerWidth > 727 ? `${this.state.projectCardHeight + this.state.projectImageHeight - (((486 - (1213 - window.innerWidth)) / 486 * 200)) + window.innerWidth * .02 + this.extraSpace}px`: `${this.state.projectImageHeight + this.state.projectCardHeight + window.innerWidth * .02 + this.extraSpace}px`}}>
                <Measure
                    onResize={(contentRect) => {
                        if (contentRect.entry) {
                            this.setState({ projectImageHeight: contentRect.entry.height })
                            console.log(this.state.projectCardHeight + this.state.projectImageHeight - ((486 - (1213 - window.innerWidth) / 486 * 200)) + (window.innerWidth * .02))
                            this.setState({ projectImageTop: contentRect.entry.top})
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
                        if (contentRect.entry) {
                            this.setState({ projectCardHeight: contentRect.entry.height + window.innerWidth * .02})
                        }
                    }}
                >
                    {({ measureRef }) => {
                        return (
                            <div className='project-brief-container' ref={measureRef}>
                                <h3 className='project-title white-text'>{this.name}</h3>
                                <p className='project-desc gray-text'>{this.description}</p>
                                <div className='project-btns'>
                                    <a className='project-btn-link' href='#'><div className='project-btn red-bg white-text'>Button</div></a>
                                </div>
                            </div>
                        )
                    }}
                </Measure>
            </div>
            // <div className='project-container'>
            //     <div className='project-img-container'>
            //         <img className='img-fluid project-img' src={this.image} alt={this.alt_text} />
            //     </div>
            //     <div className='project-brief-container' ref={this.projectDesc}>
            //         <h3 className='project-title white-text'>{this.name}</h3>
            //         <p className='project-desc gray-text'>{this.description}</p>
            //         <div className='project-btns'>
            //             <a className='project-btn-link' href='#'><div className='project-btn red-bg white-text'>Button</div></a>
            //         </div>
            //     </div>
            // </div>
        )
    }
}