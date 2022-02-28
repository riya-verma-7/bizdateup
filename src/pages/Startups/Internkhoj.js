import React, { Component } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row, Badge, Button} from "reactstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeUrl from '../../assets/images/home-border.png';


// Importing Section
import Navbar from "../../component/Navbar/NavBar";
import Clients from "./Clients";
import Footer from "../../component/Footer/Footer";
import details from "./Details";

const Content = (props) => {
  // const ID = '1';
  const startup = details.find(
    (st) => (
      st.id === props.id
      )
  )
  return (
    <React.Fragment>
      <section className="section bg-services" id="services">
      <Container>
        <Row className="align-items-center mt-5 pt-4" id="counter">
          <Col lg={6}>
            <div className="pr-4 mt-4">
              
              <h3>{startup.title}</h3>
              
              <p className="text-uppercase"><div > 
              <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>{startup.tag[0]}</Badge>
              <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>{startup.tag[1]}</Badge>
                  </div>
                  
                  </p>
              <p className="text-muted mt-3">
                {startup.description}
</p>
              <div className="mt-4 pt-1">
                <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                    <Link to="" className="btn btn-outline-primary" style={{fontSize: '17px', marginRight: '10px'}}>INVEST</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link>
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
                </div> 
             
             
              </div>
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1" style={{border: '1px red', padding: '10px'}}>
          
            <ReactPlayer width = "100%" height = "300px" 
            controls = "true" url={startup.youtubelink}
            />
            
          </Col>
        </Row>
        
      </Container>
    </section>
   

<section className="section" id="pricing">
<Container>
<Row className="mt-5 pt-4">
             
<Col lg="4" >
                  <div className="pricing-box mt-4">

                  <i className={"h1 mdi " + startup.icon}></i>
                   
                      <h4 className="f-20 text-primary">Team</h4>
                      <p className="mb-2 f-18">Founder</p>
                      
                      <h4 className="f-20">{startup.foundername}</h4>
                      <p className="mb-2 f-18">Hie I am the founder of the website and Internkhoj is the website</p>
                      <p className="mb-2 f-18">Founder</p>
                      
                      <h4 className="f-20">{startup.foundername}</h4>
                      <p className="mb-2 f-18">Hie I am the founder of the website and Internkhoj is the website</p>
                      
                    
                    
                   
                    
                    <div className="team-social mt-4 pt-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link>
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
                </div>
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
                      <Link to="#" className="btn btn-primary btn-rounded">Download</Link>
                    </div>
                  </div>
                </Col>
           </Row>
            </Container>
            </section>

<Container>
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
   
   </Container>        
            
     

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
      <Row> <Col lg={12}> <div className="title-box text-left"> 
      <h3 className="title-heading mt-4" id='startuproblem'>Problem</h3> 
      <p className="text-muted f-17 mt-3">
      
      {startup.problem}
       </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>
        <Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
            Solution
        </h3> <p className="text-muted f-17 mt-3">
        {startup.solution}

 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Product
</h3> <p className="text-muted f-17 mt-3">
{startup.product}


</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Traction 
</h3> <p className="text-muted f-17 mt-3">
{startup.traction}
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Customers 
</h3> <p className="text-muted f-17 mt-3">
{startup.customers}
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>
<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Business Model

</h3> <p className="text-muted f-17 mt-3">
{startup.businessmodel}
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Competition


</h3> <p className="text-muted f-17 mt-3">
{startup.competition}

</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>


<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Usage Of Funds


</h3> <p className="text-muted f-17 mt-3">
{startup.fundsusage}

</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Vision 


</h3> <p className="text-muted f-17 mt-3">
{startup.vision}

</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Exit 


</h3> <p className="text-muted f-17 mt-3">
{startup.exit}


</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>


      </Container>
    </section>
  </React.Fragment>
  ) ; 
}



const Startups = ({match}) => {
    
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Content id={match.params.id} />
          {/* Importing Clients */}
          {/* <Clients /> */}

          {/* Importing Footer */}
          <Footer />

      </React.Fragment>
    );
  }
export default Startups;
