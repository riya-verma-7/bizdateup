import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row, Button } from "reactstrap";
import Slider from "react-slick";


import HomeUrl from '../../assets/images/home-border.png';

import Img1 from '../../assets/images/users/img-1.png';
import Img2 from '../../assets/images/users/img-2.png';

import Card from "./Card";

const team =  [
        {
          id: 1,
          img: Img1,
          name: "Prince Dmello",
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 2,
          img: Img2,
          name: 'Vishal Allada',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 3,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 4,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 5,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 6,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 7,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 8,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        },
        {
          id: 9,
          img: Img1,
          name: 'Pranav Baradkar',
          role: 'Developer',
          description: 'Passionate about technology'
        }
      ]


const Team2 = () => {


   
  return (
   <>
       
        {/* <section className="section pt-0" id="team">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Know the team</h3>
                  <p className="text-muted f-17 mt-3">BizDateUp operates on the notion that great startups are run by a great team.<br /> And, thankfully we have one. You might want to take a look:</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 d-flex justify-content-center">

           {
team.map(({id,img,role,name,description})=>(
    <>
    <Col md={3} className="text-center m-2 ">
    <Card>
    <div className="img-overlay">
        <img src={img} alt="" className="img-fluid " />
        <p className="mt-1">{name}</p>
  </div>
        <div class="middle">
    <div class="text">{role}<span><a href="#" target='__blank' className="overlay-text"><i class="bi bi-linkedin"></i></a>
    </span></div>
    </div>
    </Card>
    </Col>
    </>
))
           } 
<Col md={3}>

</Col>
            </Row>
            </Container>
            </section> */}

            <section className="section bg-light bg-cta">
         <Container>
             <Row className="justify-content-center">
               <Col lg={9}>
                <div className="text-center">
                 <h2>WANT TO INVEST IN YOUR <span className="text-primary">FAVORITE STARTUP</span></h2>
                 <p className="text-muted mt-3">Invest in startups you believe.<br/> Learn how the business works and interact with the community as you grow your fortune.</p>
               <div className="mt-4 pt-2">
                 <Link to="/Invest" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Read More</Link>
                  <Link to="/Deals" className="btn btn-primary btn-round btn-rounded"> Explore Startups </Link>
               </div>
             </div>
             </Col>
           </Row>
           </Container>
        </section>
   </>
  )
}

export default Team2
// export default class Contact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       teams: [
//         {
//           id: 1,
//           img: Img1,
//           name: "Prince Dmello",
//           role: '#developer',
//           description: 'Passionate about technology'
//         },
//         {
//           id: 2,
//           img: Img2,
//           name: 'Vishal Allada',
//           role: '#developer',
//           description: 'Passionate about technology'
//         },
//         {
//           id: 3,
//           img: Img1,
//           name: 'Pranav Baradkar',
//           role: '#developer',
//           description: 'Passionate about technology'
//         },
//       ],
//     };
//   }

//   render() {
//     var temsettings = {
//       autoplay: true,
//       dots: true,
//       speed: 300,
//       infinite: false,
//       arrows: false,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//     };

//     const teamslides = this.state.teams.map((team, teamindex) => {
//       return (
//         <div className="team-box p-3" key={teamindex}>
//           <Row className="align-items-center">
//           <Col lg={6}>
//               <div className="mt-4" style={{textAlign: "center"}}>
//               <img src={team.img} alt="" className="img-fluid rounded" />
//               </div>
//             </Col>
//             <Col lg={5}>
//               <div className="mt-4" style={{textAlign: "center" }}>
//                 <h5 className="mt-2">{team.name}</h5>
//                 <p className="team-badge bg-primary text-white rounded f-14 mt-2">#{team.role}</p>
//                 <p className="text-muted mt-3">{team.description}</p>
//                 <div className="team-social mt-4 pt-2">
//                   <ul className="list-inline mb-0">
//                     <li className="list-inline-item">
//                       {/* <Link to="#" className="text-reset"><i className="mdi mdi-facebook"></i></Link> */}
//                       {/* <Button>Invest Now</Button> */}
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       );
//     });
//     return (
//       <React.Fragment>
//         <section className="section pt-0" id="team">
//           <Container>
//             <Row>
//               <Col lg="12">
//                 <div className="title-box text-center">
//                   <h3 className="title-heading mt-4">Know the team</h3>
//                   <p className="text-muted f-17 mt-3">BizDateUp operates on the notion that great startups are run by a great team. And, thankfully we have one. You might want to take a look:</p>
//                   <img src={HomeUrl} height="15" className="mt-3" alt="" />
//                 </div>
//               </Col>
//             </Row>
//             <Row className="mt-5 pt-4">
//               <Col lg="12">
//                 <div className="team-carousel">
//                   <Slider {...temsettings}>
//                     {teamslides}
//                   </Slider>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         <section className="section bg-light bg-cta">
//           <Container>
//             <Row className="justify-content-center">
//               <Col lg={9}>
//                 <div className="text-center">
//                   <h2>WANT TO INVEST IN YOUR <span className="text-primary">FAVORITE STARTUP</span></h2>
//                   <p className="text-muted mt-3">Invest in startups you believe.<br/> Learn how the business works and interact with the community as you grow your fortune.</p>
//                   <div className="mt-4 pt-2">
//                     <Link to="/Invest" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Read More</Link>
//                     <Link to="/Deals" className="btn btn-primary btn-round btn-rounded"> Explore Startups </Link>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </React.Fragment>
//     );
//   }
// }
