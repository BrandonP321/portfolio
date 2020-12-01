import React from 'react'
import SkillBar from '../../components/SkillBar'
import './index.css'

export default function Home() {
    return (
        <>
            <div className='home-content'>
                <div className='skills-section'>
                    <h2 className='section-header'>Skills</h2>
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
                    <h2>Projects</h2>
                    <div className='portfolios-container'>

                    </div>
                </div>
            </div>
        </>
    )
}
