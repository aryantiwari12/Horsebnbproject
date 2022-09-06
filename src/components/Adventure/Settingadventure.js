import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi'


const Settingadventure = () => {


    const match = useMatch('/add-experience/step6/:id')
    const [maximumdata,setmaximumdata]=useState(0)

    const settingdata=async()=>{
        
        let res=await henceforthApi.Auth.Updatedlisting(
            {
                id:match.params.id,
                availabilityPlan:{},
                publicData:{
                    stepsCompleted:[],
                    group_size:maximumdata
                }
            }
        )

    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Settings</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form class="d-flex" role="search">

                            <button class=" border-0 bg-white text-primary fs-3">Save & Exit</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container px-4 text-center p-5">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 ">
                            <p className='text-start fs-3 fw-bold'>Enter maximum group size</p>
                            <p className='text-start '>Think about the group size that works best for your adventure. Should it be small and intimate? Is it fun with a large group? Please note that HorseBnB has a one-guest minimum, which means that if only one person books your adventure, you’ll still be expected to host.</p>
                            <input type="number"className='form-control' pattern="[0-9]*" placeholder='0' onChange={(e)=>{setmaximumdata(e.target.value)}} />
                        </div>
                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            <Link to={`/add-experience/step10/${match?.params.id}`}>
                            <button className='float-end border-0 bg-primary  p-2 text-white' onClick={settingdata}>Next</button>
                            </Link>
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

export default Settingadventure