import React, { useState, useRef } from 'react'
import axios from 'axios'
import './index.css'

const APIDomain = process.env.APIDomain || "http://localhost:8000"

export default function ContactSection() {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const leftSpinner = useRef()
    const rightSpinner = useRef()

    const handleInputChange = (e) => {
        // get name and value of input changed
        const name = e.target.name
        const value = e.target.value

        // update state with new value
        setMessage({ ...message, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // change opacity of spinners to show message is sending, only one will have a display based on screen size (handled in css)
        leftSpinner.current.style.opacity = 1
        rightSpinner.current.style.opacity = 1

        // send request to server to send email
        axios.post(`${APIDomain}/api/message/send`, message)
            .then(({ data }) => {
                console.log('message sent')

                // hide spinners
                leftSpinner.current.style.opacity = 0
                rightSpinner.current.style.opacity = 0
            })
            .catch(err => {
                console.log(err)

                // hide spinners
                leftSpinner.current.style.opacity = 0
                rightSpinner.current.style.opacity = 0
            })
    }

    return (
        <>
            <h2 className='section-header white-text'>Contact Me</h2>
            <form className='contact-form' onSubmit={handleFormSubmit}>
                <div className='contact-fields-flex'>
                    <div className='input-container name-input-container'>
                        <input className='contact-input name-input' type='text' placeholder='Name*' name='name' value={message.name} onChange={handleInputChange} required />
                    </div>
                    <div className='input-container email-input-container'>
                        <input className='contact-input email-input' type='email' placeholder='E-mail*' name='email' value={message.email} onChange={handleInputChange} required />
                    </div>
                    <div className='input-container subject-input-container'>
                        <input className='contact-input subject-input' type='text' placeholder='Subject' name='subject' value={message.subject} onChange={handleInputChange} />
                    </div>
                    <div className='input-container message-textarea-container'>
                        <textarea className='contact-input message-textarea' placeholder='Message*' name='message' value={message.message} onChange={handleInputChange} required></textarea>
                    </div>
                </div>
                <div className='send-btn-wrapper'>
                    <i className='fad fa-spinner-third spinner left' ref={leftSpinner}></i>
                    <button className='send-btn red-bg white-text'>Send</button>
                    <i className='fad fa-spinner-third spinner right' ref={rightSpinner}></i>
                </div>
            </form>
        </>
    )
}
