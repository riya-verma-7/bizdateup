import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import swal from "sweetalert";
import axios from "axios";

const FirstStep = (props) => {
  const [viewPwd, setViewPwd] = useState(false);

  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      user_email: user.user_email,
      user_password: user.user_password,
    },
  });

  // const otp = async (data) => {
  //   const response = await axios.post(
  //     "http://localhost:5000/register",
  //     user.data
  //   )
  //   console.log(response.data.message);

  //   swal({
  //     title: "Enter your OTP",
  //     content:'input',
  //     button: "Validate",
  //   }).then(function(otp) {
  //     if(response.data.otp === otp)
  //     {
  //       swal({
  //         title: "Registration Sucessfull",
  //         icon: `success`,
  //         button: "Okay!!",
  //       }).then(function () {
  //         // window.location = "";
  //       });
  //     }
  //     else
  //     {
  //       swal({
  //         title: "OTP does not match",
  //         icon: `error`,
  //         button: "Okay!!",
  //       })
  //     }

  //   })
  // };

  const onSubmit = (data) => {
    props.updateUser(data);
    console.log(props);
    props.history.push("/second");
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your First name"
            autoComplete="off"
            {...register("first_name", {
              required: "First name is required.",
              message: "First name should contain only characters.",
            })}
            className={`${errors} ? "input-error" : ""`}
          />
          {errors && <p className="errorMsg">{errors}</p>}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your Last name"
            autoComplete="off"
            {...register("last_name", {
              required: "First name is required.",
              message: "First name should contain only characters.",
            })}
            className={`${errors ? "input-error" : ""}`}
          />
          {errors && <p className="errorMsg">{errors}</p>}
        </Form.Group>
        <Form.Group controlId="user_email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
            autoComplete="off"
            {...register("user_email", {
              required: "First name is required.",
              message: "First name should contain only characters.",
            })}
            className={`${errors ? "input-error" : ""}`}
          />
          {errors && <p className="errorMsg">{errors}</p>}
        </Form.Group>

        <Form.Group controlId="user_password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={viewPwd ? "text" : "password"}
            name="user_password"
            placeholder="Choose a Password"
            autoComplete="off"
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
              top: "18.6rem",
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

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default FirstStep;