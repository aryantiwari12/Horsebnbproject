import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useMatch } from 'react-router-dom'
import heneceforthApi from '../henceforthApi'


heneceforthApi.setToken(localStorage.getItem("token"))
let id = (localStorage.getItem('id'))


const Description = () => {


    const [typedata,settypedata]=useState()
    const match = useMatch('/create-stall/step8/:id')
    const [descriptionadd, setdescriptionadd] = useState("")
    const [extra, setextra] = useState("")
    const [agree, setAgree] = useState(false);

    const handleChange = () => {

        setAgree(!agree);

    }


    const Descriptiondata = async () => {

        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: id,
                description: descriptionadd,
                publicData: {
                    stepsCompleted: [],
                    extra_detail: extra,
                    is_accomodation_offered: agree,

                }
            }
        )

    }
    
    const showalldata=async()=>{
        let res = await heneceforthApi.Auth.Listid(match?.params.id)
        console.log(match.params.id)
        settypedata(res?.data)
    }
    useEffect(() => {
        return () => {
            showalldata()
        };
    }, [])






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
                <div class="row gx-5">
                    <div class="col p-5">
                        <div class="p-3 ">
                            <p className='text-start fs-3'>Describe your place to guests</p>
                            <p className='text-start fs-6'>Write a quick summary of your place. You can highlight what is special about your space, your business and how you will interact with guests.
                                Do not include business name or contact information.</p>
                            <textarea className='w-100 h-50' placeholder='Type here' value={descriptionadd.description} onChange={(e) => { setdescriptionadd(e.target.value); (console.log(e.target.value)) }} ></textarea>
                            <p className='text-start fs-3'>Want to add more info?</p>
                            <p className='text-start'>Use the additional fields below to share more details</p>
                            <textarea className='w-100 h-50' placeholder='Type here' value={extra} onChange={(e) => { setextra(e.target.value); (console.log(e.currentTarget.value)) }} ></textarea>
                            <div className='text-start mt-5'>
                                <input type="checkbox" className='' name="languages" id="flexCheckDefault" value="" onChange={handleChange}></input>
                                <label className='ms-2' htmlFor="flexCheckDefault">I also offer guest accomodations</label>
                                <hr />
                            </div>
                            <div className='mt-2'>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>
                                {/* /sucessfull-hosting/ */}
                                <p className='float-start p-2' role="button">Back</p>
                               
                                <Link to={`/create-stall${typedata?.attributes?.publicData?.type===1?'/checkin-and-checkout/':'/sucessfull-hosting/'}${match?.params.id}`}>
                                    <button className='float-end border-0 badge-primary  p-2 text-white' onClick={Descriptiondata}>Next</button>
                                    {console.log(typedata?.attributes?.publicData?.type)}
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="p-3">
                            <img src="https://horsebnb.com:8081/assets/img/create-stalls/horse_image.png" className='text-start'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description