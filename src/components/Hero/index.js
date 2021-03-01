import React from 'react'
import './index.css'

export default function Hero() {
    return (
        <div className='home-hero-wrapper'>
            <div className='hero-img-wrapper'>
                <img className='hero-img' srcSet='https://res.cloudinary.com/dka83rgpq/image/upload/v1613037815/portfolio/hero/hero-large_jsdlo1.png 1920w,
                    https://res.cloudinary.com/dka83rgpq/image/upload/v1613037815/portfolio/hero/hero-medium_yuxrqu.png 1422w' alt='placeholder hero img' loading='lazy'/>
            </div>
            <div className='hero-text-outer-wrapper'>
                <div className='hero-text-container'>
                    <p className='hero-my-title white-text'>Full-Stack Web Developer</p>
                    <h1 className='hero-title white-text'>Brand<span className='red-text'>o</span>n</h1>
                    <p className='hero-sub-text gray-text'>Results-oriented web developer with a passion for building impactful web applications with the latest web technologies.</p>
                </div>
            </div>
        </div>
    )
}
