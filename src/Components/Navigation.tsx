import * as React from 'react';
import { useEffect } from 'react';
import Scroll, { Link } from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;


interface Navigation {
    type: 'english' | 'spanish';

    
}

export const Navigation: React.FC<Navigation> = ({ type }) => {
    //  const state = {isToggleOn: true};
    //  const [ state, setState ] = React.useState< {isToggleOn: true}|{isToggleOn: false}>();
    const [state, setState] = React.useState(false)

    const handleBurgerView =()=>{
        setState(current => !current)
    }

    useEffect( () => {
    }, [state]);

    return (
        <div className='Navigation'>

            <nav className='normalNav'>

                {type === 'english' && <ul className='ulNav'>
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

                {type === 'spanish' && <ul className='ulNav'>
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
            </nav>


            {/* ////// */}



            <div onClick={handleBurgerView} className="burgerMenu">
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </div>

            {state ? <nav className='burgerNavigation'>


{type === 'english' && <ul className='ulBurger'>
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

{type === 'spanish' && <ul className='ulBurger'>
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

</nav> : ' ' }


        </div>

    );
}