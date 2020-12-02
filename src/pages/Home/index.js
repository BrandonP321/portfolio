import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../projects.json'
import SkillBar from '../../components/SkillBar'
import './index.css'
import './contact.css'

export default function Home() {
    return (
        <>
            <Hero />
            <div className='home-content'>
                <div className='skills-section'>
                    <h2 className='section-header white-text'>Skills</h2>
                    <div className='skills-flex-container'>
                        <SkillBar skill="HTML & CSS" percent='90' />
                        <SkillBar skill='JavaScript & jQuery' percent='90' />
                        <SkillBar skill='MySQL & NoSQL' percent='85' />
                        <SkillBar skill='React' percent='85' />
                        <SkillBar skill='Express.js' percent='85' />
                        <SkillBar skill='Node.js' percent='90' />
                        <SkillBar skill='Photoshop / Illustrator / inDesign' percent='70' />
                        <SkillBar skill='Leadership' percent='75' />
                        <SkillBar skill='Problem Solving' percent='90' />
                    </div>
                </div>
                <div className='portfolio-section'>
                    <h2 className='section-header white-text'>Projects</h2>
                    <div className='portfolios-container'>
                        {projects.map(project => <ProjectCard projectInfo={project} />)}
                    </div>
                </div>
                <div className='contact-section'>
                    <h2 className='section-header white-text'>Contact Me</h2>
                    <form className='contact-form'>
                        <div className='contact-fields-flex'>
                            <div className='input-container name-input-container'>
                                <input className='contact-input name-input' type='text' placeholder='Name' />
                            </div>
                            <div className='input-container email-input-container'>
                                <input className='contact-input email-input' type='email' placeholder='E-mail' />
                            </div>
                            <div className='input-container subject-input-container'>
                                <input className='contact-input subject-input' type='text' placeholder='Subject' />
                            </div>
                            <div className='input-container message-textarea-container'>
                                <textarea className='contact-input message-textarea' placeholder='Message'></textarea>
                            </div>
                        </div>
                        <button className='send-btn red-bg white-text'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}