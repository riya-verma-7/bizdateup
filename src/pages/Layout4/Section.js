import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Background1 from '../../assets/images/bg-1.jpg';
import Background2 from '../../assets/images/bg-2.jpg';
import Background3 from '../../assets/images/bg-3.jpg';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <React.Fragment>
      <Link className="carousel-control-next" to="#" role="button" data-slide="next" onClick={onClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </Link>
    </React.Fragment>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <React.Fragment>
      <Link className="carousel-control-prev" to="#" role="button" data-slide="prev" onClick={onClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Link>
    </React.Fragment>
  );
}

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Background2,
          butn: 'Invest Now',
          title:'Invest in startups you trust',
          desc: 'Start with as low as Rs. 1000 and help those startups to stay in the game. Own a share, Interact with the community and build your portfolio.'
        },
        {
          id: 101,
          img: Background1,
          butn: 'Raise Funds',
          title: 'Convert your circle into a crowd that cheers you up!',
          desc: 'Use the customer base to fuel the wagon. Get funded without failing. Apply now and let the crowd do the magic'
        },
      ],
    };
  }

  render() {
    var settings = {
      autoplay: true,
      dots: false,
      speed: 300,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    const slides = this.state.slideitems.map((item, key) => {
      return (
        <div className="carousel-item" key={key}>
          <div style={{ backgroundImage: `url(${item.img})`, backgroundPosition: 'center center', backgroundSize: 'cover', height: '100vh' }}>
            <div className="bg-overlay"></div>
            <div className="home-center">
              <div className="home-desc-center">
                <Container>
                  <Row className="align-items-center justify-content-center">
                    <Col lg="10">
                      <div className="home-content text-center text-white">
                        <h1 className="home-title">{item.title}</h1>
                        <p className="text-white-50 mt-4 f-20">{item.desc}</p>
                        <div className="mt-5">
                          <div className="mt-4 pt-2">
                            <Link to="#" className="btn btn-primary btn-rounded mr-3">{item.butn}</Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="home-slider" id="home">
          <Container fluid>
            <Row>
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <Slider {...settings}>
                    {slides}
                  </Slider>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
