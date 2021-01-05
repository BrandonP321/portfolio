import React from 'react'
import './index.css'

export default function ContactSection() {
    return (
        <>
            <h2 className='section-header white-text'>Contact Me</h2>
            <form className='contact-form'>
                <div className='contact-fields-flex'>
                    <div className='input-container name-input-container'>
                        <input className='contact-input name-input' type='text' placeholder='Name*' required />
                    </div>
                    <div className='input-container email-input-container'>
                        <input className='contact-input email-input' type='email' placeholder='E-mail*' required />
                    </div>
                    <div className='input-container subject-input-container'>
                        <input className='contact-input subject-input' type='text' placeholder='Subject' />
                    </div>
                    <div className='input-container message-textarea-container'>
                        <textarea className='contact-input message-textarea' placeholder='Message*' required></textarea>
                    </div>
                </div>
                <div className='send-btn-wrapper'>
                    <button className='send-btn red-bg white-text'>Send</button>
                </div>
            </form>
        </>
    )
}
