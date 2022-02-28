import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 
import deals from '../pages/Startups/Details';

//import images
import Img1 from '../assets/images/features/img-1.png';
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
                  <p className="mt-4 text-muted">Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
                  augue in rhoncus Integer mattis enim vel eros bibendum egestas id laoreet nisi
                  Praesent malesuada eros at bibendum eleifend Nam nec urna hendrerit interdum risus
                  Donec faucibus quis magna sit amet laoreet Maecenas finibus semper massa in finibus est
                            venenatis quis.</p>

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
                    here all all the startups
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
                            <Badge color="success" style={{fontSize: '17px'}}>{t}</Badge>
                            {' '}
                            </>
                          ) ; 
                        }
                      )}
                      <h1></h1>
                      </div>
                      <Link to={`/Deals`} className="btn-block">
                      <Button variant="outline-primary">Read more</Button>
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
