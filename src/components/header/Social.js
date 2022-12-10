import React from 'react';
import {BsLinkedin,BsGithub,BsTwitter} from 'react-icons/bs'
const Social = () => {
  return (
    <div className='header_socials'>
     <a href="https://github.com/BayajidAlam" target="_blank"><BsGithub/></a>
     <a href="https://www.linkedin.com/in/bayajid-alam-joyel/" target="_blank"><BsLinkedin/></a>
     <a href="https://twitter.com/bayajid_alam" target="_blank"><BsTwitter/></a>
    </div>
  );
};

export default Social;