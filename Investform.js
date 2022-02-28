import { useState, useEffect } from "react";
// import "../../src/Investstyle.css";
import Select from "react-select";
import {Form, Button} from 'react-bootstrap';
function Investform() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  var [valueH, getValueH] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedstartup_age, setSelectedstartup_age] = useState('');
  

  const choose=[
    {
      value: 1,
      label: 'Yes', 

    },
    {
      value: 2,
      label: 'No',
    },
  ]

  let startup_age = [
    {
      value: 1 ,
      label: 'Ideation'
    },
    {
      value: 2 ,
      label: 'launch'
    },
    {
      value: 3,
      label: 'Early'
    },
    {
      value: 4 ,
      label: 'Growth'
    },
    {
      value: 5 ,
      label: 'Scale'
    },

  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleChangeO = val => {
    getValueH(Array.isArray(val)?val.map(x=>x.label):[]) ;
    console.log(val) ;
  };

  const handleChangeS = val => {
    getValueH(Array.isArray(val)?val.map(x=>x.label):[]) ;
    console.log(val) ;
  };
  let formData = new FormData();
  const FileChange = (e) =>{
      if (e.target && e.target.files[0]){
        formData.append('file', e.target.files[0]);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <Form className="input-form" onSubmit={handleSubmit}>
        <h1 className="head1">Investors Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <Form.Label>Hello, what's the name of your Startup/company?</Form.Label>
            
            <Form.Control
            type="text"
            name="username"
            placeholder="Startup name" 
            value={formValues.username}
            onChange={handleChange}
            />
            {/* <input
              type="text"
              name="username"
              placeholder="Startup name" 
              value={formValues.username}
              onChange={handleChange}
            />
            </Form.Control> */}
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="Text"
              name="contact"
              placeholder="contact no"
              value={formValues.contact}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          
          <div className="field">
            <Form.Label>Where is your company based?</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City name"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <Form.Label>How much funds are you looking to raise ? </Form.Label>
            <Form.Control
              type="text"
              name="funds"
              placeholder="Target must be more than 1000"
              value={formValues.funds}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <Form.Label>Have you raised funds before ?</Form.Label>
            <Select options={choose} className="Msel" onChange={handleChangeO}></Select>
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <Form.Label>How is your company doing ?</Form.Label>
            <Form.Control
              type="text"
              name="Companydoing"
              placeholder="Write here..."
              value={formValues.Companydoing}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <Form.Label>Stage of your Startup ?</Form.Label>
            <Select options={startup_age} className="Msel" onChange={handleChangeS}></Select>
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <Form.Label>Upload your pitch deck</Form.Label>
            <Form.Control
              type="file"
              name="file_upload"
              // placeholder="Password"
              // value={formValues.file_upload}
              onChange={FileChange}
            />
            <br/>
            <div className="field" id="last"> 
            <Form.Label>I would like to be updated by Bizdateup Updates</Form.Label><br/>
            <input
              type="checkbox"
              name="check"
              // placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />  <span id="asd">I Agree</span>
          </div>
          <p>{formErrors.password}</p>
          
          </div>
          <p>{formErrors.password}</p>
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
    </div>
  );
}

export default Investform;
