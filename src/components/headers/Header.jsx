import React, {useRef, useEffect} from 'react'
import {Container} from 'reactstrap'
import './header.css'

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },

    {
        display: 'About',
        url: '#about'
    },

    {
        display: 'Courses',
        url: '#courses'
    },

    {
        display: 'Experience',
        url: '#experience'
    },

    {
        display: 'Projects',
        url: '#projects'
    },

    {
        display: 'Contact',
        url: '#contact'
    },
]

export const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header__shrink');
            } else {
                headerRef.current.classList.remove('header__shrink');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetAttr);

        if (targetElement) {
            const headerHeight = headerRef.current.offsetHeight;
            const location = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                left: 0,
                top: location,
                behavior: 'smooth'
            });
        } else {
            console.warn(`Element not found: ${targetAttr}`);
        }
    };
    
    return <header className="header" ref={headerRef}>
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h5>Manjusha</h5>
                </div>

                <div className="nav__menu">
                    <ul className="nav__list">
                            {
                                navLinks.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <a href={item.url} id={item.display} onClick={handleClick}>{item.display}</a>
                                    </li>
                                ))
                            }
                    </ul>
                </div>

                <div className="nav__right d-flex align-items-center gap-4">
                    <button className="btn">
                        Let's Talk
                    </button>
                    <span className="mobile__menu">
                        <i class="ri-menu-fill"></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
}

export default Header;


