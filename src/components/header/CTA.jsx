import React from 'react'
import MyResume from '../../assets/MyResume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={MyResume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA