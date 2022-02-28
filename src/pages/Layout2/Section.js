import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import images
import HomeUrl from '../../assets/images/home-border.png';
import Typewriter from 'typewriter-effect';

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
        <section className="bg-home" id="home">
          <div className="bg-overlay" style={{backgroundColor: "#ffffff"}}></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={11}>
                    <div className="home-content text-center">
                      {/* <p className="mb-0 text-white">About Us</p> */}
                      {/* <img src={HomeUrl} height="15" alt="" /> */}
                      <h1 className="mt-4 pt-3 home-title text-black"><span className="element text-primary" data-elements="Thamza"><Typewriter
                              options={{
                                strings: ['About Us'],
                                autoStart: true,
                                loop: true,
                              }}
                            /></span></h1>

                      <p className="text-black-50 mt-4 f-20">
                      BizDateUp is a platform where founders, entrepreneurs and working professionals can find and connect with potential co-founders, business associates and like-minded individuals. We created BizDateUp with an idea to build a network of people who’ll share common interests, have their queries answered, and hopefully get the job done. 

But BizDateUp is more than just a business-centric social platform. At the heart of BizDateUp lies a will to become a one-click startup solution hub where brands would be assisted and made to grow at their own pace. We offer services that you might need while running your startup. Mentorship sessions, Legal solutions, Website development, pitch deck, fundraising; you name it. All of it inside an ecosystem, BizDateUp.

                      </p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>
                        <Link to="#" className="video-play-icon text-white" onClick={this.openModal}><i className="mdi mdi-play-circle-outline text-white mr-2"></i>Watch Intro Video</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <ModalVideo
                channel="vimeo"
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
