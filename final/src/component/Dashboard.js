import React, { Component } from "react";

import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";

import HomeUrl from "../assets/images/home-border.png";
import Feature from "../assets/images/features/img-3.png";
import NavBar from "./Navbar/NavBar";
import details from "../pages/Startups/Details";

const Terms = () => {
  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <Row>
            {" "}
            <Col lg={12}>
              {" "}
              <div className="title-box text-left">
                {" "}
                <h3 className="title-heading mt-4">Invest Easily with Razorpay</h3>
                <img src={HomeUrl} height="15" className="mt-3" alt="" />{" "}
              </div>{" "}
            </Col>{" "}
          </Row>

          {/* <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ width: "60vw" }}
            className="p-4 text-center mx-auto mt-5"
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Product Name</th>
                <th>Amount of Investment</th>
                <th>Date of Investment</th>
                
              </tr>
            </thead>

            <tbody>
              {details.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>John</td>
                  <td>0123456789</td>
                  <td>{user.title}</td>
                  <td>5000</td>
                  <td>04-03-2001</td>
                 
                </tr>
              ))}
            </tbody>
          </Table> */}

        </Container>
          <form style={{ width: "100px" }}>
            
            <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_J2zsZd8ZRFauM9"> </script> 
            </form>
      </section>
    </React.Fragment>
  );
};

export default Terms;
