import React from 'react'
import './platform.css'
import play from '../../assets/PLAYiCON-02.svg'
import {BsArrowUpRight} from 'react-icons/bs'
const Platform = () => {
  return (
    <section className='plat_bg mb-5'>

    <div className='container_fluid pt-5 ps-lg-3'>
    <img className='vert-move mt-lg-5 ms-lg-4' src={play} alt="" />
            <h1 className='plate_heading'>Choose staking platform</h1> 
            <p className='plat_p'>Connect your wallet and start staking using our elegant VRClion portal. Alternatively, download apps such as Moonlet or Atomic Wallet and stake your VRC directly.</p>
            <button className="carsoual-btn-vrc d-flex text-white mt-lg-5 mt-3 ms-lg-4 responsive">
            Explore VRClion 
                </button>
                {/* <BsArrowUpRight className='ms-3' /> */}
    </div>
    </section>
  )
}

export default Platform
