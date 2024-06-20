import React from 'react'
import './contact.css'

import { Container, Row, Col } from 'reactstrap'
import Form from '../form/Form'

const Contact = () => {


    return <section>
        <Container>
            <Row>
                <Col lg='12' className='in_touch mb-4'>
                    <h2>Get in touch</h2>
                </Col>

                <Col lg='6' md='6'>
                    <div className="contact__info-container d-flex align-items-center gap-5">
                      <div className="single__info">
                        <h6>Address</h6>
                        <p>Gaya, Bihar, India</p>
                      </div>

                      <div className="single__info">
                        <h6>Email</h6>
                        <p>manjukr171104@gmail.com</p>
                      </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <Form/>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Contact


