import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import './index.css'

const APIDomain = process.env.REACT_APP_API_Domain || "http://localhost:8000"

export default function ContactSection() {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const leftSpinner = useRef()
    const rightSpinner = useRef()

    const recaptcha = useRef();

    const [helperTextState, setHelperTextState] = useState('')

    const handleInputChange = (e) => {
        // get name and value of input changed
        const name = e.target.name
        const value = e.target.value

        // update state with new value
        setMessage({ ...message, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // get value of reCAPTCHA checkbox
        const recaptchaValue = recaptcha.current.getValue()

        // if recaptcha has no value, don't allow submition of form
        if (!recaptchaValue) {
            // tell user to show they are not a robot
            setHelperTextState('Confirm you are not a robot')
            return
        }

        // reset helper text beneath form to empty string
        setHelperTextState('')

        // change opacity of spinners to show message is sending, only one will have a display based on screen size (handled in css)
        leftSpinner.current.style.opacity = 1
        rightSpinner.current.style.opacity = 1

        // send request to server to send email
        axios.post(`${APIDomain}/api/message/send`, message)
            .then(({ data }) => {
                console.log('message sent')

                // set helper text to tell user message was sent
                setHelperTextState('Message sent')

                // hide spinners
                leftSpinner.current.style.opacity = 0
                rightSpinner.current.style.opacity = 0
            })
            .catch(err => {
                console.log(err)

                // set helper text to tell user an error occured
                setHelperTextState('An error occured while trying to send your message')

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
                        <input id='nameInput' className='contact-input name-input' type='text' placeholder='Name*' name='name' aria-label='Name' value={message.name} onChange={handleInputChange} required />
                    </div>
                    <div className='input-container email-input-container'>
                        <input id='emailInput' className='contact-input email-input' type='email' placeholder='E-mail*' name='email' aria-label='Email' value={message.email} onChange={handleInputChange} required />
                    </div>
                    <div className='input-container subject-input-container'>
                        <input id='subjectInput' className='contact-input subject-input' type='text' placeholder='Subject' name='subject' aria-label='Subject' value={message.subject} onChange={handleInputChange} />
                    </div>
                    <div className='input-container message-textarea-container'>
                        <textarea id='messageInput' className='contact-input message-textarea' placeholder='Message*' name='message' aria-label='Message' value={message.message} onChange={handleInputChange} required></textarea>
                    </div>
                </div>
                <ReCAPTCHA 
                    ref={recaptcha}
                    sitekey='6LePuzYaAAAAAD9C4g5367yzQNILUWlkhPtJr6CF'
                    theme='dark'
                />
                <div className='send-btn-wrapper'>
                    <i className='fad fa-spinner-third spinner left' ref={leftSpinner}></i>
                    <button className='send-btn red-bg white-text'>Send</button>
                    <i className='fad fa-spinner-third spinner right' ref={rightSpinner}></i>
                </div>
                <small className='contact-helper-text'>{helperTextState}</small>
            </form>
        </>
    )
}
