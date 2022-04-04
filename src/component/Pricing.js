import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 
import deals from '../pages/Startups/Details';

//import images
import Img1 from '../assets/images/features/joining.png';
import HomeUrl from '../assets/images/home-border.png';
import img from '../assets/images/users/img.jpg' ; 
import details from "../pages/Startups/Details";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing:details
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light bg-features">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>New Startups are joining!</h2>
                  <p className="mt-4 text-muted">BizDateUp has been constantly expanding and upgrading to cater to the needs of new users and startups alike. We're thrilled to share the fact that new startups are getting onboard almost every week! Join the community today and let’s get going on the path to growth.</p>

                  {/* <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section" style={{padding: '100px 0px 0px 0px'}}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Listed startups... </h3>
                  <p className="text-muted f-17 mt-3">
                  Take a look at startups that are up for you to invest, interact and learn with.

                  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
              {/* Render Pricing items */}
              <Row className = "mt-5 pt-4"> 
              {this.state.pricing.map((item, key) => (
                 <Col lg = "4" key={key}>

                 <Link to={`/startup/${item.id}`} className="linkstyle2" style={{textDecoration:'none',color:'inherit'}}>
   
                     <Card className="cardStyle">
                     <div className="startupImg">
   
                       <Card.Img variant="top" src={item.img} />
                       <Button  className=" m-2 btns1" size="sm">New</Button>
                       <Button  className=" m-2 btns2 " size="sm">Private <i class="bi bi-info-circle"></i></Button>
                     </div>
   
                     <Card.Body>
   
   <Row className="d-flex justify-content-center">
   <Col lg={5}>
     <img src={item.img} className="logoImg img-fluid"/>
   </Col>
     <Col lg={7} className="mt-3  ">
     <Card.Title>{item.title}</Card.Title>
     </Col>
    
   </Row>
     <Card.Text>
      { item.shortdescription}
     </Card.Text>
    <div className="">
    <Row className="d-flex">
       <Col lg={8}>
    <p className="text-muted fontsize">PERCENTAGE RAISED</p>
    <span className="extrainfo">34.43%</span>
       </Col>
       <Col lg={4} >
       <p className="text-muted fontsize">CLOSES IN </p>
    <span className="extrainfo">9 Days</span>
       
       </Col>
       {/* <Col lg={4}>
   
       <p className="text-muted fontsize">BACKED UP</p>
    <span className="extrainfo">34.43%</span>
       </Col> */}
     </Row>
    </div>
    <Row className=" d-flex justify-content-start">
   <Col lg={9}>
   
     <div className="mt-3"> 
     {/* <i>Tags:</i> {' '} */}
     
     {item.tag.map(
       (t) => {
         return ( 
           <>
           <Badge  style={{fontSize: '16px', backgroundColor: '#202054'}}>{t}</Badge>
           {' '}
           </>
         ) ; 
       }
     )}
    
     </div>
   </Col>
   <Col lg={3}>
   {/* <button className="ccdbtn mt-3">CCD<i class="bi bi-info-circle"></i> </button> */}
   <Badge className="ccdbtn" style={{marginTop: '1rem'}}>CSOP  <span className="iconinfo">
   <i class="bi bi-info-circle"></i>
   </span></Badge>
   </Col>
    </Row>
    
   </Card.Body>
                      
                     </Card>
                     </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
