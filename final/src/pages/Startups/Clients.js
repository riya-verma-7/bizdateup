import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Slider from "react-slick";

import Img1 from '../../assets/images/testi-img/img-1.png';
import Img2 from '../../assets/images/testi-img/img-2.png';
import Img3 from '../../assets/images/testi-img/img-3.png';
import Img4 from '../../assets/images/testi-img/img-4.png';
import Client1 from '../../assets/images/clients/1.png';
import Client2 from '../../assets/images/clients/2.png';
import Client3 from '../../assets/images/clients/3.png';
import Client4 from '../../assets/images/clients/4.png';

import HomeUrl from '../../assets/images/home-border.png';



export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Img1,
          name: 'Scalable',
          designation: 'Designer',
          description: 'It is very scalable and can be   very very easy'
        },
        {
          id: 101,
          img: Img2,
          name: 'Samuel Campbell',
          designation: 'Developer',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 103,
          img: Img3,
          name: 'Michelle Stehle',
          designation: 'Manager',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
        {
          id: 104,
          img: Img4,
          name: 'Margaret Lampley',
          designation: 'CEO',
          description: 'The European languages are members of the Same family Their separate existence is a myth For science, music, sport, etc, europe convals d feugiat egdgfet cursus tellus their languages common words.'
        },
      ],
    };
  }
  render() {

    var slidesettings = {
      dots: false,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      dotsClass: "slick-dots slick-thumb carousel-indicators",
      
    };

    const clientslides = this.state.slideitems.map((slideitem, clientkey) => {
      return (
        <div className="carousel-item" key={slideitem.id}>
          <Row className="align-items-center">
            <Col lg="6">
            <div className="text-center mt-4">
                <img src={slideitem.img} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6}> 
              <div className="client-box mt-4">
            <h5 className="line-height_1_6 text-danger">{slideitem.name}</h5>
              <p className="text-primary mb-0">- {slideitem.designation} </p>
                <h3 className="f-18">{slideitem.description} </h3> 
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="section" id="clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Key Features of Startup</h3>  
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Slider {...slidesettings}>
                      {clientslides}
                    </Slider>
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
