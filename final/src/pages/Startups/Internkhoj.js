import React, { Component, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Badge,
  Button,
} from "reactstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeUrl from "../../assets/images/home-border.png";

// Importing Section
import Navbar from "../../component/Navbar/NavBar";
import Clients from "./Clients";
import Footer from "../../component/Footer/Footer";
import details from "./Details";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const Content = (props) => {
  const items = [
    // { id: 1, idnm: "home", navheading: "Home" },
    // { id: 3, idnm: "services", navheading: "Services" },
    // { id: 4, idnm: "pricing", navheading: "Pricing" },
    // { id: 5, idnm: "team", navheading: "Team" },
    // { id: 6, idnm: "clients", navheading: "Clients" },
    // { id: 7, idnm: "contact", navheading: "Contact" },
  ];

  const [navItems, setNavItems] = useState(items);
  const [pos, setPos] = useState(document.documentElement.scrollTop);
  const [imglight, setImgLight] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [fixTop, setFixTop] = useState(true);
  

  //number of pages in PDF
  const [numPages, setNumPages] = useState(null);
  
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const ID = '1';
  const startup = details.find((st) => st.id === props.id);
  return (
    <React.Fragment>
     
      <section className="section" style={{padding: '30px 0px 40px 0px'}} id="services">
      <Container>
        <Row className="align-items-center mt-5 pt-4" id="counter" >
          <Col lg={6}>
            <div className="pr-4 mt-4">
              
              <h3>{startup.title}</h3>
              
              <p className="text-uppercase"><div > 
              <Badge style={{fontSize: '17px', marginRight: '10px', backgroundColor: '#202054'}}>{startup.tag[0]}</Badge>
              <Badge style={{fontSize: '17px', marginRight: '10px', backgroundColor: '#202054'}}>{startup.tag[1]}</Badge>
                  </div>
                  
                  </p>
              <p className="text-muted mt-3">
                {startup.description}
</p>
<div className="mt-4 pt-1">
                  <div className="team-social mt-4 pt-2">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <Link
                          to="/Dashboard"
                          className="btn btn-outline-primary"
                          style={{ fontSize: "17px", marginRight: "10px" }}
                        >



                          INVEST
                        </Link>
                      </li>

                      <li className="list-inline-item">
                        <a
                          href={startup.facebook}
                          target="_blank"
                          className="text-reset"
                        >
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={startup.twitter}
                          target="_blank"
                          className="text-reset"
                        >
                          <i className="mdi mdi-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={startup.instagram}
                          target="_blank"
                          className="text-reset"
                        >
                          <i className="mdi mdi-instagram"></i>
                        </a>
                      </li>
                    {/* <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-pinterest"></i></Link>
                    </li> */}
                  </ul>
                </div> 
             
             
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1" style={{padding: '50px 0px 30px 0px'}}>
          
            <ReactPlayer width = "100%" height = "300px" 
            controls = "true" url={startup.youtubelink}
            />
            
          </Col>
        </Row>
        
      </Container>
    </section>
    <section>
   
    </section>
<section className="section" id="pricing" style={{padding: '0px 0px 30px 0px'}}>
<Container>
<Row className="mt-5 pt-4">
             
<Col lg="4" >
                  <div className="pricing-box mt-4">

                  <i className={"h1 mdi " + startup.icon}></i>
                   
                      <h4 className="f-20 text-primary">Team</h4>
                      <h4 className="f-20">{startup.foundername}</h4>
                      <p className="mb-2 f-18">{startup.foundernamerole}</p>
                      
                      <p className="mb-2 f-18">{startup.founderdesc}</p>


                      <h4 className="f-20">{startup.foundername1}</h4>
                      <p className="mb-2 f-18">{startup.foundernamerole1}</p>
                      
                      <p className="mb-2 f-18">{startup.founderdesc1}</p>
                      
                    
                    
                   
                    
                    {/* <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Link to="{item.ins}" className="text-reset"><i className="mdi mdi-facebook"></i></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-twitter"></i></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-google"></i></Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-pinterest"></i></Link>
                    </li>
                  </ul>
                </div> */}
                    {/* <div className="mt-4 pt-3">
                      <Link to="#" className="btn btn-primary btn-rounded">Purchase Now</Link>
                    </div> */}
                  </div>
                </Col><Col lg="4" >
                  <div className="pricing-box mt-4">

                  <i className={"h1 mdi " + startup.icon2}></i>
                   
                      <h4 className="f-20 text-primary">Highlights / Key Features</h4>
                      <p className="mb-2 f-18"></p>
                      
                      {/* <h4 className="f-20">efefefef</h4> */}
                      
                      <div className="mt-4 pt-2">
                        <p className="mb-2"><i
                          className={"mdi " + startup.green + " f-18 mr-2"}></i><b>{startup.keyfeature1}</b></p> 
                          <p className="mb-2"><i
                          className={"mdi " + startup.green + " f-18 mr-2"}></i><b>{startup.keyfeature2}</b></p>
                          <p className="mb-2"><i
                          className={"mdi " + startup.green + " f-18 mr-2"}></i><b>{startup.keyfeature3}</b></p>
                          
                    </div>
                    
                    
                    
                    
                    <div className="pricing-plan mt-4 pt-2">
                    <p className="f-18 mr-2 text-muted">Min Investment<p className="f-18 mr-2"><b>{startup.minimuminvest}</b></p></p>
                    <p className="f-18 mr-2 text-muted">Valuation<p className="mb-2"><b>{startup.valuation
                    }</b></p></p>
                      <p className="f-18 mr-2 text-muted">Target<p className="mb-2"><b>{startup.target}</b></p></p>


                    </div>
                   
                  </div>
                </Col>
                <Col lg="4" >
                  
                  <div className="pricing-box mt-4">
                  <div className="pricing-badge"><span className="badge">Important</span> </div>
                  <i className={"h1 mdi " + startup.icon3}></i>
                   
                      <h4 className="f-20 text-primary">Due Diligence</h4>
                      <p className="mt-4 pt-2 text-muted">A due diligence report is a document prepped by an independent third party due diligence team which includes information related to financials, compliance, key risks and a lot more.


                    </p>
                      
                    <div className="mt-4 pt-2">
                        <p className="mb-2"><i
                          className={"mdi " + startup.due + " f-18 mr-2"}></i> Company Due Dilligence</p> 
                          <p className="mb-2"><i
                          className={"mdi " + startup.due + " f-18 mr-2"}></i> Company Certificates</p>
                          
                          
                    </div>
                    
                    
                    
                    <div className="mt-4 pt-3">
                    <a href ={startup.file} download className="btn btn-primary btn-rounded">Download</a>
                    </div>
                  </div>
                </Col>
           </Row>
            </Container>
            </section>

            <section>
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="title-box text-center">
                    <h3 className="title-heading mt-4">Pitch Deck</h3>
                  </div>
                </Col>
              </Row>
            </Container>
            </section>

            {startup.pitch ? (
        <>
          <div
            id="pdfDocument"
            style={{
              marginBottom: "10rem",
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Document
              file={startup.pitch}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  onLoadSuccess={(page) => {
                    setScale(
                      document.querySelector("#pdfDocument").clientWidth /
                        (page.originalWidth + page.originalWidth / 10)
                    );
                  }}
                  scale={scale}
                  pageNumber={index + 1}
                  style={{ padding: 0 }}
                />
              ))}
            </Document>
          </div>
        </>
      ) : (
        <>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Badge
              href="#startuproblem"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Problem
            </Badge>
            <Badge
              href="#startupsolution"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Solution
            </Badge>
            <Badge
              href="#startupproduct"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Product
            </Badge>
            <Badge
              href="#startuptraction"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Traction
            </Badge>
            <Badge
              href="#startupcustomers"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Customers
            </Badge>
            <Badge
              href="#startupmodel"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Business Model
            </Badge>
            <Badge
              href="#startupcompetition"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Competition
            </Badge>
            <Badge
              href="#startupfundusage"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Usage of funds
            </Badge>
            <Badge
              href="#startupvision"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Vision
            </Badge>
            <Badge
              href="#startupexit"
              style={{
                fontSize: "17px",
                margin: "7px",
                backgroundColor: "#252552",
              }}
            >
              Exit
            </Badge>
          </Container>


{/* <Container>
            <Badge href='/startuproblem' color="info" style={{fontSize: '17px', marginRight: '10px'}}>Problem</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Solution</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Product</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Traction</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Customers</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Business Model</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Competition</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Usage of funds</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Vision</Badge>
            <Badge color="info" style={{fontSize: '17px', marginRight: '10px'}}>Exit</Badge>
   
   </Container>         */}
            
     

            <section className="section" id="contact">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="title-box text-center">
                    <h3 className="title-heading mt-4">Pitch Deck</h3>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    <h3 className="title-heading mt-4" id="startuproblem">
                      Problem
                    </h3>
                    <p className="text-muted f-17 mt-3">{startup.problem}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>
              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupsolution">
                      Solution
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.solution}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupproduct">
                      Product
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.product}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startuptraction">
                      Traction
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.traction}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupcustomers">
                      Customers
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.customers}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>
              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupmodel">
                      Business Model
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">
                      {startup.businessmodel}
                    </p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupcompetition">
                      Competition
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">
                      {startup.competition}
                    </p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupfundusage">
                      Usage Of Funds
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.fundsusage}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupvision">
                      Vision
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.vision}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>

              <Row>
                {" "}
                <Col lg={12}>
                  {" "}
                  <div className="title-box text-left">
                    {" "}
                    <h3 className="title-heading mt-4" id="startupexit">
                      Exit
                    </h3>{" "}
                    <p className="text-muted f-17 mt-3">{startup.exit}</p>{" "}
                    <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
                  </div>{" "}
                </Col>{" "}
              </Row>
            </Container>
          </section>
        </>
      )}
    </React.Fragment>
  );
};

const Startups = ({ match }) => {


  return (
    <React.Fragment>
{/*       
      <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          /> */}
      <Content id={match.params.id} />

    
      {/* Importing Clients */}
      {/* <Clients /> */}
      {/* Importing Footer */}
      <Footer />
    </React.Fragment>
  );
};
export default Startups;
