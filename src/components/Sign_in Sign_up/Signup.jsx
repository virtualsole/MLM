import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const Signup = () => {
  return (
    <>
      <div className="signup">
        <Container>
            <Row>
                <Col>
                  <div className="signup_form">
                  <h3 className='text-center mb-3'>Sign Up</h3>
                    <Form>

                    {/* Name Row */}

                     <Row>
                      <Col lg={6}>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type='text' placeholder='First Name' />
                      </Col>
                      <Col lg={6} className='lower_col'>
                      <Form.Label>Last Name:</Form.Label>
                        <Form.Control type='text' placeholder='Last Name' />
                      </Col>
                      </Row>

                      {/* DOB and Gender Row */}

                      <Row className='mt-3'>
                      <Col lg={6}>
                        <Form.Label>Date of Birth:</Form.Label>
                        <Form.Control type='date' />
                      </Col>
                      <Col lg={6} className='lower_col'>
                      <Form.Label>Gender:</Form.Label>
                        <div className='d-flex gap-4'>
                        <Form.Check type='radio' label='Male' name='radiobtn' />
                        <Form.Check type='radio' label='Female' name='radiobtn' />
                        <Form.Check type='radio' label='Other' name='radiobtn' />
                        </div>
                      </Col>
                      </Row>

                      {/* Address Row */}

                      <Row className='mt-3'>
                        <Col>
                          <Form.Label>Address:</Form.Label>
                          <Form.Control type='text' placeholder='Enter Your Address' />
                        </Col>
                      </Row>

                      {/* Email Row */}

                      <Row className='mt-3'>
                        <Col>
                          <Form.Label>Email:</Form.Label>
                          <Form.Control type='email' placeholder='someone@example.com' />
                        </Col>
                      </Row>

                      {/* Password Row */}

                      {/* <Row className='mt-3'>
                        <Col lg={6}>
                          <Form.Label>Password:</Form.Label>
                          <Form.Control type='password' placeholder='Enter Your Password' />
                        </Col>
                        <Col lg={6} className='lower_col'>
                          <Form.Label>Confirm Password:</Form.Label>
                          <Form.Control type='password' placeholder='Re-enter Your Password' />
                        </Col>
                      </Row> */}

                      {/* Button */}

                      <Button type="submit" className='signup_btn mt-3'>
                       Sign Up
                     </Button>
                     <div className='mt-3'>
                      <p>Already a user ? <Link to={'/signin'}><span style={{opacity:'0.7'}}>Sign In</span></Link></p>
                     </div>
                    </Form>
                  </div>
                </Col>
            </Row>
        </Container>
        <Footer />

      </div>
    </>
  )
}

export default Signup;