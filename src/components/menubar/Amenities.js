import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../menubar/Hoststalls.css";
import heneceforthApi from '../henceforthApi'
import { map } from 'rsuite/esm/utils/ReactChildren';


const Amenities = () => {

    heneceforthApi.setToken(localStorage.getItem("token"))
    let id = (localStorage.getItem('id'))
    let Arraylist = ["Climate Controlled Barn", "Indoor Arena", "Outdoor Arena", "Hot Walker", "Round Pen", "Tack Room", "Tack Locker", "Wash Rack", "Hot Water", "Lighted Arena", "Trail  Riding Accessible", "Horse Trailer Parking", "Dog Friendly", "Bathroom", "Wifi", "Shavings Included",
        "Paddock", "Box Stall", "Box Stall with Run", "Stall Fans", "Matted Stalls", "Private Pasture", "Automatic Water Feeder", "Feed Buckets", "Water Buckets", "Electric Fencing", "Pasture", "Turn Out", "Mare Motel", "Accepts Stallions"];

    const match = useMatch('/create-stall/step6/:id')

    let List = new Map()
    const Amenitiesdata = (values, checked) => {
        if (checked) {
            List.set(values,values)
        } else {
            List.delete(values)
        }

    }

    const dataamenities = async () => {
        let AmenitiesList = []
        List.forEach((data) => {
            AmenitiesList.push(data)
        })
        let res = await heneceforthApi.Auth.Updatedlisting(
            {
                id: id,
                publicData: {
                    amenities: { AmenitiesList },
                    stepsCompleted: [1, 3, 5, 6, 7, 8, 9, 14, 15, 11, 12, 12, 6]
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
                                {Arraylist.map((result) => {
                                    return (
                                        <>
                                            <input type="checkbox"
                                                value={result}
                                                className="me-3"
                                                onChange={(e) => { Amenitiesdata(result, e.target.checked); { console.log(result, e.target.checked) } }}

                                            />
                                            <span className="font">{result}</span><br />

                                        </>
                                    )
                                })}


                            </div>
                            <hr></hr>
                            <div className=''>
                                <i class="fa-solid fa-angle-left float-start" role="button"></i>

                                <p className='float-start p-2' role="button">Back</p>

                                <Link to={`/create-stall/step7/${match?.params.id}`}>
                                    <button className='float-end border-0 badge-primary  p-2 text-white' onClick={dataamenities}>Next</button>
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