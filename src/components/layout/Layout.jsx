import React, { Fragment } from 'react'
import {Header} from '../headers/Header'
import MySection from '../my-section/MySection'
import About from '../about/About'

export const Layout = () => {
    return <Fragment>
        <Header/>
        <MySection/>
        <About/>
    </Fragment>
}


