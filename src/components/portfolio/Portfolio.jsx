import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio',
    github: 'https://jahbles01.github.io/dever-abdul/',
    demo: 'https://jahbles01.github.io/dever-abdul/',
    status: 'Online'
  },
  {
    id: 2,
    image: IMG2,
    title: 'DevErs-Team',
    status: 'In Progress'
  },
  {
    id: 3,
    image: IMG3,
    title: 'DNS-Solution',
    status: 'In Progress'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, status}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="img1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='blank'>Visit site</a>
              </div>
              <small className='status'>Status: {status}</small>
            </article>
            )
          })
        }
      </div>
    </section>  )
}

export default Portfolio