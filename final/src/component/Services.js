import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';

import { Link } from "react-router-dom";
import HomeUrl from '../assets/images/home-border.png';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      counters: [
        {
          id: '1',
          extraclass: 'pt-3',
          start: 0,
          end: 1,
          title: "Signup",
          description: 'Create a profile by choosing specific keywords based on what you are looking for'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 0,
          end: 2,
          title: "Matching",
          description: 'Our AI-based algorithm takes in your preferences and finds the ideal match.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 0,
          end: 3,
          title: "Investing",
          description: 'Invest in your favorite startup or as a founder raise funds.'
        },
      ],
      services: [
        {
          id: 'service1',
          icon: 'mdi-cash-multiple',
          title: "Raise funds",
          description: 'Your startup has some recurring costs. Get the eyeballs to your business, raise the funds that you’ve always wanted.'
        },
        {
          id: 'service3',
          icon: 'mdi-finance',
          title: "Invest in your favorite startups",
          description: 'You believe a startup is going to be a huge hit. Get yourself a piece of the pie. Invest, Interact, learn'
        },
        {
          id: 'service1',
          icon: 'mdi-cursor-pointer',
          title: "Startup solution platform.",
          description: "Get access to services that you might need while running your startup. Mentorship sessions, Legal solutions"
        },
        {
          id: 'service2',
          icon: 'mdi-wan',
          title: "Build your network",
          description: 'Interact with like-minded individuals while you learn the insights of startups and businesses in general.'
        },
        {
          id: 'service3',
          icon: 'mdi-account-switch',
          title: "Find the perfect Co-Founder",
          description: 'You have an idea. Get your idea to a co-founder who has the strength to put it to work.'
        },
        
      {
          id: 'service2',
          icon: 'mdi-account-group',
          title: "Customer support",
          description: 'Got stuck somewhere in your startup journey? Our Bizdateup executives are there to help.'
        }
       
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section " id="services">
          <Container>
          <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">WANT TO INVEST IN YOUR FAVORITE STARTUP? 
                  <br/>KEEP SCROLLING !</h3>
                  {/* <p className="text-muted f-17 mt-3">
                    WANT TO INVEST IN YOUR FAVORITE STARTUP? KEEP SCROLLING !
                    </p> */}

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>

            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">About BizDateUp</p>
                  <h3>Two Perspective, One spot!</h3>
                  <p className="text-muted mt-3">Bizateup is a Dating platform that enables startup Founders to find and match with potential Co-Founders. Bizdateup ets you Startups to raise funds through Public rounds and also lets users invest in their favorite startups.
Apart from that, BizDateUp offers services to boost a startup's growth exponentially. To name a few, these services include Mentorship sessions, Legal solutions, Pitch Deck, Website Development, etc.
</p>
                  <div className="mt-4 pt-1">
                    <Link to="/Deals" className="btn btn-outline-primary">Read more</Link>
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
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
