import React, { useState, useEffect } from 'react'
import { Link, useMatch } from 'react-router-dom';
import henceforthApi from '../henceforthApi';
import Error from "../../IMG/error.png"
import check from "../../IMG/check-circle-primary.svg"


const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

const Finish = () => {

    const finish = ['Title', 'Stalls', 'Location', 'Amenities', 'Photos', 'Description', 'Profile Photo', 'Check in and Check out', 'Agreement', 'Calendar Availability', 'Pricing']

    const match = useMatch('/create-stall/last-step/:id')

    const [data, setdata] = useState("")
    const showalldata = async () => {
        let res = await henceforthApi.Auth.Listid(match?.params.id)
        setdata(res.data)
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
                    <img src="https://horsebnb.com:8081/assets/img/logo_new.svg" />

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
                <div class="row gx-5 p-5">
                    <div class="col">
                        <div class="p-3 ">
                            <p className='text-start fs-2'>Finish your listing to start <br />earning..</p>
                            <p className='text-secondary text-start'>You can always edit your listing after you publish it.</p>


                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>
                                    {data?.attributes?.title ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Title</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.stalls ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Stalls</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.address?.location ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Location</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.amenities[0] ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Amenities</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.cover_photo ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Photos</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.description ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Description</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.host_image ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Profile Photo</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.arrive_after && data?.attributes?.publicData?.arrive_before ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Check in and Check out</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.gotIt ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Agreement</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    {data?.attributes?.publicData?.daysToBlock[0] ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Calendar Availability</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>


                                    {data?.attributes?.price ? <img src={check} /> : <img src={Error} />}
                                    <span className='ms-2' role="button">Pricing</span>
                                </p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between '>
                                <p className='font-medium-bold text-black  d-flex align-items-center my-2 text-decoration-underline'>

                                    <img src={Error} />
                                    <span className='ms-2' role="button">Stripe Connect</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <img src='https://horsebnb.com:8081/assets/img/create-stalls/finish_your_listing.svg'></img>
                        </div>
                        <div className='border bg-light w-50 ms-5 mt-5'>
                            <div className='row p-2'>
                                <div className='col-6 mt-2'>
                                    <p>{`${data?.attributes?.title}`}</p>
                                    <Link to={`/booking-details/${data?.id?.uuid};isFromPreview=${data?.attributes?.publicData?.type}`}>
                                        <p className='fs-4 text-success' role="button">Preview</p>
                                    </Link>
                                </div>
                                <div className='col-6 mt-2'>
                                    <img src={`${imageurl}${data?.attributes?.publicData?.cover_photo?.url}`} className='rounded w-100 h-100'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-5' />
                    <div className='mt-2'>
                        <i class="fa-solid fa-angle-left float-start" role="button"></i>

                        <p className='float-start p-2' role="button">Back</p>

                        <Link to={`/manage-listing/publish-listing/${match?.params.id}`}>
                            <button className='float-end border-0 badge-primary p-2 text-white' >Next</button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Finish