import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi'


const Settingability = () => {

    const match = useMatch('/add-experience/step10/:id')

    const singleday = async () => {

        // let res = await henceforthApi.Auth.Updatedlisting(
        //     {
        //         id: match.params.id,
        //         availabilityPlan: {
        //             type: "availability-plan/time",

        //         }
        //     }
        // )

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
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}></div>
            </div>
            <h1 className='text-center'>Select Availability Type</h1>
            <div class="container px-4 text-center">
                <div class="row gx-5 p-5">
                    <div class="col p-5">
                        <div class="p-3">
                            <Link to={`/add-experience/step7/${match.params.id}`}>
                                <i class="fa-regular fa-calendar-check fa-10x text-success" role="button" onClick={singleday}></i>
                                <p className='fs-2 mt-2 text-black' role="button" onClick={singleday}>Single Day Adventure</p>
                            </Link>
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3 ">
                            <Link to={`/add-experience/step11/${match.params.id}`}>
                                <i class="fa-solid fa-calendar-days fa-10x text-success" role="button"></i>
                                <p className='fs-2 mt-2 text-black' role="button">Multiple Day Adventure</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settingability