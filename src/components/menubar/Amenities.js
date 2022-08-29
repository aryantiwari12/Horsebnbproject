import React from 'react'
import { Link,useMatch } from 'react-router-dom'
import { useState,useEffect } from 'react'
import "../menubar/Hoststalls.css";
import heneceforthApi from '../henceforthApi'
const Amenities = () => {

    heneceforthApi.setToken(localStorage.getItem("token"))
    let id = (localStorage.getItem('id'))
    const [amenitiesdata, setamenitiesdata] = useState([])
    // amenities:[})

    const match = useMatch('/create-stall/step6/:id')


    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setamenitiesdata({
            ...amenitiesdata,
            [name]: value
        })
        console.log("handlechange name",name)
        console.log("handlechange value",value)

       



    }

    const dataamenities = async () => {
        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: id,
                publicData: {
                    amenities: [amenitiesdata.dataname]
                }
            }
        )

    }
    const showalldata = async () => {
        let res = await heneceforthApi.Auth.Listid(match?.params.id)
        console.log(match.params.id)
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
                    <span className='fs-3 ms-2'>Amenities</span>
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
                    <div class="col">
                        <div class="p-3 ">
                            <p className='fs-3 text-start'>What amenities do you offer?</p>
                            <p className='text-start'>You will be able to add more amenities in your write up for your listing.</p>
                            <div class="overflow-scroll text-start">
                                <input className="form-check-input text-start" name='dataname' id="flexCheckDefault" type="checkbox" value="Climate Controlled Ban" onChange={handlechange} />
                                <label className='ms-4' for="flexCheckDefault">Climate Controlled Ban</label><br />
                                <input className="form-check-input text-start" name='dataname' type="checkbox" id="flexCheckDefault" value="Indoor Arena" onChange={handlechange}></input>
                                <label className='ms-4' for="flexCheckDefault">Indoor Arena</label><br />
                                <input className="form-check-input text-start" name='dataname' id="flexCheckDefault" type="checkbox" value="Outdoor Arena" onChange={handlechange}></input>
                                <label className='ms-4'   for="flexCheckDefault" >Outdoor Arena</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Hot walker</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Round pen</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Tack Room</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Tack Locker</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Wach Rack</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Hot water </label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Loghted Arena </label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Trail Riding Accessible </label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Horse TRail parking</label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Dog Friendly </label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Barthroom </label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Wifi </label><br />
                                <input className="form-check-input text-start" type="checkbox" ></input>
                                <label className='ms-4'>Saving INcluded </label><br />
                                {/* {amenitiesdata.map((amenitiesdata, index) => {
                                    return (
                                        <>
                                            <input
                                                type="checkbox"
                                                name="amenitiesdata"
                                                value={amenitiesdata}
                                                // onClick={handlecheckbox}
                                            />
                                            {amenitiesdata}
                                        </>
                                    );
                                })} */}

                            </div>
                            <hr></hr>
                            <div className=''>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>

                                <p className='float-start p-2' role="button">Back</p>

                                <Link to={`/create-stall/step7/${match?.params.id}`}>
                                    <button className='float-end border-0 bg-primary  p-2 text-white' onClick={dataamenities}>Next</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 ">
                            <img src="https://horsebnb.com:8081/assets/img/create-stalls/horse_image.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amenities