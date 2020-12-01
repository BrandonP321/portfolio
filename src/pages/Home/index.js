import React from 'react'
import SkillBar from '../../components/SkillBar'
import Hero from '../../components/Hero'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../projects.json'
import './index.css'

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
            </div>
        </>
    )
}