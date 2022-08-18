import React from 'react'


const Createstall = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-light shadow">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/logo_new.svg"></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center mt-5 p-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 text-start bg-light">
                            <h3 className='fs-2'>Hi hencemohali,<br/>
                                let's get started listing <br/>your space.</h3>
                                <p>STEP 1</p>
                                <p className='fw-bold fs-4'>What kind of place do you have?</p>
                                <p className='text-danger'>Please note if you offer multiple services, you must create an individual listing per category.</p>
                                <select className='w-100 border p-2'>
                                    <option>Choose stall type</option>
                                    <option>short term stall</option>
                                    <option>Monthly board</option>
                                </select>
                                <p className='fs-1'>Create a title for your listing?</p>
                                <p>Catch guest's attention with a listing title that highlights what makes your place special. This can not be your business name.</p>
                                <input type="text" className='form-control' placeholder='Enter a Title'/>
                                <button className='mt-5 bg-success border p-2 text-white'>Continue</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <img src="" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createstall