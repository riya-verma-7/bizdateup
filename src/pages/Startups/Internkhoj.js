import React, { Component, useState } from "react";
import { Container, FormGroup, Input, Label, Badge, Button } from "reactstrap";
import { Modal, Row, Col, Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import HomeUrl from "../../assets/images/home-border.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import Swal from 'sweetalert2';
// import { BASE_API_URL } from "../utils/constants";

//for modal window 
import "./internkhoj.css"

// Importing Section
import Navbar from "../../component/Navbar/NavBar";
import Clients from "./Clients";
import Footer from "../../component/Footer/Footer";
import details from "./Details";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const Content = (props) => {

  function loadScript(src){
    return new Promise((resolve) =>{
        const script = document.createElement("script");
        script.src= src;
        script.onload = ()=>{
          resolve(true)
        }
        script.onerror = () =>{
          resolve(false)
        }

        document.body.appendChild(script)
    })
  }

  async function displayRazorpay(totalAmount){
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        )

        if(!res){
          alert("Razorpay SDK failed to load. Are you online?")
          return
        }

        const result = await axios.post("https://bizzdateupjs.herokuapp.com/payOnline", {totalAmount:totalAmount})

        if(!result){
          alert("Server error. Are you online?")
          return
        }

        const {amount , id:order_id, currency} = result.data

        const options = {
            key : "rzp_live_bM1HglWh7fuTPR",
            amount : amount.toString(),
            currency: currency,
            // name : "",
            description: "Investing Amount",
            order_id: order_id,
            handler: async function (response){
              const data = {
                orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
              }

              const result = await axios.post("https://bizzdateupjs.herokuapp.com/payOnline", data);
              console.log(result.data);
            },

           
            theme: {
              color: "black",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
  }

  const { register, handleSubmit, reset } = useForm();
  // const [searchParams, setSearchParams] = useSearchParams();
  

  const Submit = async(data) => {
    if(data.amount<5000)
    {
      alert("Minimum amount should be Rs.5000")
    }
   
    else{
      console.log(data)
      const response = await axios.post("https://bizzdateupjs.herokuapp.com/invest", data)
      console.log(response.data)
      
      Swal.fire({
        showDenyButton: true,
        confirmButtonText: "Pay Now",
        denyButtonText: `Edit Details`,
        buttonsStyling: false,
  customClass: {
    confirmButton: 'sweet-alert-button',
    denyButton:'sweet-alert-button'

  },
        html: `<div class = " w-96 mx-auto text-center mt-5 mb-3">
        <table id="table"  class="mx-auto text-center tablelayout">
        <thead class="headerlayout">
            <tr>
                <th>Particulars</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Investment Amount</td>
                <td>&#8377 ${data.amount}</td>
            </tr>
            <tr>
                <td>Convenience Fee (2%)</td>
                <td>&#8377 ${response.data.convenienceFees}</td>
               
            </tr>
            <tr>
                <td>GST (18%) </td>
                <td>&#8377 ${response.data.gst}</td>
                
            </tr>
            <tr>
                <td>TDS (10%) </td>
                <td>&#8377 ${response.data.tds}</td>
                
            </tr>
            <tr>
                <td>Total </td>
                <td>&#8377  ${response.data.totalAmount}</td>
                
            </tr>
</tbody>
</table>

<div class="mt-4 fontbold">
<span class="totalamount">
AMOUNT TO BE PAID
</span> : &#8377 ${response.data.totalAmount}
</div>

        <hr>
        
        </div>`,
        button: "Confirm!",
      }).then((result)=>{
          if(result.isConfirmed){
            displayRazorpay(response.data.totalAmount)
            setModalShow(false)
            reset()
          }
          else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
          
      })
      

  }
   
  }

 
  const startup = details.find((st) => st.id === props.id);
  function MyVerticallyCenteredModal(props) {
    
    return (
    
     
     <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter " className="titlestyle">
            Enter Details
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit = {handleSubmit(Submit)}>
            <Row>
              
              <Col>
                <Form.Group className="mb-3" controlId="productId">
                  <Form.Label>Product Id : </Form.Label>
                  <Form.Control
                    type="number"
                    value = {startup.id}
                    placeholder="Product Id"
                   name = "productId"
                   {...register('productId',{required:true})}
                   readOnly
                  />
                </Form.Group>
              </Col>
           </Row>
           <Row>
              <Col>
                <Form.Group className="mb-3" controlId="productName">
                  <Form.Label>Product Name : </Form.Label>
                  <Form.Control
                    type="text"
                    value = {startup.title}
                    placeholder="Product Name"
                   name = "productName"
                   {...register('productName',{required:true})} 
                   readOnly
                  />
                </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col>
                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label >Amount : </Form.Label>
                  <Form.Control
                  className="inputstyle"
                    type="number"
                    placeholder="Enter amount"
                   name = "amount"
                   {...register('amount',{required:true})}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Modal.Footer>
              <Button className="btn btn-block btn-rounded submitbtn" type = "submit" >
                SUBMIT
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

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
  const [modalShow, setModalShow] = useState(false);

  //number of pages in PDF
  const [numPages, setNumPages] = useState(null);

  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const ID = '1';
  // const startup = details.find((st) => st.id === props.id);
  return (
    <React.Fragment>
      <section
        className="section"
        style={{ padding: "30px 0px 40px 0px" }}
        id="services"
      >
        <Container>
          <Row className="align-items-center mt-5 pt-4" id="counter">
            <Col lg={6}>
              <div className="pr-4 mt-4">
                <h3>{startup.title}</h3>

                <p className="text-uppercase">
                  <div>
                    <Badge
                      style={{
                        fontSize: "17px",
                        marginRight: "10px",
                        backgroundColor: "#202054",
                      }}
                    >
                      {startup.tag[0]}
                    </Badge>
                    <Badge
                      style={{
                        fontSize: "17px",
                        marginRight: "10px",
                        backgroundColor: "#202054",
                      }}
                    >
                      {startup.tag[1]}
                    </Badge>
                  </div>
                </p>
                <p className="text-muted mt-3">{startup.description}</p>
                <div className="mt-4 pt-1">
                  <div className="team-social mt-4 pt-2">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <Link
                          onClick={() => setModalShow(true)}
                          className="btn btn-outline-primary"
                          style={{ fontSize: "17px", marginRight: "10px" }}
                        >
                          INVEST
                        </Link>

                        <>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </>
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
            <Col
              lg={5}
              className="offset-lg-1"
              style={{ padding: "50px 0px 30px 0px" }}
            >
              <ReactPlayer
                width="100%"
                height="300px"
                controls="true"
                url={startup.youtubelink}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section></section>
      <section
        className="section"
        id="pricing"
        style={{ padding: "0px 0px 30px 0px" }}
      >
        <Container>
          <Row className="mt-5 pt-4">
            <Col lg="4">
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
            </Col>
            <Col lg="4">
              <div className="pricing-box mt-4">
                <i className={"h1 mdi " + startup.icon2}></i>

                <h4 className="f-20 text-primary">Highlights / Key Features</h4>
                <p className="mb-2 f-18"></p>

                {/* <h4 className="f-20">efefefef</h4> */}

                <div className="mt-4 pt-2">
                  <p className="mb-2">
                    <i className={"mdi " + startup.green + " f-18 mr-2"}></i>
                    <b>{startup.keyfeature1}</b>
                  </p>
                  <p className="mb-2">
                    <i className={"mdi " + startup.green + " f-18 mr-2"}></i>
                    <b>{startup.keyfeature2}</b>
                  </p>
                  <p className="mb-2">
                    <i className={"mdi " + startup.green + " f-18 mr-2"}></i>
                    <b>{startup.keyfeature3}</b>
                  </p>
                </div>

                <div className="pricing-plan mt-4 pt-2">
                  <p className="f-18 mr-2 text-muted">
                    Min Investment
                    <p className="f-18 mr-2">
                      <b>{startup.minimuminvest}</b>
                    </p>
                  </p>
                  <p className="f-18 mr-2 text-muted">
                    Valuation
                    <p className="mb-2">
                      <b>{startup.valuation}</b>
                    </p>
                  </p>
                  <p className="f-18 mr-2 text-muted">
                    Target
                    <p className="mb-2">
                      <b>{startup.target}</b>
                    </p>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="pricing-box mt-4">
                <div className="pricing-badge">
                  <span className="badge">Important</span>{" "}
                </div>
                <i className={"h1 mdi " + startup.icon3}></i>

                <h4 className="f-20 text-primary">Due Diligence</h4>
                <p className="mt-4 pt-2 text-muted">
                  A due diligence report is a document prepped by an independent
                  third party due diligence team which includes information
                  related to financials, compliance, key risks and a lot more.
                </p>

                <div className="mt-4 pt-2">
                  <p className="mb-2">
                    <i className={"mdi " + startup.due + " f-18 mr-2"}></i>{" "}
                    Company Due Dilligence
                  </p>
                  <p className="mb-2">
                    <i className={"mdi " + startup.due + " f-18 mr-2"}></i>{" "}
                    Company Certificates
                  </p>
                </div>

                <div className="mt-4 pt-3">
                  <a
                    href={startup.file}
                    download
                    className="btn btn-primary btn-rounded"
                  >
                    Download
                  </a>
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
