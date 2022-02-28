import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';

import { Link } from "react-router-dom";
import HomeUrl from '../../assets/images/home-border.png';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 25,
          end: 49,
          title: "Employees",
          description: 'Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 25,
          end: 76,
          title: "Projects",
          description: 'Pellentesque habitant morbi malesuada fames ac turpis egestas.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: "CLIENTS",
          description: 'Suspendisse congue risus consequat sapien potitor risus tincidunt.'
        },
      ],
      services: [
        {
          id: 'service1',
          icon: 'mdi-google',
          title: "Signup and get started",
          description: "Create a profile and answer a questionnaire based on your skills. "
        },
        {
          id: 'service2',
          icon: 'mdi-instagram',
          title: "Select Skills",
          description: 'Choose specific keywords that highlight your expertise.'
        },
        {
          id: 'service3',
          icon: 'mdi-youtube',
          title: "Enter your preferences",
          description: 'Select keywords based on what you are looking for in your next co-founder.'
        },
        {
          id: 'service2',
          icon: 'mdi-instagram',
          title: "AI takes charge",
          description: 'Our AI-based algorithm takes in your preferences and finds the ideal match.'
        },
        {
          id: 'service2',
          icon: 'mdi-instagram',
          title: "They said Yes!",
          description: 'You just got yourself a co-founder!'
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <p className="text-muted f-17 mt-3">FIND YOUR PERFECT CO-FOUNDER. IT’S THAT EASY!<br /> WANT TO INVEST IN YOUR FAVORITE STARTUP? KEEP SCROLLING!
</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className="services-box p-4 mt-4">
                    <div className="services-icon bg-soft-primary">
                      <i className={"mdi text-primary " + item.icon}></i>
                    </div>

                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    <div className="mt-3">
                      <Link to="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></Link>
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">About BizDateUp</p>
                  <h3>Two Perspective, One spot!</h3>
                  <p className="text-muted mt-3">Say Hello to an AI-based algorithm that lets you connect with Co-founders, Investors, and real-world startups solutions. 

THE ONLY ALGORITHM THAT HELPS YOU FIND CO-FOUNDERS, INVESTORS AND SERVICES THAT YOUR STARTUP NEEDS. POWERED WITH AI*
</p>
                  <div className="mt-4 pt-1">
                    <Link to="#" className="btn btn-outline-primary">Read more</Link>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1">
                <div className="counter-box">
                  {this.state.counters.map((counteritem, key) => (
                    <div className={ (counteritem.id !== '1') ? 'mt-4 pt-3' : 'mt-4' } key={key}>
                      <div className="media">
                        <div className="count-box bg-soft-primary text-center">
                          <h3 className="counter-count mb-1 text-primary"> 
                          <CountUp className="counter-value" delay={2} start={counteritem.start} end={counteritem.end} />{" "}
                            <span className="count-plus text-primary"> +</span></h3>
                          <p className="text-uppercase text-muted mb-0 f-14">{counteritem.title} </p>
                        </div>
                        <div className="media-body pl-4">
                          <p className="text-muted mb-0 mt-3">{counteritem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
