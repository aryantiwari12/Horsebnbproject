import React from 'react'
import { useState, useEffect } from 'react'
import heneceforthApi from '../henceforthApi'



const imageurl="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/";

const Guestaccommodations = () => {


    const [Guestdata, setGuestdata] = useState([])

    const guestdata = async () => {

        let res = await heneceforthApi.Auth.Guestgetalllisting()
            .then((res) => {
                setGuestdata(res.data)
            })
    }

    useEffect(() => {
        return () => {
            guestdata()
        };
    }, [])



    return (
        <div>
            <div className='container mt-2 text-start'>
                <h4 className='fs-2'>Guest Accommodations</h4>
                <p className='fs-5'>Traveling with your horse? Find overnight accommodations for yourself</p>
                <div className='row'>
                    {Guestdata.map((userguest) => {
                        return (
                            <>
                                <div className='col-md-6 col-lg-3 mb-2 mb-lg-0 cursor-pointer'>
                                    <div className='w-100 h-50'>
                                        <img src={`${imageurl}${userguest.attributes?.publicData?.cover_photo?.url}`} className='rounded w-100 h-100'></img>
                                        <div className=' justify-content-between'>
                                            <span className='text-black font-small fw-600' role="button">{userguest?.attributes?.description.length >0? `${userguest?.attributes?.description.slice(0,40)}`:''}</span><br />
                                            <p className='mt-2' role="button">Park your RV on a beautiful horse</p>
                                            <p className='nightt'>$35/Night</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
                <h4 className='fs-4 text-success' role="button">Show all Guest Accommodations <i class="fa-solid fa-angle-right"></i></h4>
            </div>
        </div>
    )
}

export default Guestaccommodations