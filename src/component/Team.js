import React from 'react'
import Card from '../pages/Layout2/Card'
import { Link } from "react-router-dom";


import { Col, Container, Row, Button } from "reactstrap";


const content=[

  {
          id: 1,
          name: 'Invest Now',
          description: 'Invest in startups you believe. Learn how the business works and interact with the community as you grow your fortune.',
          link: '/Deals'
        },
        {
          id: 2,
          name: 'Raise Funds',
          description: 'Get your funds through BizDateUp. Convert your community into capital and get funded through our investors.',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSc_6j9CLP7GJAabScLqYdOCFbSYEoOzzDI7gH40J-R2VCY4mw/viewform?usp=sf_link'
        }
        
]


const Team = () => {
  return (
    <>


<section className="section pt-0" style={{padding: '0px 0px 50px 0px'}}>
          <Container>
            <Row className="mt-5 pt-4">
{
  content.map(({id,name,description,link})=>(

              <Col lg="6" key={id}>
                <div style={{backgroundColor:'#202054',borderRadius:'15px'}}>
      <Card>
      <h5 className="mt-2" style={{color:'#ffffff'}}>{name}</h5>
                <p className="text-muted mt-3">{description}</p>
                <Button>{name}
                      <a
                          href={link}
                          target="_blank"
                          className="text-reset"
                        ></a></Button>
      </Card>
                </div>
              </Col>
  ))
}


            </Row>
          </Container>
        </section>
    </>
  )
}

export default Team