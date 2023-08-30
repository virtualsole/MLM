import React from 'react'
import "./home.css"
import groot from '../../assets/BusinessmanDeal.png'
const Home = () => {
  return (
    <section className='home_bg mt-lg-0 mt-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h1 className='home_heading mt-lg-5'>
                    Secure the Virtual <span className='sma responsive'>Network
</span>
                    </h1>
                </div>
                <div className="col-lg-6 col-sm-12">
               
      <img className='groot mt-lg-0 mt-5 responsive' src={groot} alt="" />

                </div>
            </div>
        </div>
    </section>
  )
}

export default Home