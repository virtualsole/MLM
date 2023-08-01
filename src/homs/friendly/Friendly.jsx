import React from 'react'

import "./friendly.css"

const Friendly = () => {
  return (
   <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                <h2 className='eco_heading'>Eco-friendly staking with Virtual</h2>
                <p className='eco_p mt-3'>Staking is a greener and more sustainable way to secure the blockchain. Using Virtual, you can earn rewards for your service to its network and ecosystem.</p>
            </div>
            <div className="col-lg-6 col-sm-12 mt-lg-3 mt-0">
                <div className="arr">
                    <span className='d-block current'>Current APR</span>
                    <span className='persnt'>13.27%</span>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Friendly