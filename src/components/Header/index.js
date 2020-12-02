import React from 'react'
import './index.css'

export default function Header() {
    return (
        <header>
            <a href='/' className='white-text header-logo'>Brand<span className='red-text'>o</span>n</a>
            <div className='vertical-nav-bar'>
                <div className='navbar-spacer'></div>
                <div className='nav-item-container'>
                    <a href='#'><i class="fas fa-home nav-icon"></i></a>
                </div>
                <div className='nav-item-container'>
                    <a href='#about'><i class="fas fa-user nav-icon"></i></a>
                </div>
                <div className='nav-item-container'>
                    <a href='#skills'><i class="fas fa-cog nav-icon"></i></a>
                </div>
                <div className='nav-item-container'>
                    <a href='#projects'><i class="fas fa-tasks nav-icon"></i></a>
                </div>
                <div className='navbar-spacer'></div>
            </div>
        </header>
    )
}
