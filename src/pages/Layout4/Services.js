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
          icon: 'mdi-numeric-1-circle',
          title: "Invest instantly",
          description: "It takes less than 30 seconds to get started in your investing journey. Hassle-free secure transactions are a thing. It’s about time you put in the money to work for you."
        },
        {
          id: 'service2',
          icon: 'mdi-numeric-2-circle',
          title: "Jump before you leap",
          description: 'Get your market research done by interacting with peers and other investors in the BizDateUp network.'
        },
        {
          id: 'service3',
          icon: 'mdi-numeric-3-circle',
          title: "Stay up-to-date",
          description: 'Know when the market’s on the rise. Our Analytical tools will have you covered'
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
                  <h2 className="text-muted f-17 mt-3">
                  How to invest in your favorite startups with BizDateUp ?
                  </h2>

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
