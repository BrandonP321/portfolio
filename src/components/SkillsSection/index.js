import React from 'react'
import './index.css'

export default function SkillsSection() {
    return (
        <div>
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
    )
}
