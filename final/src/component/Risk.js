
import React, { Component } from "react";

import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

import HomeUrl from '../assets/images/home-border.png';
import Feature from '../assets/images/features/img-3.png';
import NavBar from './Navbar/NavBar'


const Risk = () => {
      return (
        <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Loss of Capital</h3>
                  <p className="text-muted f-17 mt-3">
                  Investments in startups/early-stage ventures (“Companies”) bear an inherent risk of not assuring full-fledged profits or returns from the investments, since these companies may not have a business model or established concept which can be used as a reference for 100% success. It is for this reason that it is generally recommended to create a diversified portfolio of investments, which will have the potential to deliver gains and absorb capital losses in the aggregate.
                  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Lack of Liquidity
</h3>
                  <p className="text-muted f-17 mt-3">
                  Liquidity refers to equity shares that can be sold with ease. However, equity investments in the Companies are highly illiquid as the shares of such Companies are unlisted/private and cannot be sold easily on an exchange or similar secondary trading platform. </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Rarity of Dividends</h3>
                  <p className="text-muted f-17 mt-3">
                  The Companies may most likely be unable to pay any dividend throughout the life cycle of an investment. Therefore, in order for you to earn a return out of any of your investments, you will have to go through a further sale or such other similar process for which a time frame cannot be ascertained.  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Dilution</h3>
                  <p className="text-muted f-17 mt-3">
                  The Companies may raise additional capital in the future and therefore, your shareholding may be diluted, as a result of such issue of new shares.  </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Performance</h3>
                  <p className="text-muted f-17 mt-3">
                  The Company’s forward-looking statements, containing opinions and beliefs, are based on a number of estimates and assumptions that are subject to significant business, economic, regulatory, and competitive uncertainties. Though these statements can be used for understanding the objectives and goals of the Companies, such statements should not be considered as undertakings from the Companies and should be considered as merely being speculative and having subjective nature. </p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
           
            <Row>
              <Col lg={12}>
                <div className="title-box text-left">
                  <h3 className="title-heading mt-4">Tax</h3>
                  <p className="text-muted f-17 mt-3">
                  You may be liable to pay taxes on any dividends or gains you receive from your investments in the Company and payment of such taxes is entirely your responsibility. Therefore, you should consult your tax advisor for more information on these matters.
                 
                  
                  For the avoidance of doubt, in light of your acknowledgment of the above risk factors, you agree and acknowledge that you shall hold Tyke harmless and shall not raise any claim in respect of any of the above.
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

export default Risk;