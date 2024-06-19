import React from 'react'
import './project.css'

import { Container, Row, Col } from 'reactstrap'
import geniemind from '../../assets/geniemind.png'
import sorting from '../../assets/sorting.png'
import todo from '../../assets/todo.png'
import ev from '../../assets/ev.png'
import snake from '../../assets/snake.png'

const projectData = [
    {
        image: geniemind,
        title: 'Genie Mind - (Geminie clone)GenerativeAI',
        url: 'https://github.com/Manjusha-Kumari/GenieMind-generativeAI'
    },
    {
        image: sorting,
        title: 'Sorting Visualiser',
        url: 'https://github.com/Manjus17/sorting_visualiser'
    },
    {
        image: todo,
        title: 'Todoie App using React',
        url: 'https://github.com/Manjusha-Kumari/Todo_App'
    },
    {
        image: ev,
        title: 'EV station Management app using Python',
        url: 'https://github.com/Manjus17/project_EV'
    },
    {
        image: snake,
        title: 'Snake game in python',
        url: 'https://github.com/Manjus17/python_games'
    }
];

const Project = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='project__top mb-4'>
                <h6>Explore my projects and give feedback</h6>
                <h2>Projects</h2>
            </Col>

            {
                projectData.map((item, index) => (
                    <Col lg='4' md='6' sm='6' key={index} className='col'>
                        <div className="project__card">
                            <div className="project__img">
                                <img src={item.image} alt="" className='w-100'/>
                            </div>

                            <div className="project__content">
                                <div className="content__top">
                                    <h5>{item.title}</h5>
                                    <a href={item.url}>View Repo</a> 
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </Container>
  </section>
}

export default Project


