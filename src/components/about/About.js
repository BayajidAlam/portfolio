import React from 'react';
import './about.css';
import me from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
          <div className="about_me">
              <div className="about_me-image">
                  <img src={me} alt="" />
              </div>
          </div>

          <div className="about_content">
              <div className="about_cards">
                  <article className="about_card">
                    <FaAward className='about-icon'/>
                    <h5>Experience</h5>
                    <small>1 years working</small>
                  </article>

                  <article className="about_card">
                    <FiUsers className='about-icon'/>
                    <h5>Clients</h5>
                    <small>30+ client worldwide</small>
                  </article>

                  <article className="about_card">
                    <VscFolderLibrary className='about-icon'/>
                    <h5>Project</h5>
                    <small>40+ Completed</small>
                  </article>
              </div>
              <p>I am a MERN Stack developer.I have completed 40+ project and more then 10 project with react,node,mongodb and express.I like to use firebase and react hook form for login and authentication.If you need my help feel free to knock me</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  );
};

export default About;