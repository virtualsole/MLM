import React from 'react'

const ResCard = () => {
  return (
    <div className="row mt-lg-5">
    <div className="col-lg-4 col-sm-12 responsive">
        <div className='card_head1 mb-3'>
        <span>Choose a wallet</span>
        </div>

    </div>
    <div className="col-lg-4 col-sm-12 mt-lg-5 responsive">
        <div className='card_head2 mb-3'>
        <span>Choose staking platform</span>
        </div>
    </div>
    <div className="col-lg-4 col-sm-12 responsive mb-5">
    <div className='card_head3'>
        <span>Select staking seed node operator (SSN)</span>
        </div>
    
    </div>
</div>
  )
}

export default ResCard
