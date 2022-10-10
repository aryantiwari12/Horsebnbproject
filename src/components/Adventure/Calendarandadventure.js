import React from 'react'
import Calendar from 'react-calendar';
import { Link, useMatch } from 'react-router-dom';


const Calendarandadventure = () => {

    const match = useMatch(`/add-experience/calender-availability/:id`)

    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Calendar and availability</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">

                            <button class=" border-0 bg-white text-primary fs-3">Save & Exit</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col p-5">

                        <div class="p-3 ">
                            <Calendar />
                        </div>
                        <hr/>
                        <div className='row mx-0 h-100 '>
                            <div className='col-md-6 py-5 steps-frame-height  d-flex flex-column'>
                                <div className='mt-2'>
                                    <i class="fa-solid fa-angle-left float-start" role="button"></i>
                                    <p className='float-start p-2' role="button">Back</p>
                                    <Link to={`/add-experience/step8/${match?.params.id}`}>
                                        <button className='float-end border-0 bg-primary  p-2 text-white ms-5'>Next</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3 border bg-light h-50">
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='float-start ' /><br /><br />
                            <p className='text-start'>Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don’t get any unwanted bookings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendarandadventure