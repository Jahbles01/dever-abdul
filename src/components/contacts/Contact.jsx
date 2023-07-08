import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTwitter} from 'react-icons/bs';
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react'; 
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8a26zy3', 'template_pfxpi36', form.current, 'RCjPZW4xeCIMkzqWF')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tuyizereabdul01@gmail.com</h5>
            <a href="mailto:tuyizereabdul01@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>DevEr</h5>
            <a href="https://twitter.com/messages/1426668011713351681-1672407412966342656" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+250 781 164 255</h5>
            <a href="https://wa.me/+250781164255" target='blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='name' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact