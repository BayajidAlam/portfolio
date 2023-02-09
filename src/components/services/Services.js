import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
      <section id='services'>
          <h5>What I Offer</h5>
          <h2>Services</h2>
          <div className="container services_container">
              <article className="service">
                <div className="service_head">
                  <h3>UI/UX Design</h3>
                </div>
                <ul className="service_list">
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>User Interface (UI) Design: Creating visually appealing and user-friendly interfaces for websites, applications, and software.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>User Experience (UX) Design: Conducting user research, testing, and prototyping to ensure a seamless and intuitive user experience.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Interaction Design: Designing the interactions and animations that occur within a user interface.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Wireframing and prototyping: Creating low-fidelity mockups and prototypes to test and validate design ideas.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Responsive Web Design: Designing and building websites that adapt to different screen sizes and devices.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Usability testing: Evaluating a product's usability by testing it with real users and collecting feedback.</p>
                  </li>
                </ul>
              </article>
              <article className="service">
                <div className="service_head">
                  <h3>Frontend Development</h3>
                </div>
                <ul className="service_list">
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Website Development: Building and maintaining websites using HTML, CSS, and JavaScript.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Responsive Web Design: Developing websites that are optimized for different screen sizes and devices.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>User Interface (UI) Development: Implementing UI designs into fully functional web pages and applications.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Cross-Browser Compatibility: Ensuring that websites and applications work seamlessly across different browsers.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>JavaScript Development: Developing dynamic, interactive web pages using JavaScript and front-end frameworks such as React, Vue, or Angular.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Interactive Design: Adding animations, transitions, and other interactive elements to websites and applications.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </li>
                </ul>
              </article>

              <article className="service">
                <div className="service_head">
                  <h3>Backend Development</h3>
                </div>
                <ul className="service_list">
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Web Application Development: Building full-stack web applications using the MERN stack (MongoDB, Express.js, React, and Node.js).</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Single Page Application (SPA) Development: Creating fast, seamless, and dynamic single-page applications using React.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Database Design and Integration: Designing and integrating MongoDB databases into web applications.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>API Development: Building RESTful APIs using Express.js to connect the front-end and back-end of web applications.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Server-Side Rendering: Implementing server-side rendering to improve website performance and SEO.</p>
                  </li>
                  <li>
                    <BiCheck className='service_list-icon'/>
                    <p>Authentication and Authorization: Implementing user authentication and authorization using technologies such as JSON Web Tokens (JWT).</p>
                  </li>
                </ul>
              </article>
          </div>
      </section>
  );
};

export default Services;