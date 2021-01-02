import React from 'react'
import Hero from '../../components/Hero'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../projects.json'
import './index.css'
import './contact.css'
import SkillsSection from '../../components/SkillsSection'
import ContactSection from '../../components/ContactSection'

export default function Home() {

    return (
        <>
            <Hero />
            <div className='skills-section section-wrapper' id='skills'>
                <div className='section-anchor' id='skills'></div>
                <SkillsSection />
            </div>
            <div className='home-content-responsive-wrapper'>
                <div className='portfolio-section section-wrapper'>
                    <div className='section-anchor' id='projects'></div>
                    <h2 className='section-header white-text'>Projects</h2>
                    {/* <div className='projects-container'> */}
                        {projects.map(project => {
                            return <ProjectCard projectInfo={project} isLast={projects.indexOf(project) === projects.length - 1} />
                        })}
                    {/* </div> */}
                </div>
                <div className='contact-section section-wrapper'>
                    <div className='secion-anchor' id='contact'></div>
                    <ContactSection />
                </div>
            </div>
        </>
    )
}