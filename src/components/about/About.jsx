import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import ME from "../../assets/me-about.jpeg";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>30+ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Projects</small>
            </article>
          </div>
          <p>
            Highly skilled and motivated web developer with 5+ years of
            experience in designing and developing cutting-edge web
            applications. Proficient in a wide range of technologies and
            programming languages, I am dedicated to creating responsive,
            user-friendly, and visually appealing websites. My passion for
            problem-solving and continuous learning drives me to stay up-to-date
            with the latest industry trends and best practices. As a
            collaborative team player, I thrive in dynamic environments and
            consistently deliver high-quality projects on time and within
            budget. From concept to implementation, I take pride in transforming
            ideas into functional and innovative web solutions that leave a
            lasting impact
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
