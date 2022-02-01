import * as React from 'react';
import mail from "../Resources/Icons/mailIcon.svg"
import insta from "../Resources/Icons/instagramIcon2.svg"
import you from "../Resources/Icons/youtubeIcon2.svg"

interface Contact {
}

export const Contact: React.FC<Contact> = () => {
    return (
        <section className='contact'>
            <article className='contact--1'>

                <h2 className='first'>JOSÉ MIGUEL</h2>
                <h2 className='last'>TAMAYO</h2>

            </article>

            <article className='contact--2'>
                <ol>
                    <li><a target='_blank' href="https://www.instagram.com/polyphonic_ezog/?hl=es-la"><img src={insta} /></a> </li>
                    <li><a target='_blank' href="  https://www.youtube.com/channel/UC_z3NVTTaLrFPIMz7bLDesg"><img src={you} /></a></li>
                    <li><a target='_blank' href="  mailto:jose.tamayog@hotmail.com"><img src={mail} /></a></li>

                </ol>







            </article>

            <article className='contact--3'>
                <p className='title'>Polyphonic Ezog</p>
                <p className='subtitle'>All rights reserved 2022</p>
            </article>

        </section>
    );
}