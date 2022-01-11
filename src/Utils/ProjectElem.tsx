import * as React from 'react';
import { ProjectProp } from './ProjectProp';
import ReactPlayer from 'react-player';
import override from "../Resources/Images/contactBg.png"

export type ProjectElemProp = ProjectProp & {
}



const ProjectElem: React.FC<ProjectElemProp> = ({ id, title, url, description, cover }) => {

    console.log(id);

    return (
        <section className='projectElem'>

            <article className='projectElem__article'>
           
                <article className='projectElem__article--1'>
                    <ReactPlayer width='100%' height='100%' url={url} controls={true} light={cover} /> 
                </article>

                <article className='projectElem__article--2'>
                    <h4 className='projectElem__title'>{title}</h4>
                    <p className='projectElem__description'>{description}</p>
                </article>
            </article>


        </section>
    );
}

export default ProjectElem;