import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom';
import henceforthApi from '../henceforthApi';


let id = (localStorage.getItem('secondID'))

const Guests = () => {
    const match = useMatch('/create-guest/step3/:id')

    const [counter, setCounter] = useState(0)
    const minus = () => {
        if (counter <= 0) {
            return;
        }
        else {
            setCounter(counter - 1)
        }
    }
    const plus = () => {
        setCounter(counter + 1)
    }
    const changeingvalue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setCounter({
            ...counter,
            [name]: value
        })
        console.log(name)
        console.log(value)


    }
    const nextdata = async () => {

        let res = await henceforthApi.Auth.Updatedlisting(
            {
                id: match.params.id,
                availabilityPlan: {
                    type: "availability-plan/day",
                    entries: [
                        { dayOfWeek: "sun", seats: counter },
                        { dayOfWeek: "mon", seats: counter },
                        { dayOfWeek: "Tue", seats: counter },
                        { dayOfWeek: "wed", seats: counter },
                        { dayOfWeek: "thu", seats: counter },
                        { dayOfWeek: "fri", seats: counter },
                        { dayOfWeek: "sat", seats: counter },


                    ]
                },
                publicData: {
                    stalls: counter,
                    stepsCompleted: [counter]
                }
            }
        )


    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Guests</span>
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
            <div class="container px-4 text-center p-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <p className='fs-4 text-start fw-bold'>How many horses can your barn <br /> accommodate?</p>


                            <div class="modal-body text-start p-5">
                                Rooms
                                <i class="fa-solid fa-minus text-primary mt-2" role="button" onChange={changeingvalue} onClick={minus}></i>
                                <p className='zero' >{counter}</p>
                                <i class="fa-solid fa-plus text-primary mt-2" role="button" onChange={changeingvalue} onClick={plus}></i>
                            </div>
                            <p className='text-start'>Note : Occupancy of 2 guests in a room.</p>
                            <hr />
                            <div className=''>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>

                                <p className='float-start p-2' role="button">Back</p>

                                <Link to={`/create-guest/step5/${match?.params.id}`}>
                                    <button className='float-end border-0 bg-primary  p-2 text-white' onClick={nextdata}>Next</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-5 ">
                            <img src="https://horsebnb.com:8081/assets/img/guest_steps.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guests