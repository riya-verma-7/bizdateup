import React, { Component } from "react";
import { Container, Row, Col, Form, Label, Input ,Button } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";

//import images
import HomeUrl from '../../assets/images/home-border.png';
import Img from '../../assets/images/features/img-5.png';


class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home bg-light" style={{padding: "125px 0px 20px 0px" }} id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <div className="home-content">
                      {/* <p className="mb-0">Digital Marketing</p> */}
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4"> Invest in startups<br /> you trust.</h1>
                      <p className="text-muted mt-4 f-20">Start investing now so that you can be
part of the next big thing.</p>
                      <div className="mt-4 pt-2">
                        <Link to="/Invest" className="btn btn-primary mr-3">Learn More</Link>
                        <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}>
                          <i className="mdi mdi-play-circle-outline text-dark mr-2"></i>How it works
                          </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="home-img">
                      
                      <img src={Img} className="img-fluid" alt="" />
                    </div>
                  </Col>
                </Row>
              </Container>
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen}
                videoId="99025203"
                onClose={() => this.setState({ isOpen: false })}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
