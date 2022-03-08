import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row, Button } from "reactstrap";
import Slider from "react-slick";


import HomeUrl from '../../assets/images/home-border.png';

import Img1 from '../../assets/images/users/img-1.png';
import Img2 from '../../assets/images/users/img-2.png';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 1,
          img: Img1,
          name: "Prince Dmello",
          role: '#developer',
          description: 'Passionate about technology'
        },
        {
          id: 2,
          img: Img2,
          name: 'Vishal Allada',
          role: '#developer',
          description: 'Passionate about technology'
        },
        {
          id: 3,
          img: Img1,
          name: 'Pranav Baradkar',
          role: '#developer',
          description: 'Passionate about technology'
        },
      ],
    };
  }

  render() {
    var temsettings = {
      autoplay: true,
      dots: true,
      speed: 300,
      infinite: false,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    const teamslides = this.state.teams.map((team, teamindex) => {
      
    });
    return (
      <React.Fragment>
        <section className="section bg-light bg-cta">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="text-center">
                  <h2>Market Overview <span className="text-primary"> - Documents</span></h2>
                  <p className="text-muted mt-3">A due diligence report is a document prepped by an independent third party due diligence team which includes information related to financials, compliance, key risks and a lot more.</p>
                  <div className="mt-4 pt-2">
                    <Link to="/Invest" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Read More</Link>
                    <Link to="#" className="btn btn-primary btn-round btn-rounded"> DOWNLOAD </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
