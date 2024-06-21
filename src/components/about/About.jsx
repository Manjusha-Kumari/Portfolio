import React, {useState} from 'react'
import './about.css'

import { Container, Row, Col } from 'reactstrap'
import Aboutimg from '../../assets/my-image.png';
import Education from './Education';
import Skills from './Skills';
import Certificates from './Certificates';

const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')

    return <section>
        <Container>
            <Row>
                <Col lg='12' className='about__title mb-3'><h2>About Me</h2></Col>
                <Col lg='4' md='3'>
                    <div className="about__btns d-flex flex-column align-items-center">
                        <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>About me</button>
                        <button className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('SKILLS')}>Skills</button>
                        <button className={`about__btn ${aboutFilter === 'CERTIFICATES' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter('CERTIFICATES')}>Certificates</button>
                    </div>
                </Col>

                <Col lg='8' md='9'>
                    {
                        aboutFilter === 'ABOUT' && 
                        <div className="about__content__wrapper d-flex gap-5">
                            <div className="about__img w-25">
                                <img src={Aboutimg} alt="" className='about-image w-100'/>
                            </div>

                            <div className="about__content w-75">
                                <h2>I'm Manjusha Kumari</h2>
                                <p>A Dedicated Computer Science and Engineering undergraduate from MNIT seeking a
                                software development role to leverage my strong coding skills and hands-on
                                experience with Java and C++. Eager to contribute to innovative projects and enhance
                                mytechnical skills in a collaborative team environment.</p>

                                <div className="social__links">
                                    <h6 className='mb-3'>Connect with me:</h6>
                                        <span>
                                            <a href="https://github.com/Manjusha-Kumari"><i class="ri-github-fill"></i></a>
                                            <a href="https://www.linkedin.com/in/manjusha-kumari-94636227a/"><i class="ri-linkedin-box-fill"></i></a>
                                        </span>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        aboutFilter === 'EDUCATION' && <Education/>
                    }
                    {
                        aboutFilter === 'SKILLS' && <Skills/>
                    }
                    {
                        aboutFilter === 'CERTIFICATES' && <Certificates/>
                    }
                </Col>
            </Row>
        </Container>
    </section>
}

export default About