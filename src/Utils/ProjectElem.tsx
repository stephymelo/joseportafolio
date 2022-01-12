import * as React from 'react';
import { ProjectProp } from './ProjectProp';
import ReactPlayer from 'react-player';

export type ProjectElemProp = ProjectProp & {
}



const ProjectElem: React.FC<ProjectElemProp> = ({ id, title, url, description, cover }) => {

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
                    <ReactPlayer className= 'player' width={width} height={height} url={url} controls={true} light={cover} onPlay= {() => makeFullscreen()}/> 
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