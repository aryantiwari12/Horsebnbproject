import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import henceforthApi from '../henceforthApi'



const Adventuretitle = () => {

    const navigate=useNavigate(null)

    const [titledata,settitledata]=useState("")


    const continuetitle=async()=>{

        let res=await henceforthApi.Auth.createdraftlisting(
            {
                title:titledata,
                publicData:{
                    stepsCompleted:[1],
                    type:3
                }
            }
        )
        navigate(`/add-experience/step2/${res.data.id.uuid}`)

    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light shadow">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png"></img>
                    <p className='fs-2 mt-3'>Title</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center p-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <p className='text-start fs-2'>Start creating your Horse<br/> Adventure!</p>
                            <p className='text-start'>Please create a catchy and descriptive title for your listing. This is the first thing potential guests will see so try and stand out from the crowd.</p>
                            <input type="text" className='form-control' placeholder='please Enter Title' onChange={(e)=>{settitledata(e.target.value);{console.log(e.target.value)}}} />
                            <button className='mt-5 float-start bg-success border-0 p-2 text-white' onClick={continuetitle}>Continue</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/experience.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventuretitle