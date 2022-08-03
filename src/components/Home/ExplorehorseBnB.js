import React from 'react'
import { Button } from 'rsuite'
import IMAGE from "../../IMG/Screenshot (10).png"
import IMAGE1 from "../../IMG/arrow_right.png";
const ExplorehorseBnB = () => {
    return (
        <div>

            <div className='container  text-start mt-5'>
                <p className='fs-2'>Explore HorseBnB</p>
                <div className='row'>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/change_short_term_stalls.jpg" className='rounded w-100'></img>
                            <div className='d-flex justify-content-between p-2'>
                                <span className='text-black font-small fw-600'>Short Term Stalls</span>
                                <span className='d-flex align-items-center '>
                                <i class="fa-solid fa-circle-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/monthly_board_home.jpg" className='rounded w-100'></img>
                            <div className='d-flex justify-content-between p-2'>
                                <span className='text-black font-small fw-600'>Short Term Stalls</span>
                                <span className='d-flex align-items-center '>
                                <i class="fa-solid fa-circle-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/home/guest_large.jpeg" className='rounded w-100 '></img>
                            <div className='d-flex justify-content-between p-2'>
                                <span className='text-black font-small fw-600'>Short Term Stalls</span>
                                <span className='d-flex align-items-center '>
                                <i class="fa-solid fa-circle-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.com/assets/img/home/exp_large.jpg" className='rounded w-100'></img>
                            <div className='d-flex justify-content-between p-2'>
                                <span className='text-black font-small fw-600'>Short Term Stalls</span>
                                <span className='d-flex align-items-center '>
                                <i class="fa-solid fa-circle-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ExplorehorseBnB