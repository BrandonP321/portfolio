import React from 'react'
import Hero from '../../components/Hero'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../projects.json'
import './index.css'
import './contact.css'

export default function Home() {

    return (
        <>
            <Hero />
            <div className='skills-section' id='skills'>
                <h2 className='section-header white-text'>Skills</h2>
                <div className='skills-flex'>
                    <div className='skill-container'>
                        <i class="fab fa-html5 skill-icon"></i>
                        <p className='skill-text'>HTML</p>
                    </div>
                    <div className='skill-container'>
                        <i class="fab fa-css3-alt skill-icon"></i>
                        <p className='skill-text'>CSS</p>
                    </div>
                    <div className='skill-container'>
                        <i class="fab fa-js-square skill-icon"></i>
                        <p className='skill-text'>JavaScript</p>
                    </div>
                    <div className='skill-container'>
                        <i class="fab fa-react skill-icon"></i>
                        <p className='skill-text'>React</p>
                    </div>
                    <div className='skill-container'>
                        <i class="fas fa-database skill-icon"></i>
                        <p className='skill-text'>MySQL & NoSQL</p>
                    </div>
                    <div className='skill-container'>
                        <i class="fab fa-node skill-icon"></i>
                        <p className='skill-text'>Node.js</p>
                    </div>
                </div>
            </div>
            <div className='home-content'>
                <div className='portfolio-section' id='projects'>
                    <h2 className='section-header white-text'>Projects</h2>
                    <div className='portfolios-container'>
                        {projects.map(project => {
                            return <ProjectCard projectInfo={project} index={projects.indexOf(project)} />
                        }
                        )}
                    </div>
                </div>
                <div className='contact-section' id='contact'>
                    <h2 className='section-header white-text'>Contact Me</h2>
                    <form className='contact-form'>
                        <div className='contact-fields-flex'>
                            <div className='input-container name-input-container'>
                                <input className='contact-input name-input' type='text' placeholder='Name*' required />
                            </div>
                            <div className='input-container email-input-container'>
                                <input className='contact-input email-input' type='email' placeholder='E-mail*' required />
                            </div>
                            <div className='input-container subject-input-container'>
                                <input className='contact-input subject-input' type='text' placeholder='Subject' />
                            </div>
                            <div className='input-container message-textarea-container'>
                                <textarea className='contact-input message-textarea' placeholder='Message*' required></textarea>
                            </div>
                        </div>
                        <button className='send-btn red-bg white-text'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}