import React from 'react'
import ProjectCard from './ProjectCard';
import BeerProject from '../assets/img/BeerProject.png';
import SimpleNotes from '../assets/img/Notes.png';

import './Projects.scss';

type Props = {}

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Beer asessment",
      description: "Design & Development",
      imgUrl: BeerProject,
      url: ""
    },
    {
      title: "Simple notes",
      description: "Simple project & Development",
      imgUrl: SimpleNotes,
      url: "https://kat9898.github.io/simply-notes/"
    },
    {
      title: "Beer asessment",
      description: "Design & Development",
      imgUrl: BeerProject,
      url: ""
    },
    {
      title: "Beer asessment",
      description: "Design & Development",
      imgUrl: BeerProject,
      url: ""
    },
    {
      title: "Beer asessment",
      description: "Design & Development",
      imgUrl: BeerProject,
      url: ""
    },
    {
      title: "Beer asessment",
      description: "Design & Development",
      imgUrl: BeerProject,
      url: ""
    }
  ];

  return (
    <section className='projectsContainer'>
      <h2>Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore fugiat nesciunt asperiores consequatur veniam laborum expedita dignissimos aut distinctio. Suscipit quisquam necessitatibus eligendi fugit dolorem magni deserunt id amet?</p>
      <div className='projects'>
        {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>
    </section>
  )
}

export default Projects