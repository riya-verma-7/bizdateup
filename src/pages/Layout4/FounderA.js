import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';

import { Link } from "react-router-dom";
import HomeUrl from '../../assets/images/home-border.png';

export default class FounderA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          icon: 'mdi-numeric-1-circle',
          title: "Know what’s happening",
          description: "Get the startup insights right at your disposal. Manage reports, user traction all in one go. Gain control of your startup’s strength."
        },
        {
          id: 'service2',
          icon: 'mdi-numeric-2-circle',
          title: "Taking the toll out of tracking",
          description: 'Keeping track of everything can be hard. Prioritize your metrics, get the most out of our tools.'
        },
        {
          id: 'service3',
          icon: 'mdi-numeric-3-circle',
          title: "It gets easy from here",
          description: "Paperwork is a thing from the past. Put in the details and it's done. Nothing else."
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
                  <h3 className="title-heading mt-4"></h3>
                  <h2 className="text-muted f-17 mt-3">
                  FROM THE DESK OF STARTUP EXPERTS
                  </h2>
                  <p>The fundraising experience on BizDateUp is as smooth as it gets. Plus, the control to create automated reports that are based on analytics is what I was looking for. Let’s see what more BizDateUp has to offer. </p>
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
