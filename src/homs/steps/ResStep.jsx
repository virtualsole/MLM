import React from 'react'
import wallet from "../../assets/13-25-13-552_512.gif"
import Bank from "../../assets/Bankgif.gif"
import Pig from "../../assets/pig.gif"
import './step.css'
const ResStep = () => {
  return (
    <section className='ResStep'>
      
        <div className="container">
        <h1 className='step_heading mt-5 mb-lg-5'>Start staking in 3 easy steps</h1> 
            <div className="row step-res">
                <div className="col">
                        <div className="d-flex gap-3 step-res">
                    <h1 className='step_heading' style={{color: "#bef0ed", fontSize: "150px"}}>1</h1>
                        <img src={wallet} alt="" width={150} height={150} />
                    
                        </div>
                        <h2 style={{
                            fontSize: "28px",
                            fontWeight: "700"

                        }}>
Choose a wallet</h2>
<p>A wallet lets you safely connect to<br></br> Virtual and manage your assets.</p>
<button className="carsoual-btn-vrc d-flex text-white mt-5 ms-lg-4 step-res">
            Explore Wallets 
                </button>

                </div>
                <div className="col">
                    <div className="d-flex gap-3 step-res">
                    <h1 className='step_heading' style={{color: "#fecfd0", fontSize: "150px"}}>2</h1>
                  <img src={Bank} alt="" width={150} height={150} />
                    </div>
                    <h2 style={{
                            fontSize: "28px",
                            fontWeight: "700"

                        }}>
Get VRC</h2>
<p>VRC is the native token for the<br></br>Virtual blockchain.</p>
<button className="carsoual-btn-vrc d-flex text-white mt-5 ms-lg-4 step-res" style={{
    background: "#fb6165"
}}>
Get VRC 
                </button>
                </div>
                <div className="col">
                    <div className="d-flex gap-3 step-res">
                    <h1 className='step_heading' style={{color: "#e3f3be", fontSize: "150px"}}>3</h1>
                    <img src={Pig} alt="" width={150} height={150} />
                    </div>
                    <h2 style={{
                            fontSize: "28px",
                            fontWeight: "700"

                        }}>
Stake VRC</h2>
<p>Staking is an eco-friendly way to earn<br></br>rewards and power the network.</p>
<button className="carsoual-btn-vrc d-flex text-white mt-5 ms-lg-4 step-res"  style={{
    background: "#a2d729"
}}>
Explore Staking 
                </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ResStep