import React, { Component } from "react";
import { Container, Row, Col, Form, Label, Input ,Button } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";

//import images
import HomeUrl from '../../assets/images/home-border.png';

class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        
      </React.Fragment>
    );
  }
}

export default Section;
