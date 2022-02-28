import React, { Component } from "react";

// Importing Section
import Navbar from "../../component/Navbar/NavBar";

import Section from "./Section";
import Services from "./Services";
import Pricing from "./Pricing";
import Team from "./Team";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "../../component/Footer/Footer";
import FounderA from "./FounderA";
import ReactPlayer from "react-player";
import { Col, Container, Row } from "reactstrap";
const Youtube = () => {
  return (
  <section className="section bg-services" style={{padding: '100px 0px 0px 0px'}}>
  <Container >
                <div className="title-box text-center">
                <ReactPlayer width = "100%" height = "600px" controls = "true"
                          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                />
                </div>
    </Container>
 </section>
  );
}

class Layout4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        // { id: 1, idnm: "home", navheading: "Home" },
        // { id: 3, idnm: "services", navheading: "Services" },
        // { id: 4, idnm: "pricing", navheading: "Pricing" },
        // // { id: 5, idnm: "team", navheading: "Team" },
        // // { id: 6, idnm: "clients", navheading: "Clients" },
        // { id: 7, idnm: "contact", navheading: "Contact" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "navbar-light",
      fixTop : true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "navbar-light", imglight: true });
    }
  };

  render() {
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />

          {/* Importing Section */}
          <Section />

          <Youtube/>

           {/* Importing Service */}
           <Services />

          {/* Importing Pricing */}
          <Pricing />

          <FounderA/>

          {/* Importing Team */}
          <Team />

          {/* Importing Clients */}
          {/* <Clients /> */}

          {/* Importing Contact Us */}
          {/* <Contact /> */}

          {/* Importing Footer */}
          <Footer />
      </React.Fragment>
    );
  }
}
export default Layout4;
