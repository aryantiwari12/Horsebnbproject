import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { sliderPropTypes } from 'rsuite/esm/Slider/Slider';
import henceforthApi from '../henceforthApi';


let id = (localStorage.getItem('secondID'))

const Descriptionguest = () => {


    const [description,setdescription]=useState("")
    const [extradetail,setextradetail]=useState("")


    const match = useMatch('/create-guest/step8/:id')
    const maxCount = 1000;
    const [count, seCount] = useState(0);




   

    const decriptiondata=async()=>{

        let res = await henceforthApi.Auth.Updatedlisting(
            {
                id:id,
                description:description,
                publicData:{
                    stepsCompleted:[],
                    extra_detail:extradetail
                }
            }
        )

    }





    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <img src="https://horsebnb.com:8081/assets/img/ms-icon-70x70.png" />
                    <span className='fs-3 ms-2'>Description</span>
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
                <div class="row gx-5 p-5 ">
                    <div class="col  p-5">
                        <div class="p-3 overflow-scroll">
                            <p className='text-start fs-3'>Describe your place to guests</p>
                            <p className='text-start fs-6'>Write a quick summary of your place. You can highlight what is special about your space, your business and how you will interact with guests.Do not include business name or contact information.</p>
                            <textarea placeholder="Enter your text here" rows="10" cols="60" className="App__textarea" id="myText" onChange={(e)=>{seCount(e.target.value.length);setdescription(e.target.value);{console.log(e.target.value)}}} /><br />
                            
                            <span className="App__counter float-end">{`${count} / ${maxCount}`}</span>

                            <p className='text-start fs-2'>Want to add more info?</p>
                            <p className='text-start'>Use the additional fields below to share more details</p>
                            <textarea className='float-start' rows={10} cols={62} onChange={(e)=>{setextradetail(e.target.value);setextradetail(e.target.value);{console.log(e.target.value)}}}></textarea>

                        </div>


                        <div className='mt-5'>
                            <i class="fa-solid fa-angle-left float-start" role="button"></i>

                            <p className='float-start p-2' role="button">Back</p>

                            <Link to={`/create-guest/checkin-and-checkout/${match?.params.id}`}>
                            <button className='float-end border-0 bg-primary  p-2 text-white' onClick={decriptiondata}>Next</button>
                            </Link>
                        </div>
                    </div>

                    <div class="col">
                        <div class="p-3 border bg-light">
                            <img src="https://horsebnb.com:8081/assets/img/guest_steps.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Descriptionguest