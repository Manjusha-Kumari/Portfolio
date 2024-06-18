import React from 'react'
import './about.css'

import { Container, Row, Col } from 'reactstrap'
import Aboutimg from '../../assets/my-image.png';

const About = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
            <Col lg='4' md='3'>
                <div className="about__btns d-flex flex-column align-items-center">
                    <button className="about__btn">About me</button>
                    <button className="about__btn">Education</button>
                    <button className="about__btn">Skills</button>
                    <button className="about__btn">Certificates</button>
                </div>
            </Col>

            <Col lg='8' md='9'>
                <div className="about__container__wrapper d-flex gap-5">
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
                            <h6>Connect with me:</h6>
                                <span>
                                    <a href="#"><i class="ri-github-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-box-fill"></i></a>
                                </span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default About