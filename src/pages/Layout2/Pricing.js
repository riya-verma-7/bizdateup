import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 
import "./responsive.css"

//import images
import Img1 from '../../assets/images/features/jeet.png';
// import Img2 from '../../assets/images/features/meet.png';
import Img2 from '../../assets/images/features/meet2.png';
import HomeUrl from '../../assets/images/home-border.png';
import img from '../../assets/images/users/img-1.png' ; 

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Starter",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account',
          titlePrimary: false,
          percentageRaised: '30',
          tag: [
            "fintech","blockchain"
          ],
        },

        {
          id: 2,
          title: "Personal",
          img: img,
          titlePrimary: true,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account-multiple text-primary',
          percentageRaised: '20', 
          pricingTag: true,
          tag: [
            "fintech","blockchain"
          ],
        },
        {
          id: 3,
          title: "Ultimate",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
          percentageRaised: '20', 
          pricingTag: false,
          tag: [
            "fintech","blockchain","fintech","blockchain","fintech","blockchain",
          ],
        },
      ],
    };
  }

  render() {
// for styling the founders box
    const cardBox={
backgroundColor:'#e9ecef80',
margin:' 30px auto 20px auto',
      boxShadow:'0 5px 10px 2px rgba(0,0,0,0.25) ',
      padding:'20px',
      borderRadius:'15px'
    }
    // for styling the images of founder
    const founderImg={
     display:'block'
    }
    return (
      <React.Fragment>
        <section className="section bg-light" style={{padding: '80px 0px 50px 0px'}}>
          <Container>
            <Row className="align-items-center  " style={cardBox}>
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid " alt=""  style={founderImg} />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4" style={{textAlign: 'justify'}}>
                  <h2 className=" centerResponsive">Jeet Chandan</h2>
                  <h3 className="centerResponsive ">Founder</h3>
                  <p className="mt-4 text-muted">The brain behind BizDateUp, Jeet M Chandan wanted to know the insights of running a business from a very young age. Always excited to dig deep, find the problem and knock it off with a solution is what Jeet is known for. Thus, this serial entrepreneur built BizDateUp to collect all those issues, tackle them with resilience and frame an environment that emphasizes heavily the drive to provide value to startups in general. </p>

                  
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section style={{
          margin: "50px"
        }}></section> */}
        {/* style={{borderRadius: "0px 0px 0px 350px"}} */}
        <section className="section bg-light" style={{padding: '80px 0px 50px 0px'}}>
          <Container>
            <Row className="align-items-center " style={cardBox}>
            <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img2} className="img-fluid" alt="" style={founderImg}  />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4" style={{textAlign: 'justify'}}>
                  <h2 className="centerResponsive">Meet Jain</h2>
                  <h3 className="centerResponsive">Co-founder & CEO</h3>
                  <p className="mt-4 text-muted">The shoulder to rely on, Meet Jain is known for getting the thoughts out of the canvas and putting in the actual work. With his life revolving around startups and brand building, this entrepreneur has what it takes to never let the team down and always bring something new to the table. And so, he’s been looking over the whole crew by making sure the boat stays afloat.</p>

                  
                </div>
              </Col>
              
            </Row>
          </Container>
          </section>
      </React.Fragment>
    );
  }
}
