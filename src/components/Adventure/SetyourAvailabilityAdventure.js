import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'


const SetyourAvailabilityAdventure = () => {

    const match = useMatch('/add-experience/step7/:id')
    const weeks = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday']
    const Time = ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM']

    const [showtime,setshowtime]=useState(false)

    const addtime=()=>{
        setshowtime(true)
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Settings</span>
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
                        <div className=''>
                            <h2 className='text-start'>Set your Availability</h2>
                            <p className='text-start'>As a host it is very important that you keep your availability accurate.</p>
                            <button className='bg-success float-start border-0 p-2 text-white'>Single Day slots</button><br /><br />
                            <p className='text-start'>Slot Size (In Hours)</p>
                            <input type="text" className='float-start from-control' placeholder='Please Enter Size..' /><br /><br />
                            <p className='text-start'>Set Schedule</p>
                        </div>
                        <div class="p-3 border bg-light mt-2 ">
                            {weeks.map((items) => {
                                return (
                                    <>
                                        <div className='text-start'>

                                            <input type="checkbox" className='ms-2' />
                                            <span className='ms-2'>{items}</span>
                                            <span className='float-end text-success' role="button" data-bs-toggle="modal" data-bs-target="#exampleModal9"><i class="fa-solid fa-plus text-success" role="button" ></i> Add time slots</span>

                                        </div>

                                    </>
                                )
                            })}

                            <div class="modal fade" id="exampleModal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 className="modal-title text-center" id="exampleModalLabel9">Add Time Slots</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body d-flex ">
                                            <select class="form-select w-100" aria-label="Default select example">
                                                <option selected>Select Time</option>
                                                {Time.map((time) => {
                                                    return (
                                                        <>
                                                            <option value="1">Start Time:{time}</option>
                                                        </>
                                                    )
                                                })}


                                            </select>
                                            <select class="form-select w-100 ms-5" aria-label="Default select example">
                                                <option selected>Select Time</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className='ms-5 rounded w-50 border bg-success text-white' onClick={addtime}>Add</button>
                                            

                                        </div>
                                        <div className='d-flex p-2'>
                                        <input type="text" className='w-100 p-2 ms-3'/>
                                        <input type="text" className='w-100 p-2 ms-3'/>
                                        <button className='ms-5'>Remove</button>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="col mt-5">
                        <div class="p-3 border bg-light float-start">
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='float-start' /><br /><br />
                            <p className='text-start'>Important! Your calendar default set up is to show as available for the next 90 days. If you are unable to host any of those days please make sure to block off those days on your calendar so you don’t get any unwanted bookings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetyourAvailabilityAdventure