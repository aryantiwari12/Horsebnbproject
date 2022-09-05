import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import heneceforthApi from '../henceforthApi';



const Calendarandavailabilityhost = () => {

    const [agree, setAgree] = useState(false);

    const match = useMatch('/create-guest/sucessfull-hosting/:id')

    const handleChange = () => {

        setAgree(!agree);

    }

    const calendardata = async () => {

        let res = await heneceforthApi.Auth.Updatedlisting({
            id: match.params.id,
            publicData: {
                gotIt: agree,
                stepsCompleted: []
            }
        })

    }



    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
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

                            <button class="text-primary border-0 bg-white fs-3" type="submit">Save & Exit</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center p-5">
                <div class="row gx-5">
                    <div class="col p-5">
                        <div class="p-3 ">
                            <p className='text-start fs-3'>Successful hosting starts with an accurate calendar</p>
                            <p className='text-start'>Guests will be able to book your listing instantly. By keeping your calendar up to date you will only get bookings when you are able to host. If you make multiple cancellations it could affect your listings ranking and create negative reviews as it causes problems for travellers. .</p>
                        </div>
                        <div className='text-start'>
                            <input type="checkbox" className='' name="languages" id="flexCheckDefault" value="" onChange={handleChange} ></input>
                            <label className='ms-2 fw-bold' htmlFor="flexCheckDefault">Got it! l'll Keep my calendar up to date</label>
                            <hr />
                        </div>
                        <div className='mt-2'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>
                            <p className='float-start p-2' role="button">Back</p>
                            <Link to={`/create-guest/step11/1/${match?.params.id}`}>
                                <button className='float-end border-0 bg-primary  p-2 text-white' onClick={calendardata}>Next</button>
                            </Link>
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/guest_steps.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendarandavailabilityhost