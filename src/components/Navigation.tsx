import React, {useState, useEffect} from 'react';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-svgrepo-com.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import './Navigation.scss';

type Props = {}

const socialNetworks = []

const Navigation = (props: Props) => {
  const [activeLink, setActiveLink] = useState<string>('Home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }

  return (
    <div className={`container ${scrolled ? "scrolled" : ""}`}>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navigation'>
        {/* <nav className='navBarMobile'>
          <button>{navbarOpen ? "Close" : "Open"}</button>
          <ul>
            <li>
              <button className={activeLink === 'Home' ? "active" : ""} onClick={() => onUpdateActiveLink('Home')}>Home</button>
            </li>
            <li>
              <button className={activeLink === 'Skills' ? "active" : ""} onClick={() => onUpdateActiveLink('Skills')}>Skills</button>
            </li>
            <li>
              <button className={activeLink === 'Projects' ? "active" : ""} onClick={() => onUpdateActiveLink('Projects')}>Projects</button>
            </li>
          </ul>
        </nav> */}
        <nav className='navbar'>
          <button className={activeLink === 'Home' ? "active" : ""} onClick={() => onUpdateActiveLink('Home')}>Home</button>
          <button className={activeLink === 'Skills' ? "active" : ""} onClick={() => onUpdateActiveLink('Skills')}>Skills</button>
          <button className={activeLink === 'Projects' ? "active" : ""} onClick={() => onUpdateActiveLink('Projects')}>Projects</button>
        </nav>
        <div className='connect'>
          <a href='https://www.linkedin.com/in/ekaterina-alekseeva/' className='socialbutton'><img src={navIcon1} alt="navIcon" /></a>
          <a href='https://github.com/kat9898' className='socialbutton'><img className='githubImg' src={navIcon2} alt="navIcon" /></a>
          <a href='https://www.instagram.com/katealekseewa/' className='socialbutton'><img src={navIcon3} alt="navIcon" /></a>
          <button className='letsconnect' onClick={() => console.log('nya')}>Let's Connect</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation