import React from 'react'

const Monthly = () => {
    return (
        <div>
            <div className='container mt-5 text-start'>
                <h4 className='fs-2'>Monthly stabling for your horse</h4>
                <p className='fs-5'>Find monthly boarding facilities</p>
                <div className='w-100 montly position-relative'>
                    <img src="https://horsebnb.com/assets/img/no_monthly_banner.png" className='w-100 rounded'/>
                    <div className=''>
                        <button className='Explorr position-absolute w-25 rounded p-2 border-0'>EXPLORE BOARDING FACILITIES <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6 col-lg-3 mb-4 mb-lg-0 cursor-pointer'>
                        <div className=''>
                            <img src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Medium/1658357333865-file.jpeg" className='rounded w-100'></img>
                            <div className=' justify-content-between'>
                                <span className='text-black font-small fw-600' role="button">Pasture boarding nea…</span><br />
                                <p className='mt-2' role="button">Seeking out for a calm and safe</p>
                                <p className='nightt'>$250/Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='fs-4 text-success' role="button">Show all Monthly Boards  <i class="fa-solid fa-angle-right"></i></h4>
            </div>


        </div>
    )
}

export default Monthly