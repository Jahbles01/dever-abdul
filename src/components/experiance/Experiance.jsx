import React from 'react'
import './experiance.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experiance() {
  return (
    <section id='experiance'>
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>C_Sharp (C#)</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>Mysql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>MangoDB</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill className="experiance__details-icon"/>
              <div>
                <h4>NextJs</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance

