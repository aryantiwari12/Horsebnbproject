import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom';
import Common from '../../utils/Common';
import heneceforthApi from '../henceforthApi';


const CheckInCheckhost = () => {


    const match = useMatch('/create-guest/checkin-and-checkout/:id')


    const [arive, setarrive] = useState("")
    const [Leave, setLeave] = useState("");

    const onChangeTime = (time) => {
        let timeWithAmPm = Common.hhmmToampm(time).toUpperCase()
        console.log("timeWithAmPm", timeWithAmPm);
        setarrive(timeWithAmPm)
        setLeave(timeWithAmPm)
    }

    const timedata = async () => {

        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: match.params.id,
                publicData: {
                    stepsCompleted: [],
                    arrive_after: arive,
                    arrive_before: Leave,

                }
            }
        )


    }







    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_experience.svg" />
                    <span className='fs-3 ms-2'>Check In / Check Out</span>
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
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col p-5">
                        <div class="p-3 border bg-light p-5">
                            <p className='text-start'>Check In & Check Out</p>
                            <p className='text-start'>Choose a time for Check-in and Check-out</p>
                            <div id="basic" >
                                <p className='text-start'>Arrive After</p>
                                <input type="time" onChange={(e) => onChangeTime(e.target.value)} className="w-100" />

                                <p className='text-start mt-5'>Leave Before</p>
                                <input type="time" className='float-start w-100' id="time" onChange={(e) => onChangeTime(e.target.value)} />
                                <hr />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>
                            <p className='float-start p-2' role="button">Back</p>
                            <Link to={`/create-guest/sucessfull-hosting/${match?.params.id}`}>
                                <button className='float-end border-0 bg-primary  p-2 text-white' onClick={timedata} >Next</button>
                            </Link>
                        </div>
                    </div>

                    <div class="col p-5">
                        <div class=" p-5">
                            <img src="https://horsebnb.com:8081/assets/img/guest_steps.png" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckInCheckhost