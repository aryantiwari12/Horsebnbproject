import React from 'react'
import { Link } from 'react-router-dom';

const Payments = () => {
  return (
    <div>
      <div className='container'>
        <div className='mt-5'>
          <Link to="/myaccounts">
            <h6 className='text-start'>Account</h6>
          </Link>
          <i class="fa-solid fa-angle-right text"></i>
          <p className='text-center'>Payments</p>
          <h1 className='heading-large mt-0 mb-5 text-black line-height-space'>Payments</h1>
          <div className='row justify-content-md-between"'>
            <div className='col-md-7 col-lg-7'>
              <h3 className='fs-2 text-black'>Payout methods</h3>
              <p>Please connect your account with Stripe. This will be a deposit
                only account and you will never be charged or debited any funds.
                Your funds will be direct deposited into your account once your reservation has completed.
                
              </p>
              <button className='bg-success text-white p-2 border-0'>Connect with stripe</button>
            </div>
            <div className='col-md-5 col-lg-4 '>
              <div className="border px-4 py-3 mb-4">
                  <img src="https://horsebnb.com/assets/img/line.svg"></img>
                  <p className='fs-4 text-black mt-2'>HorseBnB Payments</p>
                  <p>Always pay and communicate through HorseBnB to ensure you’re 
                    protected under our <span className='text-success'>Terms of Service,</span> cancellation, and other safeguards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments