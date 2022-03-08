import React, { Component } from "react";

import { Col, Container, Form, FormGroup, Input, Label, Row, Badge, Button} from "reactstrap";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import Slider from "react-slick";

import HomeUrl from '../../assets/images/home-border.png';
import Feature from '../../assets/images/features/img-3.png';
import Img1 from '../../assets/images/testi-img/img-1.png';
import Img2 from '../../assets/images/testi-img/img-2.png';
import Img3 from '../../assets/images/testi-img/img-3.png';
import Img4 from '../../assets/images/testi-img/img-4.png';
import Client1 from '../../assets/images/clients/1.png';
import Client2 from '../../assets/images/clients/2.png';
import Client3 from '../../assets/images/clients/3.png';
import Client4 from '../../assets/images/clients/4.png';
import CountUp from 'react-countup';
import Card from 'react-bootstrap/Card' ; 
 





const Content = () => {
      return (
        <React.Fragment>
          <section className="section bg-services" id="services">
          <Container>
            <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  
                  <h3>INTERNKHOJ</h3>
                  
                  <p className="text-uppercase"><div > 
                  <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>Education</Badge>
                  <Badge color="success" style={{fontSize: '17px', marginRight: '10px'}}>Internship</Badge>
                      </div>
                      
                      </p>
                  <p className="text-muted mt-3">For Users - TELO is an app that allows you to search, discover, register, set-reminders, train for, participate in fitness/running events around you and share achievements with friends & family; For Brands - TELO is a platform to sponsor, monitor, market and derive user reports for their marketing.
</p>
                  <div className="mt-4 pt-1">
                    <Link to="#" className="btn btn-outline-primary">INVEST</Link>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1" style={{border: '1px red', padding: '10px'}}>
              
                <ReactPlayer width = "100%" height = "300px" 
                controls = "true" url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                />
                
              </Col>
            </Row>
            
          </Container>
        </section>
        <section className="section bg-light bg-cta">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <div className="text-center">
                  <h2>Market Overview <span className="text-primary"> - Documents</span></h2>
                  <p className="text-muted mt-3">A due diligence report is a document prepped by an independent third party due diligence team which includes information related to financials, compliance, key risks and a lot more.</p>
                  <div className="mt-4 pt-2">
                    <Link to="/Invest" className="btn btn-soft-primary btn-round mr-3 btn-rounded">Read More</Link>
                    <Link to="#" className="btn btn-primary btn-round btn-rounded"> DOWNLOAD </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section className="section" id="clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Key Features of Startup</h3>  
                </div>
              </Col>
            </Row>
            
          </Container>
        </section>


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
          <h3 className="title-heading mt-4">Problem</h3> 
          <p className="text-muted f-17 mt-3">
          Let us all agree on this, Fitness can be BORING! 
 

 Users:
 
 How many times have we set clear intentions like the following:
 
 This year I am going to go to the gym regularly!
 
 This year onwards I am going to run regularly!
 
 From now on, fitness and eating healthy is going to be my top-most priority
 
 only to realize two weeks later (for 92% of us at least) we have fallen back to our old ways.
 
 Fitness is 'BORING' and that is one of the largest reasons why most of us drop out of fitness habits.
 
 Users are rarely hooked on to the same fitness programs. It is not easy to come up with unique programs for everyone, especially not at a low cost.
 
 Brands:
 
 Brands have always been looking for ways to engage both internal and external users with campaigns that can put them in the positive mindspace of their users. Health related events have a very positive angle to it, however it has NOT been easy to create, coordinate, market and get reports around these from one single platform. </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>
<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Solution
</h3> <p className="text-muted f-17 mt-3">
TELO - an events-based fitness tracking app for all of us! 
 

'Events' however have the ability to keep things light, fun and engaging, especially when there is the possibility of it being a social and community driven phenomenon.

"Enter TELO, a mobile app where users can discover, register, set-reminders, practice/train, participate/track, share and brag achievements and more importantly - Build a Tribe around their fitness habits!"

Imagine a day where you have grown fit, but also have built a community around your friends circle, family, school, college, social media or anywhere you find your tribe. After all, we humans are all social animals! </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Product
</h3> <p className="text-muted f-17 mt-3">
TELO is meant to be a platform app where users can discover fun and engaging fitness based events around them. Besides that they would have the ability to:

Register for free/paid events;

Set reminders for the same on their calendar;

Train for events if they choose to;

Participate in group events hosted in and around their localities;

Track the fitness events like Runs, Walks and Jogs with metrics like - distance, pace/speed, elevation, calories burnt, steps covered at various intervals - daily, weekly, monthly, yearly and all time;

Track your own achievements and if necessary compare yourself with others in your community/groups to better your performance;

Track their fitness activities with smart tracking device integrations like Apple Watch, FitBit, Google Wear etc. (coming soon);

Fun audio tracks (gamified story format) that help you achieve your running and other fitness goals that act like guides;

Share achievements and build a community of like minded people within your community;

Many more to come soon…</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Traction 
</h3> <p className="text-muted f-17 mt-3">
Aug 2020 - Having started working on the product in Aug 2020, the first private beta was launched in Dec 2020 to test if the idea even has legs. Within two weeks, we hit a 300+ user mark and the idea of audio stories that help running and achieving a set goal was validated to a certain degree;

Jan 2021 - From Dec 2020 to Jan 2021, we continued the private beta and got some validation and feedback while working on the better version of the product. In Jan 2021, we released the open beta version of TELO which is what is still live with some updates;

Traction until Oct 2021 (peak numbers):

Downloads - 25000+

MAUs - 5100+

WAUs - 1600+

Pivot identified after speaking with users. Although the concept of an Audio-AR driven model to get people excited about running/walking/jogging, it did NOT lead to repeat usage of the product. It was sporadic and it became evident that the vanity of such a product is not long lasting and we needed a stronger value proposition for it to be a household daily used product on our users’ phones. Which is when the repeated mention of fun short events started peaking in user conversations. This is what has lead to the pivot and rebuild of TELO into a platform for small sized events in smaller location circles and giving users the ability to create groups/communities too.
 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Customers 
</h3> <p className="text-muted f-17 mt-3">
Pivoting from a B2C model to a B2B2C model now and hence have only begun building the product, while speaking to some really interesting strategic partnerships with premium sports apparel brands, smartphone brands, property developers/builders who want to be part of the journey, can’t name them as yet as the conversations are still preliminary. Having said that, there is surely interest in this segment.

Strategic partnership would be with the brands like Milind Soman and his branded event - Pinkathon. As mentioned in the video, he is ready to be a brand ambassador if the proposition is right.
</p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>
<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Business Model
 
</h3> <p className="text-muted f-17 mt-3">
B2B2C model where brands participate in creating fun and engaging experiences around fitness and all of them have to be tracked on the app itself. Building the much needed momentum and not all customer acquisition has to be done by us. Brands would promote events they have sponsored on TELO in order to create buzz around how they care about their users’ fitness/health overall. Brands would pay TELO to host the events and in exchange they would get the analytics, reporting and additional support in creating fun and engaging audio and visual content that can be placed strategically in the app that could play during the event in the best suitable format - video, audio, reading material etc. A simple example here for a Property Developer

Brands create ‘Free’ events - Pay $ for analytics and reports;

Brands create ‘Paid’ events - Pay higher $ for analytics, reports and the majority portion of the entry fees paid by users. TELO takes a cut;

Brands pay $ for smartly placed advertisements within events wherever feasible and non-intrusive for users;

Users pay $ for participating in paid events, TELO earns a cut out of it;

B2C model also exists but will be the last focus where users can be incentivised to pay a monthly subscription to be able to participate in a max number of paid events for free and earn points and other goodies provided by brands for their participation; Users can also pay for training modules created by experts and coaches out of which a majority would go to the respective coaches/experts and TELO takes a small cut;
 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Competition
 
 
</h3> <p className="text-muted f-17 mt-3">
TELO would be competing in two areas with two different kinds of entities - Fitness tracking and Events. The following video and attached image should help illustrate this:


 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>


<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Usage Of Funds
 
 
</h3> <p className="text-muted f-17 mt-3">
Main usage of funds would be to build two key components for success - a great team and a kicka** product. We intend to build a world class product from India for the world. Built in a manner that entering different geographies would be light and not a reinvention every time. The rough breakup of usage of the funds are mentioned here in the illustration below with some key milestones we hope to achieve with the funding:


 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Vision 
 
 
</h3> <p className="text-muted f-17 mt-3">
TELO would eventually be the go to destination for users who want to pick up a fitness habit by participating in the largest network of fitness enthusiasts in the world along with brands from across the globe participating in their users’ fitness journey and having fun while building healthy habits. It would be a billion dollar industry with millions of people using it frequently and benefiting from the usage while bringing more people into the ecosystem.


 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>

<Row> <Col lg={12}> <div className="title-box text-left"> <h3 className="title-heading mt-4">
Exit 
 
 
</h3> <p className="text-muted f-17 mt-3">
Although I am not able to put a X times return on your capital investment, the assurity I can give you is that I would put in all my effort to make TELO a success. I have dedicated a good year and more in vetting the idea with my own money and resources. I have gained a lot of insight from users and their behavior and the pivot has come at a very good time considering the easing of the virus and the pandemic. Online and Offline events are bound to take off both from a consumer/user perspective and a corporate employee engagement perspective. My HR connections have already promised to execute the model at their workplaces and these are HRs from various big firms across the IT sector in India. You can expect great things from TELO and if you be part of it, you can be rest assured you are going to be creating a change movement while a sustainable and profitable business along with it that is going to be the talk of the tech world along with the fitness world. Come be part of the fitness revolution in India for the world.



 </p> <img src={HomeUrl} height="15" className="mt-3" alt="" /> </div> </Col> </Row>


          </Container>
        </section>
      </React.Fragment>
      ) ; 
}

export default Content;