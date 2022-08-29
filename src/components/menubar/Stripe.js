import React from 'react'
import { Link } from 'react-router-dom'

const Stripe = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
          <span className='fs-3 ms-2'>Stripe Connect</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form class="d-flex" role="search">

              <button class="text-primary border-0 bg-white fs-3" type="submit">Save & Exit</button>
            </form>
          </div>
        </div>
      </nav>
      <div class="container px-4 text-center p-5">
        <div class="row gx-5 p-5">
          <div class="col ">
            <div class="p-3 h-100">
              <p className='text-start'>Connect with Stripe to accept payments</p>
              <div className='text-start'>
                <button className='bg-success text-white'>s</button>
                <button className='bg-success text-white'>Connect with stripe</button>
                <Link to="/create-stall/last-step/772">
                <button className='float-end bg-primary text-white'>Skip for Now</button>
                </Link>
              </div>
             
            </div>
           
            <div className='mt-5'>
              <i class="fa-solid fa-angle-left float-start" role="button"></i>
              <p className='float-start p-2' role="button">Back</p>

              <button className='float-end border-0 bg-primary  p-2 text-white' >Next</button>

            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              <img src="https://horsebnb.com:8081/assets/img/stripe_payments.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stripe