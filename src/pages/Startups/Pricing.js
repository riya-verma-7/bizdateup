import React, { Component } from "react";
import { Col, Container, Row, Badge} from "reactstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 

//import images
import Img1 from '../../assets/images/features/img-1.png';
import HomeUrl from '../../assets/images/home-border.png';
import img from '../../assets/images/users/img.jpg' ; 

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Startup 1",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account',
          titlePrimary: false,
          percentageRaised: '$9.99',
          tag: [
            "fintech","blockchain"
          ],
        },
        {
          id: 2,
          title: "Startup 2",
          img: img,
          titlePrimary: true,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account-multiple text-primary',
          percentageRaised: '20', 
          tag: [
            "fintech","blockchain"
          ],
        },
        {
          id: 3,
          title: "Startup 3",
          img: img,
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
          percentageRaised: '20', 
          tag: [
            "fintech","blockchain",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        
        <section className="section" style={{padding: '100px 0px 0px 0px'}}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Listed startups... </h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris
                            sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
              {/* Render Pricing items */}
              <Row className = "mt-5 pt-4"> 
              {this.state.pricing.map((item, key) => (
                <Col lg = "4" key={key}>
                  {/* <div className="pricing-box mt-4">
                    {item.pricingTag && (
                      <div className="pricing-badge"><span className="badge">Featured</span> </div>
                    )}

                    <i className={"h1 mdi " + item.icon}></i>
                    {(item.titlePrimary === true) ?
                      <h4 className="f-20 text-primary">{item.title}</h4>
                      :
                      <h4 className="f-20">{item.title}</h4>
                    }

                    <div className="mt-4 pt-2">
                      <p className="mb-2 f-18">Features</p>
                      {item.child.map((linkItem, linkkey) => (
                        <p className="mb-2" key={linkkey}><i
                          className={"mdi " + linkItem.icon + " f-18 mr-2"}></i><b>{linkItem.btitle}</b> {linkItem.title}</p>
                      ))}
                    </div>
                    <p className="mt-4 pt-2 text-muted">{item.description}
                    </p>
                    <div className="pricing-plan mt-4 pt-2">
                      <h4 className="text-muted"><s> {item.regularprice}</s> <span className="plan pl-3 text-dark">{item.saleprice}</span></h4>
                      <p className="text-muted mb-0">Per Month</p>
                    </div>
                    <div className="mt-4 pt-3">
                      <Link to="#" className="btn btn-primary btn-rounded">Read More</Link>
                    </div>
                  </div> */}
                  <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                       { item.description }
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
                      <Button variant="outline-primary">Read more</Button>
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
