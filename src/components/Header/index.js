import React, { useState, useEffect } from 'react'
import { Router, Link } from 'react-router-dom'
import './index.css'

export default function Header() {
    const [fromTop, setFromTop] = useState(window.scrollY)

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // on load, add scroll event listener to track pixels scrolled from top of page
    useEffect(() => {
        document.addEventListener('scroll', event => {
            setFromTop(window.scrollY)
        })
    }, [])

    // when mobile menu state is set, toggle user being able to scroll the page
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    const handleMenuIconClick = () => {
        // toggle mobile menu
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <>
            {/* overlay covering site when movile nav is showing */}
            <div onClick={handleMenuIconClick} className={showMobileMenu ? 'mobile-menu-page-overlay show-overlay': 'mobile-menu-page-overlay'}></div>
            <header>
                <div className={fromTop > 400 && !showMobileMenu ? 'header-bg header-active' : 'header-bg'}></div>
                <div className='header-flex'>
                    <div className={showMobileMenu ? 'header-logo-wrapper header-logo-hidden' : 'header-logo-wrapper'}>
                        <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
                    </div>
                    {/* based on whether or not mobile menu is showing, update nav class */}
                    <nav className={showMobileMenu ? 'header-nav nav-show' : 'header-nav'}>
                        <p className='mobile-nav-exit' onClick={handleMenuIconClick}>&times;</p>
                        <a href='/#' className='white-text nav-link'>Home</a><br />
                        <a href='/#about' className='white-text nav-link'>About Me</a><br />
                        <a href='/#skills' className='white-text nav-link'>Skills</a><br />
                        <a href='/#projects' className='white-text nav-link'>Projects</a><br />
                        <a href='/#contact' className='white-text nav-link'>Contact</a><br />
                    </nav>
                    <div className='header-mobile-icon-wrapper'>
                        <i class="fas fa-bars menu-icon" onClick={handleMenuIconClick}></i>
                    </div>
                </div>
            </header>
        </>
    )
}
