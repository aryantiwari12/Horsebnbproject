import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const Stripeadventure = () => {

    const match = useMatch('/add-experience/step9/:id')

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2 '>Stripe Connect</span>
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
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
            </div>
            <div class="container px-4 text-center p-5">
                <div class="row gx-5 p-5">
                    <div class="col ">
                        <div class="p-3 h-100">
                            <p className='text-start fw-bold fs-3'>Connect with Stripe to accept payments</p>
                            <div className='text-start'>
                               <button className='border-0 bg-white'>
                                    <img src="https://horsebnb.com:8081/assets/img/connect_stripe_buttin.png"/>
                                </button>
                                <Link to={`/add-experience/last-step/${match?.params.id}`}>
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
                    <div class="col-md-6 text-center px-md-0 d-none d-md-block">
                        <div class="p-3  bg-light">
                            <img src="https://horsebnb.com:8081/assets/img/stripe_payments.svg" height="350px"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stripeadventure