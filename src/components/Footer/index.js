import React, { useState } from 'react'
import './index.css'

export default function Footer() {
    const [socials, setSocials] = useState([
        {
            title: 'LinkedIn',
            icon_html: <i class="fab fa-linkedin-in social-icon"></i>,
            url: 'https://www.linkedin.com/in/brandon-phillips-2554801a1/'
        },
        {
            title: 'Github',
            icon_html: <i class="fab fa-github-alt social-icon"></i>,
            url: 'https://github.com/BrandonP321'
        },
        {
            title: 'Stack Overflow',
            icon_html: <i class="fab fa-stack-overflow social-icon"></i>,
            url: 'https://stackoverflow.com/users/13790075/brandonp321'
        },
        {
            title: 'Mail',
            icon_html: <i class="fas fa-envelope social-icon"></i>,
            url: 'mailto: brandon.phillips976@gmail.com'
        },
    ])

    return (
        <footer>
            <div className='footer-flex'>
                    <div className='footer-column footer-logo-container'>
                        <a className='footer-logo white-text' href='/'>Brand<span className='red-text'>o</span>n</a>
                        <p className='footer-logo-subtext gray-text'>Full-Stack Web Devloper</p>
                    </div>
                    <div className='footer-column footer-site-links-container'>
                        <h4 className='white-text footer-header'>Site Links</h4>
                        <a href='/' className='white-text footer-site-link'>Home</a><br />
                        <a href='/#about' className='white-text footer-site-link'>About Me</a><br />
                        <a href='/#projects' className='white-text footer-site-link'>Projects</a><br />
                        <a href='/#contact' className='white-text footer-site-link'>Contact Me</a><br />
                    </div>
                    <div className='footer-column footer-contact-container'>
                        <h4 className='white-text footer-header'>Contact Info</h4>
                        <a href='mailto: brandon.phillips976@gmail.com'>brandon.phillips976@gmail.com</a><br />
                        <a href='tel:406-671-6723'>406.671.6723</a>
                    </div>
            </div>
            <div className='footer-line'></div>
            <div className='footer-socials-container'>
                {socials.map(social => {
                    return (
                        <a href={social.url} target='_blank' className='social-circle' >
                            {social.icon_html}
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}
