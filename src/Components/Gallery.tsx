import React, { Fragment, useEffect, useState, CSSProperties } from 'react';
import { FotosProp } from '../Utils/FotosProp';
import { onValue, ref } from '@firebase/database';
import { db } from '../Utils/ApiFirebase';
import FotosElem from '../Utils/FotosElem'

interface GalleryProps {
    type: 'english' | 'spanish';

}


export const Gallery: React.FC<GalleryProps> = ({ type }) => {

    const [newArray, setNewArray] = useState<FotosProp[]>([]);


    useEffect(() => {
        const getData = async () => {
            const projectsRef = ref(db, '/images');
            let lista: FotosProp[] = [];
            onValue(projectsRef, (snapshot) => {
                snapshot.forEach(child => {
                    const item = {
                        id: child.key, // id del objeto
                        // id:Math.random().toString(),
                        img: child.val().img as string,

                    }
                    lista.push(item);

                });
                setNewArray(lista);

            });

        }

        getData();
    }, []);


    return (
        <section className='gallery'>
            <article className='gallery--1'>
                {type === 'english' && <h2>GALLERY</h2>}
                {type === 'spanish' && <h2>GALERIA</h2>}
                <hr></hr>
            </article>



            <article className='gallery--2'>

                {newArray.map((elem) => {
                    return <FotosElem key={elem.id} {...elem}
                    />;
                })}

            </article>


            <svg className='gallery__decor' width="450" height="250" viewBox="0 0 596 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M548.562 218.635C677.283 295.668 498.513 288.5 393.039 275.288C368.853 290.822 275.295 298.307 94.5452 203.972C-131.392 86.0543 114.648 -48.0397 253.358 49.0316C392.067 146.103 387.661 122.344 548.562 218.635Z" stroke="#1F2D7C" strokeWidth="4" />
                <path d="M499.209 198.786C611.008 261.505 455.556 255.977 363.855 245.373C342.794 258.113 261.418 264.403 104.404 187.639C-91.8628 91.6851 122.351 -18.3595 242.8 60.7182C363.248 139.796 359.46 120.387 499.209 198.786Z" stroke="#1F2D7C" strokeWidth="4" />
            </svg>

            <svg className='gallery__decor2' width="596" height="302" viewBox="0 0 596 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M548.562 218.635C677.283 295.668 498.513 288.5 393.039 275.288C368.853 290.822 275.295 298.307 94.5452 203.972C-131.392 86.0543 114.648 -48.0397 253.358 49.0316C392.067 146.103 387.661 122.344 548.562 218.635Z" stroke="#1F2D7C" strokeWidth="4" />
                <path d="M499.209 198.786C611.008 261.505 455.556 255.977 363.855 245.373C342.794 258.113 261.418 264.403 104.404 187.639C-91.8628 91.6851 122.351 -18.3595 242.8 60.7182C363.248 139.796 359.46 120.387 499.209 198.786Z" stroke="#1F2D7C" strokeWidth="4" />
            </svg>



        </section>
    );
}