import React from 'react'
import play from '../../assets/PLAYiCON-02.svg'
import "./started.css"
import Cards from './Cards'
import ResCard from './ResCard'
const Started = () => {
  return (
    <section className='started_bg'>
        <div className="container pt-5">
            <img className='vert-move mt-5 ms-lg-4' src={play} alt="" />
            <h1 className='start_heading'>Let's get started</h1>
            <p className='start_p'>Choose your wallet and staking seed node operator (SSN) and power the Virtual network while earning rewards.</p>
            <h2 className='start-h2 mt-lg-5'>How to stake</h2>
<div className="desk">

            <Cards />
</div>
<div className="tab">
    <ResCard />
</div>
        </div>
    </section>
  )
}

export default Started