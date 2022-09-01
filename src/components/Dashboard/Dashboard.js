import React from 'react'
import IMAGE from "../../IMG/dashboard.png"
import IMAGE1 from "../../IMG/bookings.png"
import IMAGE2 from "../../IMG/reviews.png"
import IMAGE3 from "../../IMG/transaction.png"
import IMAGE4 from "../../IMG/bookings_dashboard.png"
import IMAGE5 from "../../IMG/earnings_dashboard.png"
import IMAGE6 from "../../IMG/reviews_dashboard.png"
import "../Dashboard/dash.css"


const Dashboard = () => {
    return (
        <div className='bg-secondary'>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-md-4 col-lg-3 d-none d-lg-block border mt-2 bg-white '>
                        <div className='pb-4 mb-5'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div className='side-img'>
                                    <img src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Medium/1661321925158-video.png" className='w-50' />

                                </div>
                                <div className=''>
                                    <h3 className='mt-2'>hencemohali forth</h3>
                                    <p className='text-success fw-bold' role="button">Service Provider</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <ul>
                            <li><img src={IMAGE} /> Dashboard</li>
                            <li><img src={IMAGE1} /> Bookings</li>
                            <li><img src={IMAGE2} /> Reviews</li>
                            <li><img src={IMAGE3} />Transactions</li>
                        </ul>
                    </div>
                    <div className='col-md-8 bg-white ms-5'>
                        <p className='mt-5 fw-bold fs-3'>Dashboard</p>
                        <hr />
                        <div className='row '>
                            <div className='col-3 ms-5 border rounded P-5'>
                                <p className='fw-bold'>BOOKINGS</p>
                                <img src={IMAGE4} />
                                <span className='ms-5 text-success'>0</span>
                                <p className='fw-bold text-success mt-2'>See all Bookings</p>
                            </div>
                            <div className='col-3 ms-5 border rounded'>
                                <p className='fw-bold'>EARNINGS</p>
                                <img src={IMAGE5} />
                                <span className='ms text-success ms-5 '>0</span>
                                <p className='fw-bold text-success mt-2'>See all Earning</p>
                            </div>
                            <div className='col-3 ms-5 border rounded'>
                                <p className='fw-bold'>REVIEWS</p>
                                <img src={IMAGE6} />
                                <span className='ms text-success ms-5 '>0</span>
                                <p className='fw-bold text-success mt-2'>See all Reviews</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='row p-5'>
                    <div className='col-md-4 col-lg-3 d-none d-lg-block mt-2  '></div>
                    <div className='col-md-8 bg-white ms-5 p-5'>
                        <div className='d-flex '>
                            <p className='p-2 flex-grow-1 fw-bold fs-4'>Bookings</p>
                            <button className='p-2 border-0 p-2 bg-success text-white rounded'>View all Bookings</button>
                            
                        </div>
                        <hr/>
                        <img src="https://horsebnb.com:8081/assets/img/data.png" className='mx-auto d-block'/>
                        <p className='text-center mt-2'>You have no bookings yet.</p>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-md-4 col-lg-3 d-none d-lg-block mt-2  '></div>
                    <div className='col-md-8 bg-white ms-5 p-5'>
                        <div className='d-flex '>
                            <p className='p-2 flex-grow-1 fw-bold fs-4'>Earnings</p>
                            <button className='p-2 border-0  bg-success text-white rounded'>View all Earnings</button>
                            
                        </div>
                        <hr/>
                        <div className='d-flex align-item-center justify-content-between'>
                             <p>SENDER’S NAME</p>
                             <p>TRANSACTION ID</p>
                             <p>DATE & TIME</p>
                             <p>AMOUNT</p>
                        </div>
                       
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-md-4 col-lg-3 d-none d-lg-block mt-2  '></div>
                    <div className='col-md-8 bg-white ms-5 p-5'>
                        <div className='d-flex '>
                            <p className='p-2 flex-grow-1 fw-bold fs-4'>Reviews</p>
                            <button className='p-2 border-0  bg-success text-white rounded'>View all Reviews</button>
                            
                        </div>
                        <hr/>
                         <img src="https://horsebnb.com:8081/assets/img/no_reviews.svg" className='mx-auto d-block'/>
                         <p className='text-center mt-2'>No one has reviewed you yet.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard