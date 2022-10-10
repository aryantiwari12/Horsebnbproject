import React, { useState, useEffect } from 'react'
import { Link, useMatch } from 'react-router-dom';
import henceforthApi from '../henceforthApi';
import "../menubar/Hoststalls.css";

const imageurl = `https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Small/`;

let id = (localStorage.getItem('id'))

const Getready = () => {

    const match = useMatch('/manage-listing/publish-listing/:id')

    const [data, setdata] = useState("")


    const publishdata = async () => {
        let res = await henceforthApi.Auth.publishData(
            {
                id:match.params.id
            }
        )
    }

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
             <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
            </div>
            <div class="container px-4 text-center mt-5 p-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-5 ">
                            <p className='text-start fs-3'>Get ready to start hosting</p>
                            <p className='text-start'>You are almost finished! If you are happy with your listing you can publish it now. If you want to edit any information you can also do that now.</p>
                            <div className='d-flex'>

                                <img src="https://horsebnb.com:8081/assets/img/check-circle-primary.svg" />
                                <p className='mt-2 ms-5'>Edit your listing?</p>
                                <p className='mt-2 ms-5 text-primary' role="button">Edit ?</p>
                            </div>
                            <hr />
                            <button className='border-0 bg-white-white '><img src="https://horsebnb.com:8081/assets/img/connect_stripe_buttin.png" /></button>
                            <div className='mt-5 text-start'>
                                <input type="checkbox" className='mt-5' />
                                <span className='ms-2 text-start'>By publishing your listing,you agree to our <br /><u role="button" className='text-danger'>Terms and conditions</u> and have read our <u className='text-danger'>privacy <br />Policy</u></span>

                            </div>
                        </div>
                        <button className="float-start badge-primary text-white border-0 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal4">Publish listing</button>

                        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-secondary fs-2" id="exampleModalLabel">Are you sure you want to publish this listing?</h5>
                                    </div>
                                    <div class="modal-footer ">
                                        <Link to="/manage-listing">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={publishdata} >Publish</button>
                                        </Link>
                                        <button type="button" class="btn btn-secondary">Save as draft</button>
                                    </div>
                                </div>
                            </div>
                        </div>







                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div className='h-25'>
                                <img src={`${imageurl}${data?.attributes?.publicData?.cover_photo?.url}`} className='w-75 h-25' />
                                <p className='text-muted text-start ms-5 fs-4'>1200, Sector 91, Greater Mohali,<br /> Punjab 140301, India</p>
                                <p className='text-start ms-5 '>{data?.attributes?.title}</p>
                                <p className='text-start ms-5 '>{data?.attributes?.description}</p>
                                <p className='text-start ms-5'>${data?.attributes?.publicData?.listing_price}/Night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getready