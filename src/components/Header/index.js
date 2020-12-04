import React from 'react'
import { Router, Link } from 'react-router-dom'
import './index.css'

export default function Header() {
    return (
        <header>
            <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
            <div className='horizontal-nav-bar'>
                <a href='/#' className='white-text nav-link'>Home</a>
                <a href='/#about' className='white-text nav-link'>About Me</a>
                <a href='/#skills' className='white-text nav-link'>Skills</a>
                <a href='/#projects' className='white-text nav-link'>Projects</a>
                <a href='/#contact' className='white-text nav-link'>Contact</a>
            </div>
            <div className='vertical-nav-bar'>
                <div className='navbar-spacer gray-bg'></div>
                    <a href='https://www.linkedin.com/in/brandon-phillips-2554801a1/' target='_blank'>
                        <i class="fab fa-linkedin-in nav-social-icon"></i>
                    </a>
                    <a href='https://github.com/BrandonP321' target='_blank'>
                        <i class="fab fa-github-alt nav-social-icon"></i>
                    </a>
                    <a href='https://stackoverflow.com/users/13790075/brandonp321' target='_blank'>
                        <i class="fab fa-stack-overflow nav-social-icon"></i>
                    </a>
                <div className='navbar-spacer gray-bg'></div>
            </div>
            <p className='header-copyright gray-text'>&#169;Brandon 2020</p>
        </header>
    )
}
