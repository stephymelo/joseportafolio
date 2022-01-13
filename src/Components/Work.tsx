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
    type: 'english' | 'spanish';
}

export const Work: React.FC<Work> = ({ type }) => {





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
                        descripSpanish: child.val().descripSpanish as string,
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
        top: 'calc(40% - 15px)',
        width: 50,
        height: 50,
        cursor: 'pointer',
    };
    const arrowStyleR: CSSProperties = {

        padding: '0 0 0 10px',
        position: 'absolute',
        zIndex: 2,
        top: 'calc(40% - 15px)',
        left: 'calc(92% - 15px)',
        width: 50,
        height: 50,
        cursor: 'pointer',
    };



    
    const [autoplay, setAutoplay] = React.useState(true)

    const onClickItem = ()=>{
        setAutoplay(current => !current);
        console.log(autoplay);

    }

    useEffect( () => {
    }, [autoplay]);

  

   
    return (
        <section className='work'>
            

            {type === 'english' && <article className='work__titles'>
                <h2 className='title'>WORK</h2>
                <h1 className='subtitle'>PROJECTS</h1>
            </article>}

            {type === 'spanish' && <article className='work__titlesSpanish'>
                <h2 className='titleS'>TRABAJO</h2>
                <h1 className='subtitleS'>PROYECTOS</h1>
            </article>}


            {type === 'english' && <Carousel autoPlay={autoplay} interval={2000} infiniteLoop={true} showThumbs={false} dynamicHeight={false} selectedItem={0} showIndicators={false} className='work__carousel' onClickItem={onClickItem}
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
                    return <ProjectElem type={'english'} key={elem.id} {...elem} />;
                })}
            </Carousel>}


            {/* SPANISH CAROUSEL */}

            {type === 'spanish' && <Carousel autoPlay={true} infiniteLoop={true} showThumbs={true} dynamicHeight={true} selectedItem={1} showIndicators={false} className='work__carousel' 
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
                    return <ProjectElem type={'spanish'} key={elem.id} {...elem} />;
                })}
            </Carousel>}


        </section>
    );
}