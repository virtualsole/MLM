import React from 'react'
import './staking.css'
import NextCol from './NextCol'
const Staking = () => {
  return (
  <section>
    <h1 className="text-center mt-5 stack__heading">
        Introduction to staking
</h1>

    <div className="row mt-5 gx-0">
        <div className="col-lg-3 col-md-3 ">
            <div className="bg-stak p-3 py-5 mb-2">
                <h1 className='page_heading mb-3'>On this page</h1>
                <h3 className='page_heading2'>Staking Basics</h3>
                <p className='text-light mt-4'>What is staking?</p>
                <p className='text-light mt-4'>How does staking benefit me?</p>
                <p className='text-light mt-4'>What is a seed node?</p>
                <p className='text-light mt-4'>What is a Staked Seed Node Operator (SSN)?</p>
                <p className='text-light mt-4'>What is a Delegator?</p>
                <p className='text-light mt-4 mb-3'>What SSN operator should I choose?</p>

                <h3 className='page_heading2'>Staking FAQs</h3>
                <p className='text-light mt-4'>What happens if a SSN operator fails?</p>
                <p className='text-light mt-4'>Can I switch SSN providers?</p>
                <p className='text-light mt-4'>Why is there a minimum lock-up period for my stake?</p>
                <p className='text-light mt-4'>Want to change the unbonding period?</p>
                <p className='text-light mt-4'>What is the minimum amount of VRC you require to stake?</p>
                <p className='text-light mt-4 mb-3'>What SSN operator should I choose?</p>

                <h3 className='page_heading2'>gVRC and Governance</h3>
                <p className='text-light mt-4 mb-5'>GVRC and Governance</p>
            </div>
            <div className="tab-bg">
            <select class="form-select" aria-label="Default select example">
  <option selected>On this page</option>
  <option value="1">What is staking?</option>
  <option value="2">How does staking benefit me?</option>
  <option value="3">What is a seed node?</option>
  <option value="4">What is a Staked Seed Node Operator (SSN)?</option>
  <option value="5">What is a Delegator?</option>
  <option value="6">What SSN operator should I choose?</option>
  <option value="7">What happens if a SSN operator fails?</option>
  <option value="8">Can I switch SSN providers?</option>
  <option value="9">Why is there a minimum lock-up period for my stake?</option>
  <option value="10">Want to change the unbonding period?</option>
</select>
            </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12">
            <NextCol />
        </div>
    </div>

  </section>
  )
}

export default Staking
