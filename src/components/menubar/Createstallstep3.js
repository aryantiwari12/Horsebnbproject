import React from 'react'
import "../menubar/Hoststalls.css";
import { useState, useEffect } from 'react';
import heneceforthApi from '../henceforthApi';
import { Link, useMatch } from 'react-router-dom';

// let id = (localStorage.getItem('id'))



const Createstallstep3 = () => {




    const match = useMatch('/create-stall/step3/:id')
    heneceforthApi.setToken(localStorage.getItem("token"))


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

        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: match.params.id,
                publicData: {
                    stalls: counter,
                    stepsCompleted: [counter]
                }
            }
        )


    }

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
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Stalls</span>
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
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "14%" }}></div>
            </div>

            <div class="container px-4 text-center p-5">

                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <p className='fs-4 text-start fw-bold'>How many horses can your barn <br /> accommodate?</p>
                            <p className='text-start'>Check that you have enough stalls.</p>

                            <div class="modal-body text-start p-5">
                                stalls
                                <i class="fa-solid fa-minus text-primary mt-2" role="button" onChange={changeingvalue} onClick={minus}></i>
                                <p className='zero' >{counter}</p>
                                <i class="fa-solid fa-plus text-primary mt-2" role="button" onChange={changeingvalue} onClick={plus}></i>
                            </div>
                            <hr />
                            <div className=''>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>
                                <Link to="/create-stall/step1">
                                    <p className='float-start p-2' role="button">Back</p>
                                </Link>
                                <Link to={`/create-stall/step5/${match?.params.id}`}>
                                    <button className='float-end border-0 badge-primary  p-2 text-white' onClick={nextdata}>Next</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/create-stalls/horse_image.png" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Createstallstep3