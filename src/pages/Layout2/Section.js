import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import images
import HomeUrl from '../../assets/images/home-border.png';
import Typewriter from 'typewriter-effect';



import { Form, Input ,Button} from "reactstrap";



  


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
        <section className="bg-home bg-light " id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-evenly">
                  <Col lg={12} sm={12}>
                    <div className="home-content text-justify">
                      <h1 className="home-title mt-4">About Us<span className="text-primary"></span> </h1>
                      <p className="text-muted mt-4 f-20">BizDateUp is a platform where founders, entrepreneurs and working professionals can find and connect with potential co-founders, business associates and like-minded individuals. We created BizDateUp with an idea to build a network of people who’ll share common interests, have their queries answered, and hopefully get the job done. 

But BizDateUp is more than just a business-centric social platform. At the heart of BizDateUp lies a will to become a one-click startup solution hub where brands would be assisted and made to grow at their own pace. We offer services that you might need while running your startup. Mentorship sessions, Legal solutions, Website development, pitch deck, fundraising; you name it. All of it inside an ecosystem, BizDateUp.</p>
<div className="mt-4 pt-2 text-center">
                        <Link to="/ContactUs" className="btn btn-primary mr-3 ">Contact Us</Link>
                        <Link to="#" className="video-play-icon text-black " onClick={this.openModal}><i className="mdi mdi-play-circle-outline text-white mr-2 "></i>Watch Intro Video</Link>
                      </div>
                      
                    </div>
                  </Col>
                  {/* <Col lg={4} sm={12} className="mt-2 d-flex justify-content-sm-center">
                  <img src="https://images.unsplash.com/photo-1602934585418-f588bea4215c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="img-fluid " />
                  </Col> */}
                </Row>
              </Container>
              <ModalVideo
              channel="youtube"
              isOpen={this.state.isOpen}
              videoId="F3xCT9Oh3JI"
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

