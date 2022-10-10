import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import henceforthApi from '../henceforthApi'



const Adventurepage = () => {

    const match = useMatch('/add-experience/step4/:id')

    const [adventuredata,setadventuredata]=useState("")
    const [moredata,setmoredata]=useState("")

    const maxCount = 1000;
    const [count, seCount] = useState(0);


    const adventure=async()=>{

        let res = await henceforthApi.Auth.Updatedlisting(
            {
                id:match.params.id,
                description:adventuredata,
                publicData:{
                    extra_detail:moredata,
                    stepsCompleted:[1, 2, 4, 4, 5, 6, 4, 4]
                }
            }
        )
                 
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Adventure Page</span>
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
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "35%" }}></div>
            </div>
            <div class="container px-4 text-center p-5 ">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 overflow-scroll ">
                            <h2 className='text-start'>Describe your adventure</h2>
                            <p className='text-start fs-6'>It is very important to describe your adventure in detail This should include start and end times, daily itinerary, what is included and what is not, also what guests should bring and what they shouldn’t. This is very important to streamline your bookings.</p>
                            <textarea className='float-start from-control w-100 App__counter' placeholder='Describe your adventure' rows={5} onChange={(e) => {seCount(e.target.value.length);setadventuredata(e.target.value);{console.log(e.target.value)}}} ></textarea>
                            <span className="App__counter float-end">{`${count} / ${maxCount}`}</span>

                            <p className='fs-3 text-start mt-5'>Want to add more info?</p>
                            <p className='text-start'>Use the additional fields below to share more details</p>
                            <textarea className='float-start w-100' placeholder='Type hrere.......' row={5} onChange={(e)=>{setmoredata(e.target.value)}}></textarea>
                        </div>
                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            <Link to={`/add-experience/step5/${match?.params.id}`}>
                                <button className='float-end border-0 bg-primary  p-2 text-white' onClick={adventure} >Next</button>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/experience.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventurepage