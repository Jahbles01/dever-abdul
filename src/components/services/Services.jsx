import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>User Research & Analysis</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Wireframing & Prototyping</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>UI Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>UX Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>UX DesignWeb Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Visual Design</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Front-end Development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Back-end Development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Full-Stack Development</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Mobile Responsive</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>SEO Optimization</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Security</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Testing</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Game Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Concept Art</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>3D Modeling</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Level Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Game Programming</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>UI/UX Design</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Game testing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
