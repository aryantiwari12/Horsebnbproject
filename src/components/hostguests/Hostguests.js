import React from 'react'
import { Link } from 'react-router-dom'
import IMAGE1 from '../../IMG/ready_to_learn.svg'
import IMAGE from '../../IMG/explore_one.png'

const Hostguests = () => {

    // const match = useMatch('/create-guest/step3/:id')


    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_new.svg"></img>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search">
                            <Link to="/create-guest/step1">
                                <button className='bg-primary rounded p-2 text-white border-0' type="submit">Get Started</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='mt-5'>
                <img src={IMAGE} className="w-100" />
                <p className='fw-bold fs-1 text-white position-absolute top-50 start-50 translate-middle text-center opacity-100'>Learn more about hosting with HorseBnB Accommodations</p>

            </div>
            <Link to="create-guest/step1"></Link>
            <button className='btn btn-outline-secondary fs-4 position-absolute top-50 start-50 mt-5 ms-5 text-white border border-secondary p-2'>Get Started</button>
            <div className='row justify-content-between'>
                <div className='col-md-5 mt-5 mx-auto'>
                    <div className='border rounded  p-5 h-100 text-center'>
                        <h3 className='text-center mt-2 p-5'>Why host on <span className='text-success'>HorseBnB</span></h3>
                        <p className='mx-auto '>Host travelers with a guest accommodation listing on HorseBnB.
                            You choose the availability, pricing and how you interact with guests.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-center mt-5 fs-1'>Hosting in 3 steps</h1>
                <hr className='w-25 mx-auto text-success fw-bold' />
            </div>

            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col ">
                        <div class="p-5 border bg-light position-relative h-100">
                            <img src="https://horsebnb.com:8081/assets/img/host-check-round.svg" className='position-absolute top-0 start-0 p-2 '></img>
                            <h4 className='fw-bold'>CREATE AN ACCOUNT</h4>
                            <p>Create an account using your email address and contact information on the HorseBnB website.</p>
                        </div>
                    </div>
                    <div class="col h-50">
                        <div class="p-5 border bg-light position-relative">
                            <img src="https://horsebnb.com:8081/assets/img/host-check-round.svg" className='position-absolute top-0 start-0 p-2 '></img>
                            <h4 className='fw-bold'>MAKE A LISTING</h4>
                            <p>Take a few pictures and write up a brief description of your facility. Include as much information as you can so the guests can see exactly what you have to offer.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-5 border bg-light h-100 position-relative">
                            <img src="https://horsebnb.com:8081/assets/img/host-check-round.svg" className='position-absolute top-0 start-0 p-2 '></img>
                            <h4 className='text-start fw-bold'>START EARNING MONEY</h4>
                            <p>Start hosting other horse lovers and taking advantage of the HorseBnB platform. You can meet new friends and earn extra income at the same time!</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='position-absolute float-end fs-1 text-white'>Ready to earn ?</p>

            <button className='position-absolute bg-white border-0 p-2'>Get Started</button>

            <div className='h-100 '>
                <div className='bg-primary mt-5 h-100'>
                    <img src={IMAGE1} className="mt-5 " />

                </div>

            </div>

        </div>
    )
}

export default Hostguests