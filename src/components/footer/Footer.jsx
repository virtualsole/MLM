import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import {SlEnvolope} from 'react-icons/sl'
import {BsArrowRight} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <section className='footer-bg'>
        <div className="container-fluid pt-lg-0 pt-5">
            <div className="row">
                <div className="col mt-lg-5">
                    <h3 className='text-light ms-4'>Get Started</h3>
                    
                    <ul class="mb-0 mt-3">
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">What is VRC</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#"> Wallets</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Get VRC</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Staking</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Mining</a></li>
                        
                    </ul>
                </div>
                <div className="col mt-lg-5">
                    <h3 className='text-light ms-4'>Ecosystem</h3>
                    
                    <ul class="mb-0 mt-3">
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Ecosystem</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#"> DeFi</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">NFTs & Creator Economy</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">dApps</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Launch your Token</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Governance</a></li>
                        
                    </ul>
                </div>
                <div className="col mt-lg-5">
                    <h3 className='text-light ms-4'>Developers</h3>
                    
                    <ul class="mb-0 mt-3">
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Developer Portal  <BsArrowUpRight className='ms-3' /></a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#"> Platform</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Scilla Language</a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Explorer  <BsArrowUpRight className='ms-3' /></a></li>
                        <li className='mb-2' style={{listStyle: "none"}}><a className='text-decoration-none text-light' href="#">Funding Opportunities</a></li>
                        
                    </ul>
                </div>
                <div className="col mt-lg-5">
                <h3 className='text-light mt-4 ms-lg-0 ms-4'>Stay Up to Date</h3>
                <form className='mt-lg-3 ms-lg-0 ms-4'>
                <SlEnvolope className='far-icon'/>
                <input type="email" placeholder='Enter Your Email' required />
                <button type='submit'><BsArrowRight  className='fas-btn'/></button>
               </form>
               <div className='social-icons ms-lg-5 mt-lg-4 mb-3 responsive'>
               <span className='icons'><a href="#"><FaFacebookF  /></a></span>
               <br></br>
               <span className='icons'><a href="#"><FaTwitter /></a></span>
               <br></br>
               <span className='icons'><a href="#"><FaDribbble /></a></span>
               <br></br>
               <span className='icons'><a href="#"><FaInstagram /></a></span>
               <br></br>
               <span className='icons'><a href="#"><FiMail /></a></span>
               </div>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text-light">
                    Virtual  © 2023. All Rights Reserved.
                    </div>
                    <div className="text-warning text-center">
                    Terms and Conditions Privacy Policy

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer