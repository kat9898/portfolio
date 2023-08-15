import React, { useRef } from 'react';
import Slider from './components/Slider';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

import './App.css';

function App() {
  // const importAll = (r) => {
  //   return r.keys().map(r);
  // };

  // const allData = importAll(
  //   require.context('./img/', false, /\.jpg$/)
  // );
  // console.log(allData);
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <div className="App">
      <Navigation refs={{ home, skills, projects, contact }} />
      <Banner homeRef={home} contactRef={contact} />
      <Skills skillsRef={skills} />
      <Projects projectsRef={projects} />
      <Contact contactRef={contact} />
      <Footer />
    </div>
  );
}

export default App;
