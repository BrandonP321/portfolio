import React, { useRef } from 'react'
import axios from 'axios'
import './index.css'

export default function ContactSection() {
    const name = useRef()
    const email = useRef()
    const subject = useRef()
    const message = useRef()

    const sendMessage = () => {
        const msgData = {
            name: name.current.value,
            email: email.current.value,
            subject: subject.current.value,
            message: message.current.value
        }
        console.log(msgData)
        // send message info to server which will use nodemailer to send email
        axios.post('/message/send', msgData)
            .then(response => {
                console.log(response)
            })
    }

    return (
        <>
            <h2 className='section-header white-text'>Contact Me</h2>
            <form className='contact-form'>
                <div className='contact-fields-flex'>
                    <div className='input-container name-input-container'>
                        <input className='contact-input name-input' ref={name} type='text' placeholder='Name*' required />
                    </div>
                    <div className='input-container email-input-container'>
                        <input className='contact-input email-input' ref={email} type='email' placeholder='E-mail*' required />
                    </div>
                    <div className='input-container subject-input-container'>
                        <input className='contact-input subject-input' ref={subject} type='text' placeholder='Subject' />
                    </div>
                    <div className='input-container message-textarea-container'>
                        <textarea className='contact-input message-textarea' ref={message} placeholder='Message*' required></textarea>
                    </div>
                </div>
                <div className='send-btn-wrapper'>
                    <button className='send-btn red-bg white-text' onClick={sendMessage}>Send</button>
                </div>
            </form>
        </>
    )
}
