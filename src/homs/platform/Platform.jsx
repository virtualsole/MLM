import React from 'react'
import './platform.css'
import play from '../../assets/PLAYiCON-02.svg'
import {BsArrowUpRight} from 'react-icons/bs'
const Platform = () => {
  return (
    <section className='plat_bg'>

    <div className='container_fluid pt-5 ps-3'>
    <img className='vert-move mt-5 ms-lg-4' src={play} alt="" />
            <h1 className='start_heading'>Choose staking platform</h1> 
            <p className='plat_p px-4'>Connect your wallet and start staking using our elegant VRClion portal. Alternatively, download apps such as Moonlet or Atomic Wallet and stake your VRC directly.</p>
            <button className="carsoual-btn-vrc d-flex text-white mt-5 ms-4">
            Explore VRClion <BsArrowUpRight className='ms-3' />
                </button>
    </div>
    </section>
  )
}

export default Platform
