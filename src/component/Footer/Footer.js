import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Input } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

import LogoDark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Important",
          child: [
            { title: "Invest", link: "/Invest" },
            { title: "Raise Funds", link: "#" },
            { title: "Match", link: "/Match" },
            { title: "About Us", link: "/About" },
          ],
        },
        {
          id: 2,
          title: "Company",
          child: [
            { title: "Contact", link: "/ContactUs" },
            { title: "Privacy Policy", link: "/Privacy" },
            { title: "Risk of Investment", link: "/Risk" },
            { title: "Terms of use", link: "/Terms" },
            { title: "Refund Policy", link: "/Refundpolicy" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer className="section bg-light bg-footer pb-5">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="footer-info mt-4">
                  <img src={LogoDark} alt="" height="40" />
                  <p className="text-muted mt-4 mb-2">
                    One-stop platform for Startups to connect with a Co-founder,
                    Raise funds and Invest in your favorite startups.
                  </p>
                  <div className="team-social mt-4 pt-2">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/bizdateup/"
                          target="_blank"
                          className="text-reset"
                        >
                          <i className="mdi mdi-instagram"></i>
                        </a>
                      </li>{" "}
                      <li className="list-inline-item">
                        <a
                          href="https://www.facebook.com/bizdateupindia"
                          target="_blank"
                          className="text-reset"
                        >
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>{" "}
                      <li className="list-inline-item">
                        <a
                          href="https://in.linkedin.com/company/bizdateup"
                          target="_blank"
                          className="text-reset"
                        >
                          <i className="mdi mdi-linkedin"></i>
                        </a>
                      </li>{" "}
                      <li className="list-inline-item">
                        <a
                          href="https://twitter.com/date_biz"
                          target="_blank"
                          className="text-reset" >
                          <i className="mdi mdi-twitter"></i>
                        </a>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <Row className="pl-0 md-lg-5">
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col lg={6} key={key}>
                      <div className="mt-4">
                        <h5 className="f-20">{item.title}</h5>
                        <ul className="list-unstyled footer-link mt-3">
                          {item.child.map((linkItem, key) => (
                            <li key={key}>
                              <Link to={linkItem.link}>{linkItem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={4}>
                <div className="mt-4">
                  <h5 className="f-20">Subscribe</h5>
                  <div className="subscribe mt-4 pt-1">
                    <Form action="#">
                      <Input
                        placeholder="Enter Email"
                        type="text"
                        style={{ height: "auto" }}
                      />
                      <Button color="primary" className="btn btn-primary">
                        <i className="mdi mdi-send"></i>
                      </Button>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
            <hr className="my-5" />
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;