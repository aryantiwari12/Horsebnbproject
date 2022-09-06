import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import IAMGE from '../../IMG/image.png'
import henceforthApi from '../henceforthApi'


const Createguest = () => {

    const navigate=useNavigate(null)

    const[tittle, settittle] = useState("")

    const continuedata=async()=>{

        let res=await henceforthApi.Auth.createdraftlisting(
            {
                title:tittle,
                publicData:{
                    stepsCompleted:[1],
                    type:4
                }
            }
            )
        localStorage.setItem("secondID",res.data.id.uuid)
        navigate(`/create-guest/step3/${res.data.id.uuid}`)
    
    }


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
                        <div class="p-3 text-start " >
                            <h3 className='fs-2'>Hi hencemohali,<br/>
                                let's get started listing <br/>your space.</h3>
                                <p>STEP 1</p>
                                <p className='fw-bold fs-4'>Create a title for your listing?</p>
                                <p className='text-danger'>Please note if you offer multiple services, you must create an individual listing per category.</p>
                               
                                <p className='fs-1'>Create a title for your listing?</p>
                                <p>Catch guest's attention with a listing title that highlights what makes your place special. This can not be your business name.</p>
                                <input type="text" className='form-control'  placeholder='Enter a Title' name="title" onChange={(e)=>settittle(e.target.value)} required/>
                                {/* <Link to="/create-stall/step3/651"> */}
                                <button className='mt-5 bg-success border p-2 text-white' value="Validate" onClick={continuedata}>Continue</button>
                                {/* </Link> */}
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/guest_main.png" />
                            </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Createguest