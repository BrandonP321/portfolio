import React, { useState, useEffect, useRef } from 'react'
import { Router, Link } from 'react-router-dom'
import './index.css'

export default function Header() {
    const [fromTop, setFromTop] = useState(window.scrollY)

    const [showMobileMenu, setShowMobileMenuState] = useState(false)
    const showMobileMenuRef = useRef(false)
    const setShowMobileMenu = data => {
        setShowMobileMenuState(data)
        showMobileMenuRef.current = data
    }

    // on load, add scroll event listener to track pixels scrolled from top of page
    useEffect(() => {
        document.addEventListener('scroll', event => {
            setFromTop(window.scrollY)
        })

        // if window changes size while mobile menu is showing, hide menu to remove hidden overflow of body
        window.addEventListener('resize', () => {
            console.log(window.innerWidth > 850, showMobileMenuRef.current)
            if (window.innerWidth > 850 && showMobileMenuRef.current) {
                setShowMobileMenu(false)
            }
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

    const handleNavItemClick = sectionId => {
        // hide the mobile menu
        setShowMobileMenu(false)
        // if screen width is greater than 850px, automatically send user to section on page
        if (window.innerWidth > 850) {
            window.location.href = '/' + sectionId
        } else {
            // else menu needs to be hidden first, then redirect to section
            setTimeout(() => {
                window.location.href= '/' + sectionId
            }, 500)
        }
    }

    return (
        <>
            {/* overlay covering site when movile nav is showing */}
            <div onClick={handleMenuIconClick} className={showMobileMenu ? 'mobile-menu-page-overlay show-overlay': 'mobile-menu-page-overlay'}></div>
            <header>
                <div className={fromTop > 80 && !showMobileMenu ? 'header-bg header-active' : 'header-bg'}></div>
                <div className='header-flex'>
                    <div className={showMobileMenu ? 'header-logo-wrapper header-logo-hidden' : 'header-logo-wrapper'}>
                        <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
                    </div>
                    {/* based on whether or not mobile menu is showing, update nav class */}
                    <nav className={showMobileMenu ? 'header-nav nav-show' : 'header-nav'}>
                        <p className='mobile-nav-exit' onClick={handleMenuIconClick}>&times;</p>
                        <a className='white-text nav-link' onClick={() => handleNavItemClick('#')}>Home</a><br />
                        <a className='white-text nav-link' onClick={() => handleNavItemClick('#projects')}>Projects</a><br />
                        <a className='white-text nav-link' onClick={() => handleNavItemClick('#skills')}>Skills</a><br />
                        <a className='white-text nav-link' onClick={() => handleNavItemClick('#contact')}>Contact</a><br />
                    </nav>
                    <div className='header-mobile-icon-wrapper'>
                        <i class="fas fa-bars menu-icon" onClick={handleMenuIconClick}></i>
                    </div>
                </div>
            </header>
        </>
    )
}
