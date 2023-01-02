import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import './Skills.scss';

type Props = {}

type Skill = {
  name: string,
  level: string
}

const skills: Skill[] = [
  {name: 'HTML', level: '80'},
  {name: 'CSS', level: '80'},
  {name: 'Sass', level: '70'},
  {name: 'JS', level: '80'},
  {name: 'TypeScript', level: '50'},
  {name: 'Flow', level: '70'},
  {name: 'React', level: '80'},
  {name: 'Redux', level: '60'},
  {name: 'Redux-Saga', level: '55'},
  {name: 'MobX', level: '30'},
  {name: 'Jest', level: '70'},
  {name: 'Enzyme', level: '70'},
  {name: 'Prettier', level: '30'},
  {name: 'ESLint', level: '30'},
  {name: 'Socket.io', level: '40'},
  {name: 'Lodash', level: '50'},
  {name: 'moment', level: '50'},
  {name: 'axios', level: '50'},
  {name: 'Styled Components', level: '40'},
  {name: 'Ant Design', level: '50'},
  {name: 'react-multi-carousel', level: '50'},
  {name: 'Swiper', level: '50'},
  {name: 'dexie', level: '50'},
  {name: 'Webpack', level: '40'},
  {name: 'git', level: '90'},
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Skills = (props: Props) => {
  return (
    <section className='skillsContainer'>
      <h2>Skills</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum unde eius quo similique neque earum esse ex aspernatur aperiam tenetur, harum saepe qui maiores doloremque eum, atque aliquid. Atque!</p>
      <div className='skillBox'>
        <Carousel responsive={responsive} infinite={true} className='skillSlider'>
          {skills.map((skill, i) => 
          <div key={i} className='item'>
            <div className='box'>
              <svg className="skillCircle">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00bc9b" />
                    <stop offset="100%" stopColor="#5eaefd" />
                  </linearGradient>
                </defs>
                <circle cx="90" cy="95" r="80" stroke="#191919"></circle>
                <circle cx="90" cy="95" r="80" stroke="url(#gradient)" strokeDasharray="500" strokeDashoffset={`calc(480 - (440 * ${skill.level}) / 100)`}></circle>
              </svg>
              <div className='percent'>{`${skill.level} %`}</div>
              <h5>{skill.name}</h5>
            </div>
          </div>)}
        </Carousel>

      </div>
    </section>
  )
}

export default Skills