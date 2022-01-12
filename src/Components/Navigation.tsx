import * as React from 'react';
import Scroll, { Link } from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

interface Navigation {
    type: 'english' | 'spanish';
}

export const Navigation: React.FC<Navigation> = ({type}) => {
    return (
        <div className='Navigation'>

            {type==='english' && <ul>
                <li>
                    <Link
                        to="banner"
                        spy={true}
                        smooth={true}
                        duration={200}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={200}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link
                        to="work"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        WORK
                    </Link>
                </li>

                <li>
                    <Link
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        GALLERY
                    </Link>
                </li>

                <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>}

            {type==='spanish' && <ul>
                <li>
                    <Link
                        to="banner"
                        spy={true}
                        smooth={true}
                        duration={200}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={200}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        SOBRE MI
                    </Link>
                </li>
                <li>
                    <Link
                        to="work"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        TRABAJOS
                    </Link>
                </li>

                <li>
                    <Link
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        GALLERIA
                    </Link>
                </li>

                <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='some-class'
                        activeClass='some-active-class'
                    >
                        CONTACTO
                    </Link>
                </li>
            </ul>}

        </div>
    );
}