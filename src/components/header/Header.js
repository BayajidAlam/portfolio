import React from 'react';
import CTA from '../CTA';
import './header.css'
import Me from '../../assets/My project.png';
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
          <div className="me">
            <img src={Me} alt="me" className='me'/>
          </div>
          <a href="#contact" className='scroll_dwon'>Scroll dwon</a>
        </div>
    </header>
  );
};

export default Header;