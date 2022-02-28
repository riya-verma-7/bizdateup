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
        <section className="section" style={{padding: '100px 0px 0px 0px'}}>
          <Container>
              {/* Render Pricing items */}
              <Row className = "mt-5 pt-4"> 
              {this.state.pricing.map((item, key) => (
                <Col lg = "4" key={key}>
                  <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                       { item.shortdescription}
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
                      <Button href={`/startup/${item.id}`} variant="outline-primary">Read more</Button>
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
