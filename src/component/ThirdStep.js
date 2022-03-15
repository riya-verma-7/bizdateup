import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
// import csc from 'country-state-city';
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../utils/constants";
import { useHistory } from "react-router-dom";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
// import {Multiselselect} from 'multiselect-react-dropdown';
import Select from "react-select";

import Progress from "./Progress";
import { Link } from "react-router-dom";

const ThirdStep = (props) => {
  var [value, getValue] = useState();
  var [valueH, getValueH] = useState();
  const [disable, setdisable] = useState(false);
  const [disableH, setdisableH] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedstartup_age, setSelectedstartup_age] = useState("");
  const [check1, setCheck] = useState();
  const [check2, setCheck2] = useState();
  const [check3, setCheck3] = useState();
  const [check4, setCheck4] = useState();
  const { user } = props;
  let history = useHistory();
  const { register, errors } = useForm({
    defaultValues: {
      description: user.description,
    },
  });

  // let skills = [
  //   {
  //     id: 1 ,
  //     name: 'Cpp',
  //     select: false
  //   },
  //   {
  //     id: 2 ,
  //     name: 'Management',
  //     select: false
  //   },
  //   {
  //     id: 3,
  //     name: 'Development',
  //     select: false
  //   },
  //   {
  //     id: 4 ,
  //     name: 'Frontend',
  //     select: false
  //   },
  //   {
  //     id: 5 ,
  //     name: 'Backend',
  //     select: false
  //   },

  // ];

  let startup_age = [
    {
      id: 1,
      name: "Ideation",
    },
    {
      id: 2,
      name: "launch",
    },
    {
      id: 3,
      name: "Early",
    },
    {
      id: 4,
      name: "Growth",
    },
    {
      id: 5,
      name: "Scale",
    },
  ];

  let skills = [
    {
      value: 1,
      label: "Cpp",
    },
    {
      value: 2,
      label: "Management",
    },
    {
      value: 3,
      label: "Development",
    },
    {
      value: 4,
      label: "Frontend",
    },
    {
      value: 5,
      label: "Backend",
    },
  ];

  useEffect(() => {
    const getstartup_age = async () => {
      try {
        setIsLoading(true);
        // allCountries = result?.map(({ isoCode, name }) => ({
        //   isoCode,
        //   name
        // }));
        const [{ id: first_startup_age } = {}] = startup_age;
        setSelectedstartup_age(first_startup_age);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getstartup_age();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(true);
    console.log(12);
    try {
      const { user } = props;
      let sk = "";
      // console.log(value.length) ;
      // for (var i=0; i< value.length; i++) {
      //   //console.log(value[i]);
      //   sk += skills[value[i]].name + ' ' ;
      // }
      //console.log(sk) ;
      // const updatedData = {
      //   startup_age: startup_age.find(
      //     (startup_age) => {
      //     return (startup_age.id == selectedstartup_age)
      //     }
      //   )?.name,
      //   skill: value,
      //   skillH: valueH
      // };

      console.log(12);
      await axios.post(`${BASE_API_URL}/register`, {
        ...user,
        // ...updatedData
      });

      Swal.fire("Awesome!", "You're successfully registered!", "success").then(
        (result) => {
          if (result.isConfirmed) {
            // props.resetUser();
            props.history.push('/')
            console.log("Signed up")
          }
        }
      );
      // history.push('/')
    } catch (error) {
      console.log(error);
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log("error", error.response.data);
      }
      history.push("/Deals");
    }
  };
  var handleChange1 = (val) => {
    setCheck(val.target.checked);

    console.log(check1);
  };

  var handleChange2 = (val) => {
    setCheck2(val.target.checked);

    console.log(check2);
  };

  var handleChange3 = (val) => {
    setCheck3(val.target.checked);

    console.log(check3);
  };

  var handleChange4 = (val) => {
    setCheck4(val.target.checked);

    console.log(check4);
  };

  const handleChangeH = (val) => {
    getValueH(Array.isArray(val) ? val.map((x) => x.label) : []);
    console.log(val);
  };

  const [options] = useState(skills);

  return (
    <Form className="input-form" onSubmit={handleSubmit}>
      <motion.div
        className="col-md-12 offset-md-1 multi-step-form"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Progress />
        <div style={{ padding: "0.7rem 1.4rem" }}>
          <div>
            <h3>1. Privacy Policy</h3>
            {/* <p>
              Vivamus varius urna id nisi consequat scelerisque. Nullam massa
              mauris, pretium ut erat sit amet, fermentum fermentum augue.
            </p> */}
            <Form.Group controlId="check1">
              {isLoading && <p className="loading">Loading. Please wait...</p>}
              {/* <Form.Label>I Agree to Privacy policy</Form.Label><br/> */}
              <div className="tncContainer">
                <input
                  style={{ marginRight: "1rem" }}
                  type="checkbox"
                  name="check"
                  // placeholder="Password"
                  // value={formValues.password}
                  onChange={handleChange1}
                />{" "}
                <span id="asd">
                  <strong>I Agree to Privacy policy</strong>
                </span>
              </div>
            </Form.Group>
          </div>

          <div>
            <h3>2. Terms of Use</h3>
            {/* <p>
              Suspendisse non venenatis velit. Proin commodo lacinia bibendum.
              Phasellus suscipit lacus in diam accumsan tincidunt.
            </p> */}
            <Form.Group controlId="check2">
              {isLoading && <p className="loading">Loading. Please wait...</p>}
              {/* <Form.Label>I Agree to Terms of use</Form.Label><br/> */}
              <div className="tncContainer">
                <input
                  style={{ marginRight: "1rem" }}
                  type="checkbox"
                  name="check"
                  // placeholder="Password"
                  // value={formValues.password}
                  onChange={handleChange2}
                />{" "}
                <span id="asd">
                  <strong>I Agree to Terms of use</strong>
                </span>
              </div>
            </Form.Group>
          </div>

          <div>
            <h3>3. Risk of Investment</h3>
            {/* <p>
              Aenean vulputate lacinia velit, pulvinar ultricies magna. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
            <Form.Group controlId="check3">
              {isLoading && <p className="loading">Loading. Please wait...</p>}
              {/* <Form.Label>I Agree to Risk in investment</Form.Label><br/> */}
              <div className="tncContainer">
                <input
                  style={{ marginRight: "1rem" }}
                  type="checkbox"
                  name="check"
                  // placeholder="Password"
                  // value={formValues.password}
                  onChange={handleChange3}
                />{" "}
                <span id="asd">
                  <strong>I Agree to Risk in Investment</strong>
                </span>
              </div>
            </Form.Group>
          </div>

          <div>
            <h3>4. Refund Policy</h3>
            {/* <p>
              Morbi sodales justo metus, ut feugiat ipsum condimentum a. Sed
              fermentum ante mattis erat pulvinar volutpat ac molestie eget
              vehicula.
            </p> */}
            <Form.Group controlId="check4">
              {isLoading && <p className="loading">Loading. Please wait...</p>}
              {/* <Form.Label>I Agree to Declaration</Form.Label><br/> */}
              <div className="tncContainer">
                <input
                  style={{ marginRight: "1rem" }}
                  type="checkbox"
                  name="check"
                  // placeholder="Password"
                  // value={formValues.password}
                  onChange={handleChange4}
                />{" "}
                <span id="asd">
                  <strong>I Agree to Refund Policy</strong>
                </span>
              </div>
            </Form.Group>
          </div>

          <Button
            style={{ marginTop: "1.5rem" }}
            variant="primary"
            type="submit"
            disabled={!(check1 && check2 && check3 && check4)}
          >
            Register
          </Button>
        </div>
      </motion.div>
    </Form>
  );
};

export default ThirdStep;
