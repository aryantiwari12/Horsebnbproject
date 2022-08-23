import React from 'react'
import { useState, useEffect } from 'react'
import heneceforthApi from '../henceforthApi'


const imageurl = "https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/";

const Horseadventures = () => {


    const [adventures, setadventures] = useState([])

    const horse = async () => {
        let res = await heneceforthApi.Auth.Equestrian()
            .then((res) => {
                setadventures(res.data)
            })
    }

    useEffect(() => {
        return () => {
            horse()
        };
    }, [])



    return (
        <div>

            <div className='container mt-5 text-start position-relative'>
                <h4 className='fs-2'>Horse Adventures & Equine Activities</h4>
                <p className='fs-5'>Equestrian adventures</p>
                <div className='row'>
                    {adventures.map((horsedata) => {
                        return (
                            <>
                                <div className='col-md-6 col-lg-3  cursor-pointer'>
                                    <div className='h-50'>
                                        
                                            <img src={`${imageurl}${horsedata.attributes?.publicData?.cover_photo?.url}`} className='rounded w-100 h-100' role="button"></img>
                                        
                                        <div className=' justify-content-between position-absolute'>
                                            <p className='text-white' role="button">{horsedata?.attributes?.title.length>0? `${horsedata?.attributes?.title.slice(0,30)}`:''}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
                <h4 className='fs-4 text-success ' role="button">Show all Horse Adventures and Activities <i class="fa-solid fa-angle-right"></i></h4>
            </div>














        </div>
    )
}

export default Horseadventures