import React from 'react'
import './index.css'

export default function Hero() {
    return (
        <div className='home-hero-wrapper'>
            <div className='hero-img-wrapper'>
                <img className='hero-img' src='./assets/images/stock-hero-edit.png' alt='placeholder hero img' />
            </div>
            <div className='hero-text-outer-wrapper'>
                <div className='hero-text-container'>
                    <p className='hero-my-title white-text'>Full-Stack Web Developer</p>
                    <h1 className='hero-title white-text'>Brand<span className='red-text'>o</span>n</h1>
                    <p className='hero-sub-text gray-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo magna sed sem accumsan, ut cursus justo pretium.</p>
                </div>
            </div>
        </div>
    )
}
