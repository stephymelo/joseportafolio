import React, { Fragment, useEffect, useState, CSSProperties } from 'react';
import { ProjectProp } from '../Utils/ProjectProp';
import { onValue, ref } from '@firebase/database';
import { db } from '../Utils/ApiFirebase';
import ProjectElem from '../Utils/ProjectElem';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import arrowLeft from "../Resources/Icons/arrowLeft.png"
import arrowRight from "../Resources/Icons/arrowRight.png"

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




    const arrowStyleL: CSSProperties = {
       
       
        margin: '0 80 0 0px',
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 50,
        height: 50,
        cursor: 'pointer',
    };
    const arrowStyleR: CSSProperties = {
        
        padding: '0 0 0 10px',
        position: 'absolute',
        zIndex: 2,
        top: 'calc(40% - 15px)',
        width: 50,
        height: 50,
        cursor: 'pointer',
    };

    return (
        <section className='work'>

            <article className='work__titles'>
                <h2 className='title'>WORK</h2>
                <h1 className='subtitle'>PROJECTS</h1>
            </article>


            <Carousel infiniteLoop={false} showThumbs={true} dynamicHeight={true} selectedItem={1} showIndicators={false}  className='work__carousel'
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button className='arrowCarrousel' type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyleL, left: 15 }}>
                            <img src={arrowLeft} />
                        </button>
                    )
                }

                renderArrowNext={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button className='arrowCarrousel' type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyleR, right: 15 }}>
                            <img src={arrowRight} />
                        </button>
                    )
                }
            >
                {newArray.map((elem) => {
                    return <ProjectElem key={elem.id} {...elem}
                    />;
                })}
            </Carousel>


        </section>
    );
}