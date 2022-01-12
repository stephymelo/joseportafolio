import * as React from 'react';
import jose from "../Resources/Images/joseEdit.png"

interface About {
    type: 'english' | 'spanish';
}

export const About: React.FC<About> = ({type}) => {
    return (
        <section id="about" className='about'>



            {type === 'english' && <article className="about__info">
                <div className='about__info__title'>
                    <h1 className='name'>MUSIC PRODUCER</h1>
                    <div className='title2'>
                        <h1 className='and'>&amp;</h1>
                        <h1 className='composer'>COMPOSER</h1>
                    </div>
                </div>

                <h3>José Miguel Tamayo, Colombian</h3>
                <div className='about__info__bio'>
                    <p>I have more than 11 years of experience as a solo singer and as member of choral ensembles, participating in events such as the Bandola festival in Sevilla, “Antioquia le canta a Colombia” festival, the Javeriana Choir Festival, among others.
                    </p>
                </div>

            </article> }

            {type === 'spanish' && <article className="about__info">
                <div className='about__info__title'>
                    <h1 className='name'>PRODUCTOR MUSICAL</h1>
                    <div className='title2'>
                        <h1 className='and'>&amp;</h1>
                        <h1 className='composer'>COMPOSITOR</h1>
                    </div>
                </div>

                <h3>José Miguel Tamayo, Colombiano</h3>
                <div className='about__info__bio'>
                    <p>Soy un músico y productor de la universidad ICESI de Cali, Colombia.
Tengo más de 11 años de experiencia como cantante solista e integrante de agrupaciones corales. He trabajado como asistente en grabaciones de estudio, y actualmente proyecto mi carrera como compositor en el mundo del sonido para medios audiovisuales e interactivos.
                    </p>
                </div>

            </article> }
            


            <svg className='about__decor' width="450" height="250" viewBox="0 0 596 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M548.562 218.635C677.283 295.668 498.513 288.5 393.039 275.288C368.853 290.822 275.295 298.307 94.5452 203.972C-131.392 86.0543 114.648 -48.0397 253.358 49.0316C392.067 146.103 387.661 122.344 548.562 218.635Z" stroke="#1F2D7C" strokeWidth="4" />
                <path d="M499.209 198.786C611.008 261.505 455.556 255.977 363.855 245.373C342.794 258.113 261.418 264.403 104.404 187.639C-91.8628 91.6851 122.351 -18.3595 242.8 60.7182C363.248 139.796 359.46 120.387 499.209 198.786Z" stroke="#1F2D7C" strokeWidth="4" />
            </svg>

            <img className="about__photo" src={jose} />



        </section>

    );
}