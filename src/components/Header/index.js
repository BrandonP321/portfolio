import React from 'react'
import './index.css'

export default function Header() {
    return (
        <header>
            <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
            <div className='vertical-nav-bar'>
                <div className='navbar-spacer gray-bg'></div>
                <div className='nav-item-container'>
                    <a className='nav-item-link' href='#'>
                        <i class="fas fa-home nav-icon"></i>
                        <p className='nav-item-text red-text'>Home</p>
                    </a>
                </div>
                <div className='nav-item-container'>
                    <a className='nav-item-link' href='#about'>
                        <i class="fas fa-user nav-icon"></i>
                        <p className='nav-item-text red-text'>About</p>
                    </a>
                </div>
                <div className='nav-item-container'>
                    <a className='nav-item-link' href='#skills'>
                        <i class="fas fa-cog nav-icon"></i>
                        <p className='nav-item-text red-text'>Skills</p>
                    </a>
                </div>
                <div className='nav-item-container'>
                    <a className='nav-item-link' href='#projects'>
                        <i class="fas fa-tasks nav-icon"></i>
                        <p className='nav-item-text red-text'>Projects</p>
                    </a>
                </div>
                <div className='navbar-spacer gray-bg'></div>
            </div>
        </header>
    )
}
