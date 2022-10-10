import React, { useState, useRef, useEffect } from 'react'
import { Link, useMatch } from 'react-router-dom';
import { TimepickerUI } from 'timepicker-ui';
import Common from '../../utils/Common';
import heneceforthApi from '../henceforthApi';


heneceforthApi.setToken(localStorage.getItem("token"))
let id = (localStorage.getItem('id'))


const CheckinCheckout = () => {


    const match = useMatch('/create-stall/checkin-and-checkout/:id')
    const [arive, setarrive] = useState("")
    const [Leave, setLeave] = useState("");

    const timedata = async () => {

        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: id,
                publicData: {
                    stepsCompleted: [],
                    arrive_after: arive,
                    arrive_before: Leave,

                }
            }
        )


    }
    const onChangeTime = (time) => {
        let timeWithAmPm = Common.hhmmToampm(time).toUpperCase()
        console.log("timeWithAmPm", timeWithAmPm);
       
        setLeave(timeWithAmPm)
    }
    const onChange1Time = (time) => {
        let timeWithAmPm = Common.hhmmToampm(time).toUpperCase()
        console.log("timeWithAmPm", timeWithAmPm);
        setarrive(timeWithAmPm)
    }
    console.log(arive);
    console.log(Leave);
    const showalldata = async () => {
        let res = await heneceforthApi.Auth.Listid(match?.params.id)
        console.log(match.params.id)
    }
    useEffect(() => {
        return () => {
            showalldata()
        };
    }, [])

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
            <div class="container px-4 text-center mt-5">
                <div class="row gx-5 p-5">
                    <div class="col">
                        <div class="p-3 ">
                            <p className='text-start fw-bold fs-3'>Check In & Check Out</p>
                            <p className='text-start '>Choose a time for Check-in and Check-out</p>

                            <div id="basic" >
                                <p className='text-start'>Arrive After</p>
                                <input type="time" onChange={(e) =>onChange1Time(e.target.value)} className="w-100" />

                                <p className='text-start mt-5'>Leave Before</p>
                                <input type="time" className='float-start w-100' id="time" onChange={(e) => onChangeTime(e.target.value)} />
                                <hr />
                            </div>



                        </div>

                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>
                            <p className='float-start p-2' role="button">Back</p>
                            <Link to={`/create-stall/sucessfull-hosting/${match?.params.id}`}>
                                <button className='float-end border-0 badge-primary p-2 text-white' onClick={timedata}>Next</button>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <img src="https://horsebnb.com:8081/assets/img/create-stalls/horse_image.png"></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CheckinCheckout