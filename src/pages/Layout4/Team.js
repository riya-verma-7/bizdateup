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
          name: 'Invest Now',
          description: 'Invest in startups you believe. Learn how the business works and interact with the community as you grow your fortune.'
        },
        {
          id: 2,
          img: Img2,
          name: 'Raise Funds',
          description: 'Get your funds through BizDateUp. Convert your community into capital and get funded'
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
                <p className="text-muted mt-3">{team.description}</p>
                <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      {/* <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link> */}
                      <Button>{team.name}</Button>
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
        <section className="section pt-0" style={{padding: '0px 0px 100px 0px'}}>
          <Container>
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
      </React.Fragment>
    );
  }
}
