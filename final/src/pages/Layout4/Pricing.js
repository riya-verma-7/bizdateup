import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 
import details from "../Startups/Details";
//import images
import Img1 from '../../assets/images/features/img-1.png';
import HomeUrl from '../../assets/images/home-border.png';
import img from '../../assets/images/users/img.jpg' ; 

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
        <section className="section" style={{padding: '50px 0px 0px 0px'}}>
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
              <Row className = "mt-5 pt-4" style={{padding: '10px 0px 10px 0px'}}> 
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
