import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row, Button } from "reactstrap";
import Slider from "react-slick";


import HomeUrl from '../../assets/images/home-border.png';

import Img1 from '../../assets/images/users/img-1.png';
import Img2 from '../../assets/images/users/img-2.png';
import Img3 from '../../assets/images/users/img-3.png';
import Img4 from '../../assets/images/users/img-4.png';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          id: 1,
          img: Img1,
          name: 'Calvin Hubbard',
          nickname: '#Calvin',
          description: 'Invest in startups you believe. Learn how the business works and interact with the community as you grow your fortune.'
        },
        {
          id: 2,
          img: Img2,
          name: 'Jeremiah Eskew',
          nickname: '#Jeremiah',
          description: 'GET YOUR FUNDS THROUGH BIZDATEUP. CONVERT YOUR COMMUNITY INTO CAPITAL  AND GET FUNDED.'
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
      return (
        <div className="team-box p-3" key={teamindex}>
          <Row className="align-items-center">
            <Col lg={13} style={{backgroundColor: "#f0f9fa", padding: "10px", margin:"20px" }}>
              <div className="mt-4" style={{textAlign: "center" }}>
                <h5 className="mt-2">{team.name}</h5>
                <p className="team-badge bg-primary text-white rounded f-14 mt-2">#{team.nickname}</p>
                <p className="text-muted mt-3">{team.description}</p>
                <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      {/* <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link> */}
                      <Button>Invest Now</Button>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            {/* <Col lg={6}>
              <div className="mt-4" style={{textAlign: "center"}}>
                <Button>Invest Now</Button>
              </div>
            </Col> */}
          </Row>
        </div>
      );
    });
    return (
      <React.Fragment>
        <section className="section pt-0" id="team">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Meet Our Expert People </h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum mauris sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div className="team-carousel">
                  <Slider {...temsettings}>
                    {teamslides}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-light bg-cta">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="text-center">
                  <h2>Get Started With <span className="text-primary">Thamza</span></h2>
                  <p className="text-muted mt-3">Quisque iaculis urna eu magna semper quis ultrices lectus efficitur
                  Praesent convallis
                  velit urna, vitae tristique tellus feugiat a maecenas diam metus convallis id cursus vel
                            tellus.<br /> Curabitur ullamcorper feugiat convallis.</p>
                  <div className="mt-4 pt-2">
                    <Link to="#" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Request a demo</Link>
                    <Link to="#" className="btn btn-primary btn-round btn-rounded">Get Started Now</Link>
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
