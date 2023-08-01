import React from 'react'
// import {BiSolidDownArrow} from "react-icons/bi"
// import {BiSolidUpArrow} from 'react-icons/bi'
const Cards = () => {
  return (
    
  
     <div className="row mt-lg-5">
        <div className="col-lg-4 col-sm-12 responsive">
            <div className='card_head1'>
            <span>Choose a wallet</span>
            </div>
            {/* <BiSolidDownArrow  className='arrow_down' data-aos="fade-up" data-aos-duration="3000"/> */}
            <div className="number mt-lg-4">
                <span>1</span>
            </div>
          <span className='dashes'>-----------------------------------<span className='mb-tab'>-----------</span></span>
        </div>
        <div className="col-lg-4 col-sm-12 mt-lg-5 responsive mb-5">
            <div className="tops">
            <div className="number">
                <span>2</span>
            </div>
            <span className='dashesd'>-----------------------------------<span className='mb-tab'>-----------</span></span>
            </div>
            {/* <BiSolidUpArrow  className='arrow_down' data-aos="fade-down" data-aos-duration="3000"/> */}

            <div className='card_head2'>
            <span>Choose staking platform</span>
            </div>
        </div>
        <div className="col-lg-4 col-sm-12 responsive">
        <div className='card_head3'>
            <span>Select staking seed node operator (SSN)</span>
            </div>
            {/* <BiSolidDownArrow  className='arrow_down' data-aos="fade-up" data-aos-duration="3000"/> */}
            <div className="number mt-lg-4">
                <span>3</span>
            </div>
        </div>
 
    </div>
   

  )
}

export default Cards