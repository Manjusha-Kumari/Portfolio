import React from 'react'
import './courses.css'
import { Container, Row, Col } from 'reactstrap'

const coursesData = [
    {
        icon: 'ri-layout-fill',
        title: 'Web Design (Figma)',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-nodejs-line',
        title: 'Node Js',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-git-pull-request-line',
        title: 'Git Commands',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-reactjs-fill',
        title: 'Reactjs',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-html5-line',
        title: 'HTML, CSS, JS',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-java-line',
        title: 'Java',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-terminal-box-line',
        title: 'C++ with DSA',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-code-block',
        title: 'Python',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },

    {
        icon: 'ri-code-s-slash-line',
        title: 'C language',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem illum ut, ullam doloribus obcaecati repudiandae earum dignissimos dolorem assumenda aliquam suscipit beatae, vero at molestiae debitis eius voluptas veritatis?',
        link: 'https://www.youtube.com/watch?v=d8A8JmAImc4&list=PLinedj3B30sDZ17Fpe3xGUDRBkutaGyUp'
    },
]

const Courses = () => {
    return <section className="courses">
        <Container>
            <Row>
                <Col lg='12' className='courses__top mb-5'>
                    <h6>Features</h6>
                    <h2>What courses have I studied</h2>
                </Col>

                {
                    coursesData.map((item, index) => (
                        <Col lg='4' md='6' sm='6' key={index} className='course__div mb-5'>
                            <div className="single__courses">
                                <span className="course__icon">
                                <i class={item.icon}></i>
                                </span>

                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                                <a href={item.link}>Link</a>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
}

export default Courses