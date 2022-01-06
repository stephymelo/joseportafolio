import * as React from 'react';
import { ProjectProp } from './ProjectProp';
import ReactPlayer from 'react-player';

export type ProjectElemProp = ProjectProp & {
}



const ProjectElem: React.FC<ProjectElemProp> = ({ id, title, url, description }) => {

   console.log(id);
      
    return (
        <section className='projectElem'>
            <h4>{title}</h4>
            <ReactPlayer url={url} />
            <p>{description}</p>
        </section>
    );
}

export default ProjectElem;