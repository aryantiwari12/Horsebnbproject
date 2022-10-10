import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi'


const PricingAdventure = () => {

  

    const match = useMatch(`/add-experience/step8/:id`)


    const [typedata,settypedata]=useState("")
    const [pricedata,setpricedata]=useState("")

    const adventureprice=async()=>{

        let res = await henceforthApi.Auth.Updatedlisting({
              id:match.params.id,
              price:{amount:pricedata*113,
                currency:"USD"
            },
            publicData:{stepsCompleted:[1, 2, 4, 5, 6, 7, 20, 8, 8],
                listing_price:pricedata,
                bookingAcceptType:"",
                guestPay:"",
                youEarn:"",
            }
           

        })

    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_experience.svg" />
                    <span className='fs-3 ms-2'>Pricing</span>
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
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
            </div>
            <div className='row mx-0 p-5'>
                <div className='col-lg-6 py-5  steps-frame-height overflow-scroll '>
                    <div className='ms-5  '>

                        <p className='fs-3'>Price your stall.</p>
                        <p>This will be your nightly price per stall</p>
                        <div class="input-group mb-3 w-75">
                            <span class="input-group-text">$</span>
                            <input type="number" placeholder='0' onChange={(e)=>{setpricedata(e.target.value);{console.log(e.target.value)}}}/>
                        </div>
                    </div>
                    <div className=''>
                        <p className='ms-5'>Do you want to allow guests to make instant bookings?</p>
                        <div class="form-check ms-5">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" className='ms-2' for="flexRadioDefault1" >
                                Yes
                            </label>

                        </div>
                        <div class="form-check ms-5">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" className='ms-2' for="flexRadioDefault1">
                                No
                            </label>

                        </div>
                        <hr className='ms-4' />
                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>
                            <p className='float-start p-2' role="button">Back</p>
                            <Link  to={`/add-experience/step9/${match.params.id}`}>
                                <button className='float-end border-0 bg-primary  p-2 text-white' onClick={adventureprice}>Next</button>
                            </Link>
                        </div>
                    </div>

                </div>


                <div className='col-md-6 px-md-0 d-none d-lg-block bg-light mt-5 p-5'>
                    <div className='  p-5'>
                        <img src="https://horsebnb.com:8081/assets/img/experience.png" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingAdventure