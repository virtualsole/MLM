import React from 'react'
import './world.css'
const World = () => {
  return (
    <section>
        <div className="container">
            <div className="row responsive">
            <h1 className='world_heading mt-lg-5 '>
            Change your <span className='span1'>world</span> <br></br>
 <span className='span2'>earning</span> rewards with<br></br> VRC
            </h1>
            </div>
        </div>
        <div className="container-lg-fluid container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
            <div class="border-gray-800 mt-4 font-weight-medium text-md text-xl p-4 align-self-end mb-lg-5" style={{
              opacity: "1",
               transform: "none",
               fontWeight: "500",
               fontSize: "20px",
               borderLeft: "2px solid #000"
               }}><p class="jsx m-0">Staking VRC is a great way to earn rewards for decentralising the Virtual network.</p></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default World