import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Staking_connect = () => {
  return (
    <>
      <Container>
        <Row>

        <Col>
          
        </Col>

        <Col lg={6}>
                <div className="stakes_right_col">
                  <h2>Choose a staking duration</h2>
                  <div className="staking_boxes mt-5 mb-2">
                  <div className='staking_box'>
                    15 Days
                  </div>
                  <div className='staking_box'>
                    90 Days
                  </div>
                  <div className='staking_box'>
                    180 Days
                  </div>
                  <div className='staking_box'>
                    365 Days
                  </div>
                  </div>

                  <div className="staking_inputwrap mb-3">
                    <input className="staking_input" type="number" placeholder='Enter amount. Ex: 10000' />
                    <div className="input_max">MAX</div>
                  </div>

                    <div className="stake_col_right_content d-flex justify-content-between">
                      <p>APY</p>
                      <p>2%</p>
                    </div>

                    <div className="stake_col_right_content">
                        <div className='d-flex justify-content-between'>
                        <p>Max fine</p>
                        <p>60%</p>
                        </div>
                      <p>
                        Early unstake penalty is a max of - that then drops linearly each
                         day until the stake unlock date.
                      </p>
                    </div>
                    
                    <div className="stake_col_right_content d-flex justify-content-between">
                      <p>Max profit (estimated)</p>
                      <p>-</p>
                    </div>

                    <div className="stake_col_right_content d-flex justify-content-between">
                      <p>You Staked</p>
                      <p>0 APAD</p>
                    </div> 

                    <div className="stake_col_right_content d-flex justify-content-between">
                      <p>Your balance</p>
                      <p>0 APAD</p>
                    </div>

                    <div className="stake_col_right_content d-flex justify-content-between">
                      <p>Total Staked</p>
                      <p>172162424.158167 APAD</p>
                    </div>

                    <Button className='w-100 head_btn'>Approve</Button>
                </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default Staking_connect;