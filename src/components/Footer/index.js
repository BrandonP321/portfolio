import React, { useState } from 'react'
import './index.css'

export default function Footer() {
    const [socials, setSocials] = useState([
        {
            title: 'LinkedIn',
            icon_html: <i class="fab fa-linkedin-in social-icon"></i>
        },
        {
            title: 'Github',
            icon_html: <i class="fab fa-github-alt social-icon"></i>,
        },
        {
            title: 'Stack Overflow',
            icon_html: <i class="fab fa-stack-overflow social-icon"></i>,
        },
        {
            title: 'Mail',
            icon_html: <i class="fas fa-envelope social-icon"></i>,
        },
    ])

    return (
        <footer>
            <div className='footer-flex'>
                <div className='footer-column footer-logo-container'>
                    <a className='footer-logo' href='/'>Logo</a>
                </div>
                <div className='footer-column footer-site-links-container'>
                    <h3 className='white-text'>Site Links</h3>
                </div>
                <div className='footer-column footer-contact-container'>
                    <h3 className='white-text'>Contact Info</h3>
                </div>
            </div>
            <div className='footer-line'></div>
            <div className='footer-socials-container'>
                {socials.map(social => {
                    return (
                        <div className='social-circle'>
                            {social.icon_html}
                        </div>
                    )
                })}
            </div>
        </footer>
    )
}
