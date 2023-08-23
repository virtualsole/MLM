import React from 'react'
import './staking.css'
import ques from "../../assets/thing.png"
// import NextCol from './NextCol'
import  Accordion from './Accordion/Accordion'
const Staking = () => {
  return (
  <section className='bg-stack'>
    <h1 className="text-center mt-5 stack__heading">
        Introduction to staking
</h1>

 <div className="container">
 <div className="row gx-0 mt-4"> 
        <div className="col-lg-6 col-sm-12">
           
      <div style={{height: "390px", overflowY: "scroll"}}>
          <Accordion />
      </div>
        </div>
        <div className="col-lg-6 col-sm-12 ">
        

            <img className='img-fluid animat responsive mt-lg-0 mt-5' src={ques} alt=""  />

     
        </div>
    </div>
 </div>

  </section>
  )
}

export default Staking