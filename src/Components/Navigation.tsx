import * as React from 'react';
import Scroll, { Link } from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

interface Navigation {
}

export const Navigation: React.FC<Navigation> = () => {
    return (
        <div className='Navigation'>

            <ul>
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

                {/* <li><a href="#">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#work">WORK</a></li>
                <li><a href="#gallery">GALLERY</a></li>
                <li><a href="#contact">CONTACT</a></li> */}
            </ul>

        </div>
    );
}