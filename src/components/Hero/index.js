import React from 'react'
import './index.css'

export default function Hero() {
    return (
        <div>
            <img className='hero img-fluid' src='./assets/images/stock-hero-edit.png' alt='placeholder hero img' />
            <div className='hero-text-container'>
                <p className='hero-my-title white-text'>Full-Stack Web Developer</p>
                <h1 className='hero-title white-text'>Brand<span className='red-text'>o</span>n</h1>
                <p className='hero-sub-text gray-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo magna sed sem accumsan, ut cursus justo pretium.</p>
            </div>
        </div>
    )
}
