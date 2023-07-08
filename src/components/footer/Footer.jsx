import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="#header" className='footer__logo'>DevEr</a>
      <ul className="permalinks">
        <li><a href="#nav">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com/JahBles7" target="blank"><BsTwitter /></a>
        <a href="https://discord.com/channels/1127196204044927006/1127196204044927008" target="blank"><BsDiscord /></a>
        <a href="https://linkedin.com/in/tuyizere-abdul-727114267/" target="blank"><FaLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; copyright 2023 <b> DevEr-Abdul</b>. All Rights reserved</small><br />
        <small>Designed by Abdul</small>
      </div>
    </footer>
  )
}

export default Footer