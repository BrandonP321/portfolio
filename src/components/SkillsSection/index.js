import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import IllustratorLogo from '../logos/IllustratorLogo'
import PhotoshopLogo from '../logos/PhotoshopLogo'
import JestLogo from '../logos/JestLogo'
import SocketIOLogo from '../logos/SocketIOLogo'
import './index.css'

export default function SkillsSection() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    return (
        <div>
            <h2 className='section-header white-text'>Skills</h2>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={5000}>
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
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className='skills-flex'>
                        {/* <div className='skill-container'>
                            <JestLogo  className='skill-icon-svg'/>
                            <p className='skill-text'>jest</p>
                        </div> */}
                        <div className='skill-container'>
                            <SocketIOLogo className='skill-icon-svg' />
                            <p className='skill-text'>Socket.io</p>
                        </div>
                        <div className='skill-container'>
                            <i class="fab fa-bootstrap skill-icon"></i>
                            <p className='skill-text'>Bootstrap</p>
                        </div>
                        <div className='skill-container'>
                            <i class="fab fa-github-square skill-icon"></i>
                            <p className='skill-text'>GitHub</p>
                        </div>
                        <div className='skill-container'>
                            <IllustratorLogo className='skill-icon-svg' />
                            <p className='skill-text'>Illustrator</p>
                        </div>
                        <div className='skill-container'>
                            <PhotoshopLogo className='skill-icon-svg' />
                            <p className='skill-text'>Photoshop</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        // <div>
        //     <h2 className='section-header white-text'>Skills</h2>
        //     <div className='skills-flex'>
        //         <div className='skill-container'>
        //             <i class="fab fa-html5 skill-icon"></i>
        //             <p className='skill-text'>HTML</p>
        //         </div>
        //         <div className='skill-container'>
        //             <i class="fab fa-css3-alt skill-icon"></i>
        //             <p className='skill-text'>CSS</p>
        //         </div>
        //         <div className='skill-container'>
        //             <i class="fab fa-js-square skill-icon"></i>
        //             <p className='skill-text'>JavaScript</p>
        //         </div>
        //         <div className='skill-container'>
        //             <i class="fab fa-react skill-icon"></i>
        //             <p className='skill-text'>React</p>
        //         </div>
        //         <div className='skill-container'>
        //             <i class="fas fa-database skill-icon"></i>
        //             <p className='skill-text'>MySQL & NoSQL</p>
        //         </div>
        //         <div className='skill-container'>
        //             <i class="fab fa-node skill-icon"></i>
        //             <p className='skill-text'>Node.js</p>
        //         </div>
        //     </div>
        // </div>
    )
}
