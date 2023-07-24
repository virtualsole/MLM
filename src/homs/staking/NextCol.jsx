import React from 'react'

const NextCol = () => {
  return (
        <div className="hight_next p-5">
                <h1><span style={{borderBottom: "5px solid #29ccc4"}}>Staking</span> Basics</h1>

                <h3 className='text-dark fw-bold mt-5'>What is staking?</h3>
                
                <p className='mt-5'>Staking allows you to earn rewards for holding tokens on a blockchain network.</p>
                <p className='mt-2'>It requires users to "stake" their tokens with nodes to provide certain services to the network. In return, you will get block rewards.</p>
                <p className='mt-2'>Staking derives its consensus from a mechanism called Proof of Stake (PoS). A consensus mechanism means the way that a blockchain network agrees on valid transactions.</p>
                <p className='mt-2 mb-3'>You will frequently see PoS, stake, and staking used interchangeably.</p>
            


                <h3 className='text-dark fw-bold mt-5'>How does staking benefit me?</h3>
                
                <p className='mt-5'>Staking VRC is a great way to put your VRC to use and earn rewards while contributing to the network.</p>
                <p className='mt-2 mb-3'>The annual percentage return (APR) for staking depends on the total amount of VRC in circulation at any given time.</p>

                <h3 className='text-dark fw-bold mt-5'>What is a seed node?</h3>
                
                <p className='mt-5'>A seed node is a specific node that logs the history of the blockchain network. It allows other seed nodes to locate and synchronise the blockchain's data so more nodes can join.</p>
                <p className='mt-2 mb-3'>Virtual uniquely relies on a combination of Proof of Work (PoW) and Practical Byzantine Fault Tolerance (PBFT). It further uses staking to incentivise "seed nodes" to join the network.</p>
        </div>
  )
}

export default NextCol