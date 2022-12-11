import React, { useRef } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // send client mail to my email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>bayajidalam2001@gmail.com</h5>
            <a target='_blank' href="mailto:bayajidalam2001@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Bayajid Alam Juyel</h5>
            <a target='_blank' href="https://m.me/bayajid2001">Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>01860301407</h5>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=01860301407">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="name" />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;