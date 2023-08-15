import React, { useState, useEffect } from 'react';

import programming from '../assets/img/programming.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-svgrepo-com.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import './Navigation.scss';

type Props = {
  refs: {
    home: React.MutableRefObject<any>;
    skills: React.MutableRefObject<any>;
    projects: React.MutableRefObject<any>;
    contact: React.MutableRefObject<any>;
  };
};

const socialNetworks = [];

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
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  const handleScroll = (ref: React.MutableRefObject<any>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={props.refs.home} className={`container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img width="20px" height="20px" src={programming} alt="logo" />
      </div>
      <div className="navigation">
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
        <nav className="navbar">
          <button
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => {
              onUpdateActiveLink('Home');
              handleScroll(props.refs.home);
            }}>
            Home
          </button>
          <button
            className={activeLink === 'Skills' ? 'active' : ''}
            onClick={() => {
              onUpdateActiveLink('Skills');
              handleScroll(props.refs.skills);
            }}>
            Skills
          </button>
          <button
            className={activeLink === 'Projects' ? 'active' : ''}
            onClick={() => {
              onUpdateActiveLink('Projects');
              handleScroll(props.refs.projects);
            }}>
            Projects
          </button>
        </nav>
        <div className="connect">
          <a href="https://www.linkedin.com/in/ekaterina-alekseeva/" className="socialbutton">
            <img src={navIcon1} alt="navIcon" />
          </a>
          <a href="https://github.com/kat9898" className="socialbutton">
            <img className="githubImg" src={navIcon2} alt="navIcon" />
          </a>
          <a href="https://www.instagram.com/katealekseewa/" className="socialbutton">
            <img src={navIcon3} alt="navIcon" />
          </a>
          <button className="letsconnect" onClick={() => handleScroll(props.refs.contact)}>
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
