import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tuyizere-abdul-727114267/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Jahbles01" target="blank"><BsGithub/></a>
        <a href="https://twitter.com/JahBles7" target="blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials