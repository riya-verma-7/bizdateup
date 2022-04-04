import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 

//import images
import Img1 from '../assets/images/features/img-1.png';
import HomeUrl from '../assets/images/home-border.png';
import img from '../assets/images/users/img.jpg' ; 
import details from '../pages/Startups/Details' ; 

import "../assets/css/style.css";

export default class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: details
    };
    console.log(this.state.pricing) ;               
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" style={{padding: '50px 0px 0px 0px'}}>
          <Container>
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
  <img src={item.logo} className="logoImg img-fluid"/>
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
