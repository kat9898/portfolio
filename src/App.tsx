import React from 'react';
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

  return (
    <div className="App">
      
      <Navigation/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
