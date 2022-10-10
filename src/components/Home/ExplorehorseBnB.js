import React, { useState, useEffect } from 'react'
import { Button } from 'rsuite'
import IMAGE from "../../IMG/Screenshot (10).png"
import IMAGE1 from "../../IMG/arrow_right.png";
import { Link, useParams } from 'react-router-dom';


import "../Home/home.css";
import henceforthApi from '../henceforthApi';

const ExplorehorseBnB = () => {


    const match = useParams('/search')

    const [typedata, settypedata] = useState()

    // const showalllsiting=async()=>{

    //     try{

    //         let api=await henceforthApi.Auth.getalllisting()
    //         settypedata(api.data[0].attributes.publicData.type)
    //         console.log(typedata)

    //     }catch{
    //            console.log("error")
    //     }

    // }
    // console.log(data.api.data[0].attributes.publicData.type)

    // useEffect(() => {
    //     return () => {
    //        showalllsiting()
    //     };
    // }, [])


    return (
        <div>

            <div className='container  text-start mt-5'>
                <p className='fs-2'>Explore HorseBnB</p>
                <div className='row'>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/change_short_term_stalls.jpg" className='rounded w-100'></img>
                            <div className='d-flex justify-content-between p-2 shadow'>
                                <Link to={`/Search/1?pub_type=1`}>
                                    <span className='text-black font-small fw-bold' role="button">Short Term Stalls</span>
                                </Link>
                                <span className='d-flex align-items-center '>
                                    <Link to="/Search/1?pub_type=1">
                                        <i class="fa-solid fs-6 text-success fa-circle-arrow-right" role="button"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4  mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/monthly_board_home.jpg" className='rounded w-100'></img>
                            <div className='d-flex justify-content-between p-2 shadow'>
                                <Link to={"/Search/2?pub_type=2"}>
                                    <span className='text-black font-small fw-bold' role="button">Monthly Board</span>
                                </Link>
                                <span className='d-flex align-items-center '>
                                    <Link to={"/Search/2?pub_type=2"}>
                                        <i class="fa-solid fs-6 text-success fa-circle-arrow-right" role="button"></i>
                                    </Link>
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4  mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/home/guest_large.jpeg" className='rounded w-100 '></img>
                            <div className='d-flex justify-content-between p-2'>
                                <Link to={'/Search/3?pub_type=3'}>
                                    <span className='text-black font-small fw-bold'>Guest Accommodations</span>
                                </Link>
                                <span className='d-flex align-items-center '>
                                    <Link to={'/Search/3?pub_type=3'}>
                                        <i class="fa-solid fs-6 text-success fa-circle-arrow-right"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <Link to="/Search/4?pub_type=4">
                                <img src="https://horsebnb.com/assets/img/home/exp_large.jpg" className='rounded w-100'></img>
                                <div className='d-flex justify-content-between p-2'>
                                    <span className='text-black font-small fw-bold'>Horse Adventure & Equine Actitives</span>
                                    <span className='d-flex align-items-center '>
                                        <i class="fa-solid fs-6 text-success fa-circle-arrow-right"></i>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ExplorehorseBnB