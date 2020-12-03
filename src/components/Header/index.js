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
                <div className='nav-item-container'>
                    <a className='nav-item-link' href='#contact'>
                        <i class="fas fa-envelope nav-icon"></i>
                        <p className='nav-item-text red-text'>Contact</p>
                    </a>
                </div>
                <div className='navbar-spacer gray-bg'></div>
                <div className='nav-socials'>
                    <a href='https://www.linkedin.com/in/brandon-phillips-2554801a1/' target='_blank'>
                        <i class="fab fa-linkedin-in nav-social-icon"></i>
                    </a>
                    <a href='https://github.com/BrandonP321' target='_blank'>
                        <i class="fab fa-github-alt nav-social-icon"></i>
                    </a>
                    <a href='https://stackoverflow.com/users/13790075/brandonp321' target='_blank'>
                        <i class="fab fa-stack-overflow nav-social-icon"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}
