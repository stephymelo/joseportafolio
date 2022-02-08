import * as React from 'react';
import { ProjectProp } from './ProjectProp';
import ReactPlayer from 'react-player';

export type ProjectElemProp = ProjectProp & {
    type: 'english' | 'spanish';
}



const ProjectElem: React.FC<ProjectElemProp> = ({ id, title, url, description,descripSpanish, cover,type }) => {

    let width = "100%";
    let height = "100%";

    const makeFullscreen = () => {
        width="2000px";
        height="2000px";
        
    }

    

    console.log(id);

    return (
        <section className='projectElem'>

            <article className='projectElem__article'>
           
                <article className='projectElem__article--1'>
                    <ReactPlayer className= 'player' width={width} height={height} url={url} controls={true} light={cover} origin='http://localhost:3001' onPlay= {() => makeFullscreen()}/> 
                </article>

                <article className='projectElem__article--2'>
                    <h4 className='projectElem__title'>{title}</h4>
                    {type ==='english' &&<p className='projectElem__description'>{description}</p>}
                    {type ==='spanish' &&<p className='projectElem__description'>{descripSpanish}</p>}
                </article>
            </article>


        </section>
    );
}

export default ProjectElem;