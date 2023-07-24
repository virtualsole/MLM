import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/user.css';
import Footer from '../footer/Footer';

const Signin = () => {
  return (
    <>
      <div className="signin">
        <Container>
            <Row>
                <Col>
                <div className="form">
                    <h3 className='text-center mb-3'>Sign In</h3>
                   <Form>
                     <Form.Group className='mb-3' controlId='formBasicEmail'>
                       <Form.Label>Email:</Form.Label>
                       <Form.Control type='email' placeholder='Enter your email...' />
                       <Form.Text className='text-white'>We'll never share your email with anyone else.</Form.Text>  
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Password</Form.Label>
                       <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                     <Button type="submit" className='signin_btn'>
                       Sign In
                     </Button>
                     <div className='mt-3'>
                      <p>Not a user ? <Link to={'/signup'}><span style={{opacity:'0.7'}}>Sign Up</span></Link></p>
                     </div>
                   </Form>
                  </div>
                </Col>
            </Row>
        </Container>
      {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
                <Footer />

      </div>
    </>
  )
}

export default Signin;