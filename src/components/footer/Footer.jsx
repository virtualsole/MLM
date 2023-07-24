import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import footer from '../assets/VPlogo.png';

import { Link } from 'react-router-dom';

import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <div className='foot pt-4'>
        <Container>
            <Row>
                <Col>
                  <div className="ftr_main">
                    
                  <div className='ftr'>
                    <div className='ftr_img'>
                        <img src={footer} alt="Footer Logo" className='ftr_logo' />
                    </div>
                    <p>The Hassle-free way to launch your crypto projects on a variety
                       of Blockchains!
                    </p>
                  </div>
                
                   
                  <div className='ftr_links'>
                  <h3>Company</h3>
                    <Link to={''}>Whitepaper</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Audit</Link>
                    <Link href='/'>Star Strike Game</Link>
                  </div>

                  <div className='ftr_links'>
                  <h3>Help</h3>
                    <Link href='/'>Anouncements</Link>
                    <Link href='/'>Telegram</Link>
                    <Link href='/'>Twitter</Link>
                    <Link href='/'>Medium</Link>
                  </div>
                   
                  </div>
                  <p className='mt-5 text-center ftr_rights'>© All Rights Reserved 2023.</p>
                </Col>
            </Row>
        </Container>
        </div>
      </div>
    </>
  )
}

export default Footer;