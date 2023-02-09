import React from 'react';
import CTA from '../CTA';
import './header.css'
import Me from '../../assets/1609047362970.jpg.jpg';
import Social from './Social';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Bayajid Alam</h1>
          <h5>Fullstack Developer</h5>
          <CTA/>
          <Social/>
          <div className='container-me'>
            <img src={Me} alt="me" className='me'/>
          </div>
          <a href="#contact" className='scroll_down'>Scroll down</a>
        </div>
    </header>
  );
};

export default Header;