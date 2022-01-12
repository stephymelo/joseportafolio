import React, { Fragment, useEffect, useState, CSSProperties } from 'react';
import { FotosProp } from '../Utils/FotosProp';
import { onValue, ref } from '@firebase/database';
import { db } from '../Utils/ApiFirebase';
import FotosElem from '../Utils/FotosElem'

interface GalleryProps {

}


export const Gallery: React.FC<GalleryProps> = () => {

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
                 <h2>GALLERY</h2>
                 <hr></hr>
              

              </article>

        

            <article className='gallery--2'>

                {newArray.map((elem) => {
                    return <FotosElem key={elem.id} {...elem}
                    />;
                })}

            </article>


        </section>
    );
}