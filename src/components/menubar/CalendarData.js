import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { Link,useMatch } from 'react-router-dom';
const CalendarData = () => {


    const match = useMatch('/create-stall/step11/1/:id')
    const [date, setDate] = useState(new Date());

    const calenderpass = () => {



    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_experience.svg" />
                    <span className='fs-3 ms-2'>Calendar and availability</span>
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
            <div className=''>
                <div className='row mx-0 h-100 p-5 '>
                    <div className='col-md-6 py-5 steps-frame-height  d-flex flex-column overflow-scroll '>
                        <div className='p-0 d-flex flex-column flex-lg-row flex-grow-1'>
                            <div className='col-lg-8 col-md-12 px-0 mx-auto'>
                                <h4>Set your availability</h4>
                                <div className='react-calendar'>
                                    <Calendar
                                        onChange={setDate}
                                        value={date}
                                        selectRange={true}
                                        minDate={moment().toDate()}


                                    />

                                </div>
                            </div>
                            <div className='col-lg-4 mt-5 mt-lg-0 '>
                                <div className='d-flex align-items-center border'>
                                    <img src="https://horsebnb.com:8081/assets/img/calendar.svg" className='me-5'></img>
                                    <p className='mb-0'>dffd</p>
                                </div>

                                <h6 className='text-end mt-2' role="button">Block this month</h6>
                                <button >clcik</button>
                            </div>

                        </div>

                    </div>

                    <div className='col-md-6 px-md-0 d-none d-md-block mt-5 p-5'>
                        <div className='border w-50 p-2'>
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg"></img>
                            <p className='mt-2'>Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don’t get any unwanted bookings.</p>
                        </div>
                    </div>

                </div>
                <div className='row mx-0 h-100 '>
                    <div className='col-md-6 py-5 steps-frame-height  d-flex flex-column'>
                        <div className='mt-2'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>
                            <p className='float-start p-2' role="button">Back</p>
                            <Link to="/create-stall/step12/772">
                                <button className='float-end border-0 bg-primary  p-2 text-white'>Next</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CalendarData