import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useMatch } from 'react-router-dom'
import heneceforthApi from '../henceforthApi'


heneceforthApi.setToken(localStorage.getItem("token"))
let id = (localStorage.getItem('id'))

const Pricestall = () => {

    const [pricedata, setpricedata] = useState()
    const match = useMatch('/create-stall/step12/:id')

    const priceupdate = async () => {

        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: id,
                price: {
                    amount: pricedata * 113,
                    currency: "USD",
                },
                publicData: {
                    bookingAcceptType: 1,
                    listing_price: pricedata,
                    room_price: 0,
                    stepsCompleted: [1, 3, 5, 6, 7, 8, 9, 14, 15, 11, 12, 12, 11, 12, 12]
                }
            }
        )

    }
    const showalldata=async()=>{
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
            <div className='row mx-0 p-5'>
                <div className='col-lg-6 py-5  steps-frame-height overflow-scroll'>
                    <div className='ms-5'>
                        <p className='fs-3'>Price your stall.</p>
                        <p>This will be your nightly price per stall</p>
                        <div class="input-group mb-3 w-75">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={(e) => setpricedata(e.target.value)} />
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
                            <Link to={`/create-stall/step13/${match?.params.id}`}>
                                <button className='float-end border-0 bg-primary  p-2 text-white' onClick={priceupdate}>Next</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-md-6 px-md-0 d-none d-lg-block mt-5 p-5'>
                    <div className='border w-75 p-5'>
                        <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" />
                        <p className='fs-3'>Start with a lower price to attract bookings</p>
                        <p>We suggest starting with a competitive price as you are new to the website. This will help you develop a good reputation and get some guest reviews to help with future bookings.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricestall