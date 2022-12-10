import React, { useState } from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineUser,AiTwotoneMessage} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a onClick={()=>setActiveNav('#')} href="#" className={activeNav === '#'? 'active':''}><AiOutlineHome/></a>
      <a onClick={()=>setActiveNav('#about')} href="#about" className={activeNav === '#about'? 'active':''}><AiOutlineUser/></a>
      <a onClick={()=>setActiveNav('#experience')}  href="#experience" className={activeNav === '#experience'? 'active':''}><BiBook/></a>
      <a onClick={()=>setActiveNav('#services')} href="#services" className={activeNav === '#services'? 'active':''}><RiServiceLine/></a>
      <a onClick={()=>setActiveNav('#contact')} href="#contact" className={activeNav === '#contact'? 'active':''}><AiTwotoneMessage/></a>
    </nav>
  );
};

export default Nav;