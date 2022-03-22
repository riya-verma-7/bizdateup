
import React, { Component } from "react";

import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

import HomeUrl from '../assets/images/home-border.png';
import Feature from '../assets/images/features/img-3.png';
import NavBar from './Navbar/NavBar'


const Refundpolicy = () => {
      return (
        <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Refund Policy</h3>
                  <p className="text-muteds f-17 mt-3">
                  Please read this policy carefully. This is the "Return and Refund Policy of Bizdateup Technologies PVT LTD". 



These policies are not applicable to any government funds/grants, venture capital investments, angel investments. Whereas applicable only to crowd funds, donations, small scale investments below  5,00,000INR.
                  
                  
                   </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Company</h3>
                  <p className="text-muteds f-17 mt-3">
                  BizDateUp Technologies Private Limited -  G2 , Empire business centre ,Empire complex ,414 Senapati bapat marg, Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai, Maharashtra 400013</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Investor</h3>
                  <p className="text-muteds f-17 mt-3">
                  Investor refers to a person or entity or their nominees who believe in the company and is/are supporting the company goals, interests and initiatives in the form of monetary donations/investments.
                  
                  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Personal Data

</h3>
                  <p className="text-muteds f-17 mt-3">
                  
                  Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).

The personal data also includes User’s bank account number, Virtual payment addresses, user IDs, passwords, Credit, Debit Card details. 


                  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">INVESTMENTS</h3>
                  <p className="text-muteds f-17 mt-3">
                 
                  We accept Investments digitally through major modes of transactions applicable in Karnataka, India, from Investors interested in supporting the company goals, interests and initiatives. We issue refunds for any errors in digital transactions or if requested/initiated by the Investor themselves at most but within 30 days of time.



We acknowledge within 48 hours of a successful transaction. The acknowledgement will be sent from our authorized contact e-mail after we receive the Investment/donation from the Investor. If not received the acknowledgement mail, the Investor is requested to contact us regarding the same and the issue will be resolved at the earliest. 
                 
                 
                 </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            
            
          </Container>
        </section>
      </React.Fragment>
      ) ; 
}

export default Refundpolicy;