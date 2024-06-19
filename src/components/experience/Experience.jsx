import React from 'react';
import './experience.css';
import { Container, Row, Col } from 'reactstrap';

const experianceData = [
    {
        organisation: 'MNIT Jaipur',
        time: 'June 2024 - August 2024',
        type: 'Remote internship',
        role: 'Research Intern',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis labore quasi aspernatur, quis laborum consequuntur tenetur provident impedit in placeat dolores laboriosam quam eos similique hic sequi dolor tempora.'
    },
    {
        organisation: 'Amazon Hyd',
        time: 'July 2024 - December 2024',
        type: 'internship',
        role: 'Student Intern',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis labore quasi aspernatur, quis laborum consequuntur tenetur provident impedit in placeat dolores laboriosam quam eos similique hic sequi dolor tempora.'
    }
];

const Experience = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='experience__col'>
                        <h2>Experience</h2>
                    </Col>

                    <Col lg='6'>
                        <div className="single__experience-container">
                            {experianceData.map((item, index) => (
                                <div className="single__experience" key={index}>
                                    <span className='experience__icon'><i className="ri-briefcase-line"></i></span>
                                    <h4>{item.organisation}</h4>
                                    <h6>{item.time}</h6>
                                    <h6>{item.type}</h6>
                                    <h5>{item.role}</h5>
                                    <h6>{item.text}</h6>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="single__experience-container">
                            {experianceData.map((item, index) => (
                                <div className="single__experience" key={index}>
                                    <span className='experience__icon'><i className="ri-briefcase-line"></i></span>
                                    <h4>{item.organisation}</h4>
                                    <h6>{item.time}</h6>
                                    <h6>{item.type}</h6>
                                    <h5>{item.role}</h5>
                                    <h6>{item.text}</h6>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;


