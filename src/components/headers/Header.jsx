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
        display: 'Services',
        url: '#services'
    },

    {
        display: 'Portfolio',
        url: '#portfolio'
    },

    {
        display: 'Contact',
        url: '#contact'
    },
]

export const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {

    }, [])

    return <header className="header">
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
                                        <a href={item.url}>{item.display}</a>
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


