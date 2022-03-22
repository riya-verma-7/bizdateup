import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { UserContext } from "../App";
import { useHistory, Link } from "react-router-dom";
import Deal from "../pages/Deals";
import "../assets/css/style.css";


import Navbar from "../component/Navbar/NavBar";

const Login = () => {

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

  const { state, dispatch } = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [viewPwd, setViewPwd] = useState(false);
  let history = useHistory();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(`${BASE_API_URL}/login`, data);
      dispatch({ type: "user", payload: true });
      history.push("/Deals");
      setSuccessMessage("User with the provided credentials found.");
      localStorage.setItem('loggedIn', true);
      setErrorMessage("");
      setUserDetails(response.data);
    } catch (error) {
      // console.log(error);
      if (error.response) {
        console.log("error", error.response.data);
        setErrorMessage(error.response.data);
      }
      localStorage.setItem('loggedIn', false);
    }
  };

  return (
    <div>
      <Navbar
            navItems={navItems}
            navClass={navClass}
            imglight={imglight}
            top={fixTop}
          />
      <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      
      <div
        style={{ paddingBottom: "2.2rem", marginTop: "7.5rem" }}
        className="col-md-6 offset-md-3 multi-step-form"
      >
        {errorMessage ? (
          <p className="errorMsg login-error">{errorMessage}</p>
        ) : (
          <div>
            <p className="successMsg">{successMessage}</p>
            {/* {history.push('/Deals')} */}
            {/* {userDetails && (
              <div className="user-details">
                <p>Following are the user details:</p>
                <div>First name: {userDetails.first_name}</div>
                <div>Last name: {userDetails.last_name}</div>
                <div>Email: {userDetails.user_email}</div>
                <div>Country: {userDetails.country}</div>
                <div>State: {userDetails.state}</div>
                <div>City: {userDetails.city}</div>
              </div>
            )} */}
          </div>
        )}
        <h1 className="multi-step-heading">Login</h1>
        <Form.Group controlId="first_name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter registered Email "
            {...register('user_email',{required: "First name is required.", message :"First name should contain only characters." })}
            className={`${errors ? "input-error" : ""}`}
          />
          {errors && (
            <p className="errorMsg">{errors}</p>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            
            type={viewPwd ? "text" : "password"}
            name="user_password"
            placeholder="Enter your password"
            {...register("user_password", {
              required: "First name is required.",
              message: "First name should contain only characters.",
            })}
            className={`${errors ? "input-error" : ""}`}
          />
           <div
            style={{
              position: "absolute",
              right: "1.4rem",
              top: "13.4rem",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            <i
              onClick={() => {
                setViewPwd(!viewPwd);
              }}
              className={`fa ${viewPwd ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>
          {errors && <p className="errorMsg">{errors}</p>}
        </Form.Group>

        

        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
        <div>
        <p
          style={{ fontSize: "15px", textAlign: "center", marginTop: "25px" }}
        >
          Don't have an account yet?{" "}
          <span>
            <Link
              to="/SignUp"
              style={{
                textDecoration: "none",
                color: "#202054",
              }}
            >
              <strong>Sign Up</strong>
            </Link>
          </span>
        </p>
        <p
          style={{ fontSize: "15px", textAlign: "center", marginTop: "25px" }}
        >
          Forgot Password?{" "}
          <span>
            <Link
              
              style={{
                textDecoration: "none",
                color: "#202054",
              }}
            >
              <strong>Click Here</strong>
            </Link>
          </span>
        </p>
        </div>
        
      </div>
    </Form>
    </div>
    
  );
};

export default Login;
