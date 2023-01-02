import React from 'react';

import './ProjectCard.scss';

type Props = {
    title: string,
    description: string,
    imgUrl: string,
    url: string
}

const ProjectCard = (props: Props) => {
    const {title, description, imgUrl, url} = props;
  return (
    <div className='projectContainer'>
        <a href={url}>
            <img src={imgUrl} />
            <div className='projectText'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </a>
    </div>
  )
}

export default ProjectCard