import React from 'react'

const ResCard = () => {
  return (
    <div className="row mt-lg-5">
    <div className="col-lg-4 col-sm-12 responsive">
        <div className='card_head mb-3'>
        <span>Choose a wallet</span>
        </div>

    </div>
    <div className="col-lg-4 col-sm-12 responsive">
        <div className='card_head mb-3'>
        <span>Choose staking platform</span>
        </div>
    </div>
    <div className="col-lg-4 col-sm-12 responsive mb-5">
    <div className='card_head'>
        <span>Select staking seed node operator (SSN)</span>
        </div>
    
    </div>
</div>
  )
}

export default ResCard
