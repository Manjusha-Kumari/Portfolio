import React, {useRef, useEffect} from 'react';
import './my-section.css';
import { Container, Row, Col } from 'reactstrap';
import Myimg from '../../assets/my-image.png';

import { init } from 'ityped';


const MySection = () => {
  const textRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const instance = init(textRef.current, {
        backDelay: 1500,
        showCursor: true,
        strings: [
          'Manjusha Kumari',
          'a Web Developer',
          'a Software Developer',
          'an Undergraduate Student in CSE at MNIT Jaipur'
        ]
      });

      // Cleanup function to avoid memory leaks
      return () => {
        if (instance && instance.destroy) {
          instance.destroy();
        }
      };
    }
  }, []); 

  return (
    <section className="my-section" id='home'>
      <Container>
        <Row className="my-section__row">
          <Col lg="6" md="6">
            <div className="my__container">
              <p className="welcome-text mb-3 ">Welcome to my Website</p>
              <div className="header-content mb-5 ">
                <h2 className="my__title">
                  I'm <span ref={textRef}></span>
                </h2>
                <p>
                A Dedicated Computer Science and Engineering undergraduate from MNIT seeking a
                software development role to leverage my strong coding skills and hands-on
                experience with Java and C++. Eager to contribute to innovative projects and enhance
                mytechnical skills in a collaborative team environment.
                </p>
              </div>
              <div className="my__btns mt-5 d-flex align-items-center gap-4">
                <button className="hire__btn">
                  <a href="#">Hire Me</a>
                </button>
                <button className="contact__btn">Contact</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="my__img">
              <img src={Myimg} alt="" className="my_pic" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MySection;

