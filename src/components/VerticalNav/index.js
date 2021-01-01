import React from 'react'
import './index.css'

export default function VerticalNav() {
    return (
        <div className='vertical-nav-bar'>
            <div className='vertical-nav-flex'>
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
            <p className='header-copyright gray-text'>&#169; Brandon 2020</p>
        </div>
    )
}