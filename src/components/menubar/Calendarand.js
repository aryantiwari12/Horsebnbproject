import React from 'react'

const Calendarand = () => {

    const months = ['September 2022', 'October 2022', 'November 2022', 'December 2022', 'January 2023', 'February 2023', 'March 2023', 'April 2023', 'May 2023', 'June 2023', 'July 2023']

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_experience.svg" />
                    <span className='fs-3 ms-2'>Calendar and availability</span>
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
            <div className='container'>
                <div className='row p-5 mt-5'>
                    <div className='col-lg-7 '>
                        <p className='fw-bold fs-3'>Keep your Calendar accurate</p>
                        <p className=''>Block off any months that are unavailable .</p>
                        <div className='row gap-3 overflow-scroll'>
                        {months.map(names => {
                            return (
                                <>
                                <div className='col-lg-5 border p-5 me-5'>
                                            <div className='d-flex align-items-center'>
                                                  <img src="https://horsebnb.com:8081/assets/img/calendar.svg" className='me-5'></img>
                                                <p className='mb-0'>{names}</p>
                                            </div>

                                            <h6 className='text-end mt-2' role="button">Block this month</h6>
                                        </div>
                                </>
                            )
                        })}
                        </div>




                    </div>
                    <div className='col  h-50 mt-5 '>
                        <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='mt-5'></img>
                        <p className='mt-2'>Guests can book available<br/> months up to 3 months in advance.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Calendarand