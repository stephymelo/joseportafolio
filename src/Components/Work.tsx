import React, { Fragment, useEffect, useState } from 'react';
import { ProjectProp } from '../Utils/ProjectProp';
import Database from '../Utils/Database';
import { onValue, ref } from '@firebase/database';
import { db } from '../Utils/ApiFirebase';
import ProjectElem from '../Utils/ProjectElem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface Work {
}

export const Work: React.FC<Work> = () => {






    const [newArray, setNewArray] = useState<ProjectProp[]>([]);



    useEffect(() => {
        const getData = async () => {
            const projectsRef = ref(db, '/project');
            let lista: ProjectProp[] = [];
            onValue(projectsRef, (snapshot) => {
                snapshot.forEach(child => {
                    const item = {
                        id: child.key, // id del objeto
                        // id:Math.random().toString(),
                        title: child.val().title as string,
                        description: child.val().description as string,
                        url: child.val().url as string,
                        cover: child.val().cover as string,
                    }
                    lista.push(item);

                });
                setNewArray(lista);

            });

        }

        getData();
    }, []);


    return (
        <section className='work'>

            <article className='work__titles'>
                <h2 className='title'>WORK</h2>
                <h1 className='subtitle'>PROJECTS</h1>
            </article>


            <Carousel infiniteLoop={true} dynamicHeight={true} showThumbs={false} className='work__carousel' >
                {newArray.map((elem) => {
                    return <ProjectElem key={elem.id} {...elem}
                    />;
                })}
            </Carousel>


        </section>
    );
}