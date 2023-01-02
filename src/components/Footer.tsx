import React from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-svgrepo-com.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import './Footer.scss';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='footerContainer'>
      <img src={logo} alt='Logo' />
      <div className='socialIcons'>
          <a href='https://www.linkedin.com/in/ekaterina-alekseeva/' className='socialbutton'><img src={navIcon1} alt="navIcon" /></a>
          <a href='https://github.com/kat9898' className='socialbutton'><img className='githubImg' src={navIcon2} alt="navIcon" /></a>
          <a href='https://www.instagram.com/katealekseewa/' className='socialbutton'><img src={navIcon3} alt="navIcon" /></a>
      </div>
    </footer>
  )
}

export default Footer