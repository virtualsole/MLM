import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import {GiPawPrint} from 'react-icons/gi';
import Vesting from '../../assets/Vesting-01.png'

import '../styles/statistics.css';
import Footer from '../footer/Footer';

const Network = (props) => {
    return (
       <Container>
        <Row>
            <Col>
              <div className="network_stats_btns">
              <Button className='network_stats_btn'>
                        <p>{props.p1}</p>
                        <p>{props.participants}</p>
                      </Button>
              </div>
            </Col>
        </Row>
       </Container>
    );
}


const Network_stats = () => {
  return (
    <>
    
      <div className="network_stats">
      <div className="vstack-bg">

<div className="container">
      <div className="row">
          <div className="col-lg-6 col-sm-12 mt-lg-5">
              <h1 className='lanch_head mt-lg-5'>
              Secure the Virtual <span className="responsive sma  ms-lg-0 ms-4" style={{background: "#1ab4c4"}}>Vesting
</span>
              </h1>
          </div>
          <div className="col-lg-6 col-sm-12">
         
          <img className='mt-lg-0 mt-5 vest responsive' src={Vesting} alt="" width={700}/>


          </div>
      </div>
  </div>
  </div>
        <Container>
            <Row>
            <Col className='mt-3'>
                   <div className="network_stats">
                    <div className="network_stats_btns">
                        <Network p1='0' participants='Total Participants' />
                        <Network p1='VRC' participants='Total Staked in Pool' />
                        <Network p1='$' participants='Total Staked in Pool (USD)' />
                        <Network p1='VRC' participants='Total Rewards' />
                        <Network p1='$' participants='Total Rewards (USD)' />
                        <Network p1='VRC' participants='Total Withdrawls' />
                        <Network p1='$' participants='Total Withdrawls (USD)' />
                    </div>

                    <div className='network_stats_fixed mt-5'>
                      <Button className='network_stats_fixed_btn mb-3'> <GiPawPrint /> Top Stakers & Earners</Button>
                    </div>

                   </div>
                 </Col>
            </Row>
        </Container>
        <Footer />

      </div>
    </>
  )
}

export default Network_stats;