import React, { Fragment } from 'react'
import {Header} from '../headers/Header'
import MySection from '../my-section/MySection'
import About from '../about/About'
import Courses from '../courses/Courses'
import Experience from '../experience/Experience'
import Project from '../projects/Project'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

export const Layout = () => {
    return <Fragment>
        <Header />
            <div id="home">
                <MySection />
            </div>

            <div id="about">
                <About />
            </div>

            <div id="courses">
                <Courses/>
            </div>

            <div id="experience">
                <Experience/>
            </div>

            <div id="projects">
                <Project/>
            </div>

            <div id="contact">
                <Contact/>
            </div>

            <div id="footer">
                <Footer/>
            </div>
    </Fragment>
}


