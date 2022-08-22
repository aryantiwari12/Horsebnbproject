import React from 'react'
import IMAGE from '../../IMG/publish.png';
const Photos = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Photos</span>
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
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col p-5">
                        <div class="p-3  rounded btn-square overflow-y-auto" >
                            <p className='text-start fs-3'>Add photos to your listing</p>
                            <p className='text-start'>Upload at least one photo to publish your listing. We strongly suggest adding multiple photos to attract attention to your listing. Do not include images of your barn name or contact information.</p>
                            <img src={IMAGE} /><br />
                            <button className='border-0 bg-success text-white p-2'>Upload Photos</button><br/>
                          
                        </div>
                        <div className='p-2 border w-50 mt-2'>
                                   <button className='float-start border '>Cover photo</button>
                                   <span><i class="fa-solid fa-trash" role="button"></i></span>
                                   <span className='ms-2'><i class="fa-solid fa-pen" role="button"></i></span>
                                   <img src="https://horsebnb.s3.us-east-2.amazonaws.com/Uploads/Images/Medium/1661163350343-cancel_black.png" className='w-100'/>
                            </div>
                        <hr />
                        <div className=''>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            
                                <button className='float-end border-0 bg-primary  p-2 text-white' >Next</button>
                           
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3 text-start">
                            <img src="https://horsebnb.com:8081/assets/img/lightbulb.svg" className='text-start'></img>
                            <p className='fs-3'>Quick tips for quality photos</p>
                            <ul>
                                <li>Use high quality photos to make your listing stand out</li>
                                <li>Make sure you have good lighting</li>
                                <li>Show off your listing</li>
                                <li>Use recent and up to date pictures</li>
                                <li>Add multiple photos to attract guests</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos