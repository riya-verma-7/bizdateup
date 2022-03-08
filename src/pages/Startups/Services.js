import React, { Component } from "react";
import { Col, Container, Row, Badge } from "reactstrap";
import CountUp from 'react-countup';
import Card from 'react-bootstrap/Card' ; 
import Button from 'react-bootstrap/Button' ; 
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import HomeUrl from '../../assets/images/home-border.png';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Startup 1",
          
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          icon: 'mdi-account',
          titlePrimary: false,
          percentageRaised: '$9.99',
          tag: [
            "fintech","blockchain"
          ]
        }
      ],
      
      counters: [
        {
          id: '1',
          extraclass: 'pt-3',
          start: 0,
          end: 1,
          title: "Signup",
          description: 'Create a profile by choosing specific keywords based on what you are looking for'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 0,
          end: 2,
          title: "Matching",
          description: 'Our AI-based algorithm takes in your preferences and finds the ideal match.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 0,
          end: 3,
          title: "Investing",
          description: 'Invest in your favorite startup or as a founder RAISE FUNDS.'
        },
      ],
      services: [
        {
          id: 'service1',
          icon: 'mdi-cash-multiple',
          title: "Raise funds",
          description: 'Your startup has some recurring costs. Get the eyeballs to your business, raise the funds that you’ve always wanted.'
        },
        {
          id: 'service3',
          icon: 'mdi-finance',
          title: "Invest in your favorite startups",
          description: 'You believe a startup is going to be a huge hit. Get yourself a piece of the pie. Invest, Interact, learn'
        },
        {
          id: 'service1',
          icon: 'mdi-cursor-pointer',
          title: "Startup solution platform.",
          description: "Get access to services that you might need while running your startup. Mentorship sessions, Legal solutions"
        },
        {
          id: 'service2',
          icon: 'mdi-wan',
          title: "Build your network",
          description: 'Interact with like-minded individuals while you learn the insights of startups and businesses in general.'
        },
        {
          id: 'service3',
          icon: 'mdi-account-switch',
          title: "Find the perfect Co-Founder",
          description: 'You have an idea. Get your idea to a co-founder who has the strength to put it to work.'
        },
        
      {
          id: 'service2',
          icon: 'mdi-account-group',
          title: "Customer support",
          description: 'Got stuck somewhere in your startup journey? Our Bizdateup executives are there to help.'
        }
       
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  
                  <h3>INTERNKHOJ</h3>
                  
                  <p className="text-uppercase"><div > 
                  <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>Education</Badge>
                  <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>Internship</Badge>
                      </div>
                      
                      </p>
                  <p className="text-muted mt-3">For Users - TELO is an app that allows you to search, discover, register, set-reminders, train for, participate in fitness/running events around you and share achievements with friends & family; For Brands - TELO is a platform to sponsor, monitor, market and derive user reports for their marketing.
</p>
                  <div className="mt-4 pt-1">
                    <Link to="#" className="btn btn-outline-primary">INVEST</Link>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1" style={{border: '1px red', padding: '10px'}}>
              
                <ReactPlayer width = "100%" height = "300px" controls = "true"
                          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                />
                
              </Col>
            </Row>
            
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
