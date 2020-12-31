import React, { useState, useEffect } from 'react'
import { Router, Link } from 'react-router-dom'
import './index.css'

export default function Header() {
    const [fromTop, setFromTop] = useState(window.scrollY)
    
    // on load, add scroll event listener to track pixels scrolled from top of page
    useEffect(() => {
        document.addEventListener('scroll', event => {
            setFromTop(window.scrollY)
        })
    }, [])

    return (
        // <header>
        //     <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
        //     <div className='menu-icon-container'>
        //         <i class="fas fa-bars menu-icon" onClick={focusNav}></i>
        //     </div>
        //     <div className='menu-collapse'>
        //     </div>
        //     <div className='horizontal-nav-bar'>
        //         <a href='/#' className='white-text nav-link'>Home</a>
        //         <a href='/#about' className='white-text nav-link'>About Me</a>
        //         <a href='/#skills' className='white-text nav-link'>Skills</a>
        //         <a href='/#projects' className='white-text nav-link'>Projects</a>
        //         <a href='/#contact' className='white-text nav-link'>Contact</a>
        //     </div>
        //     <div className='vertical-nav-bar'>
        //         <div className='navbar-spacer gray-bg'></div>
        //         <a href='https://www.linkedin.com/in/brandon-phillips-2554801a1/' target='_blank'>
        //             <i class="fab fa-linkedin-in nav-social-icon"></i>
        //         </a>
        //         <a href='https://github.com/BrandonP321' target='_blank'>
        //             <i class="fab fa-github-alt nav-social-icon"></i>
        //         </a>
        //         <a href='https://stackoverflow.com/users/13790075/brandonp321' target='_blank'>
        //             <i class="fab fa-stack-overflow nav-social-icon"></i>
        //         </a>
        //         <div className='navbar-spacer gray-bg'></div>
        //     </div>
        //     <p className='header-copyright gray-text'>&#169; Brandon 2020</p>
        // </header>
        <header>
            <div className={fromTop > 400 ? 'header-bg header-active' : 'header-bg'}></div>
            <div className='header-flex'>
                <div className='header-logo-wrapper'>
                    <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
                </div>
                <nav className='header-nav'>
                    <a href='/#' className='white-text nav-link'>Home</a>
                    <a href='/#about' className='white-text nav-link'>About Me</a>
                    <a href='/#skills' className='white-text nav-link'>Skills</a>
                    <a href='/#projects' className='white-text nav-link'>Projects</a>
                    <a href='/#contact' className='white-text nav-link'>Contact</a>
                </nav>
                <div className='header-mobile-icon-wrapper'>
                    <i class="fas fa-bars menu-icon"></i>
                </div>
            </div>
        </header>
    )
}
