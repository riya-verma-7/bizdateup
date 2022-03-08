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
                  
                  <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                       { item.shortdescription }
                      </Card.Text>
                      <div > 
                      <i>Tags:</i> {' '}
                      
                      {item.tag.map(
                        (t) => {
                          return ( 
                            <>
                            <Badge  style={{fontSize: '17px', backgroundColor: '#202054'}}>{t}</Badge>
                            {' '}
                            </>
                          ) ; 
                        }
                      )}
                      <h1></h1>
                      </div>
                      <Link to={`/Deals`} className="btn-block">
                      <Button variant="outline-primary">Invest</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
