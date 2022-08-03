import React from 'react'

const Guestaccommodations = () => {
    return (
        <div>
            <div className='container mt-5 text-start'>
                <h4 className='fs-2'>Guest Accommodations</h4>
                <p className='fs-5'>Traveling with your horse? Find overnight accommodations for yourself</p>
                <div className='row'>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Medium/1657059530597-254037661_6921847441162426_3950369428450476728_n.jpg" className='rounded w-100'></img>
                            <div className=' justify-content-between'>
                                <span className='text-black font-small fw-600' role="button">RV Spaces on Horse f…</span><br />
                                <p className='mt-2' role="button">Park your RV on a beautiful horse</p>
                                <p className='nightt'>$35/Night</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='fs-4 text-success' role="button">Show all Guest Accommodations <i class="fa-solid fa-angle-right"></i></h4>
            </div>
        </div>
    )
}

export default Guestaccommodations